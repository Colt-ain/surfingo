import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import translate from '@iamtraction/google-translate';

export async function GET(
	req: NextRequest,
	{ params }: { params: { articleId: string } },
) {
	try {
		console.log('Fetching article By ID :::::::::::::::::::::::::::::::::');

		const searchParams = req.nextUrl.searchParams;
		const locale = searchParams.get('locale') || 'en';

		const articles = await fs.promises.readFile('app/lib/articles.json', 'utf8');

		const parsedArticles = JSON.parse(articles);
		const articleId = params.articleId;
		const article = parsedArticles.find(item => item.id === articleId);

		if (!article) {
			return NextResponse.json({ error: 'Article not found' });
		}

		if (locale && locale !== 'en') {
			try {
				const { title, subTitle, description } = article;

				const [translatedTitle, translatedSubTitle, translatedDescription,] = await Promise.all([
					translate(title, { from: 'en', to: locale }),
					translate(subTitle, { from: 'en', to: locale }),
					translate(description, { from: 'en', to: locale }),
				]);

				return NextResponse.json( {
					...article,
					title: translatedTitle.text,
					subTitle: translatedSubTitle.text,
					description: translatedDescription.text,
				});
			} catch (error) {
				console.log('Error fetching articles :::::::::::::::::::::::::::::::::', error);

				return NextResponse.json({ error: 'Failed to translate article' }, { status: 500 });
			}
		}

		return NextResponse.json(article);
	} catch (error) {
		return NextResponse.json({ error: 'Failed to fetch article' });
	}
}
