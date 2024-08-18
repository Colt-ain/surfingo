'use client';
import React, { useEffect, useState } from 'react';
import ArticlesItem from '@/app/dashboard/articles/_components/ArticlesItem';
import { useLocale } from '@/app/providers/LocaleProvider';

function ArticlesList({ getArticles }) {
	const { locale } = useLocale();
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		getArticles(locale).then((articles) => {
			console.log('articles :::::::::::::::::::::::::::::::::::', articles);

			setArticles(articles);
		}).finally(() => {
			setIsLoading(false);
		});
	}, [locale]);

	return isLoading ? <div>Loading .........</div> : (
		<div>
			{
				articles.map((article) => {
					return (
						<ArticlesItem key={article.id} article={article} />
					);
				})
			}
		</div>
	);
}

export default ArticlesList;
