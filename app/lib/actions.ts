'use server';

import { redirect } from 'next/navigation';
import { IArticle } from '@/app/interfaces/common';

export async function getArticles(locale): Promise<IArticle[]> {
	return fetch(`http://localhost:3000/api/dashboard/articles?locale=${locale}`).then(async (response) => {
		const res = await response.json();

		console.log('res :::::::::::::::::::::::::::::::::::', res);

		return res;
	});
}

export async function getArticleById(articleId: string, locale: string): Promise<IArticle> {
	const article = await fetch(`http://localhost:3000/api/dashboard/articles/${articleId}?locale=${locale}`).then((response) => response.json());

	if (article.error) {
		return redirect('/not-found');
	}

	return article;
}
