import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import translate from '@iamtraction/google-translate';

export async function GET(
	req: NextRequest,
): Promise<NextResponse> {
	try {
		console.log('Fetching articles :::::::::::::::::::::::::::::::::');
		const searchParams = req.nextUrl.searchParams;
		const locale = searchParams.get('locale') || 'en';

		const articles = await fs.promises.readFile('app/lib/articles.json', 'utf8');

		const parsedArticles = JSON.parse(articles);

		if (locale && locale !== 'en') {
			const translatedArticles = await Promise.all(parsedArticles.map(async (article) => {
				const { title, subTitle, description } = article;
				const translatedTitle = await translate(title, { from: 'en', to: locale });
				const translatedSubTitle = await translate(subTitle, { from: 'en', to: locale });
				const translatedDescription = await translate(description, { from: 'en', to: locale });

				return {
					...article,
					title: translatedTitle.text,
					subTitle: translatedSubTitle.text,
					description: translatedDescription.text,
				};
			}));

			return NextResponse.json(translatedArticles);
		}

		return NextResponse.json(parsedArticles);
	} catch (error) {
		console.log('Error fetching articles :::::::::::::::::::::::::::::::::', error);

		return NextResponse.json({ error: 'Failed to fetch articles' });
	}
}
