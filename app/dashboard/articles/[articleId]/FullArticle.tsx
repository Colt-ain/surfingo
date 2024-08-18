'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLocale } from '@/app/providers/LocaleProvider';

function FullArticle({ getArticleById, articleId }) {
	const { locale } = useLocale()
	const [article, setArticle] = useState();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		getArticleById(articleId, locale).then((article) => {
			console.log('article :::::::::::::::::::::::::::::::::::', article);

			setArticle(article);
		}).finally(() => {
			setIsLoading(false);
		});
	}, [articleId, locale]);

	if (isLoading) {
		return <div>Loading.....</div>;
	}

	return article && (
		<div className='h-full w-full flex flex-col'>
			<strong className='text-5xl'>{article?.title}</strong>
			<strong className='text-2xl mb-10'>{article?.subTitle}</strong>
			<Image
				className='rounded-lg mr-5'
				src={`/images/${article?.id}.png`}
				alt={article?.title}
				width={600}
				height={300}
			></Image>
			<p className='mt-5'>{article.description}</p>
		</div>
	);
}

export default FullArticle;
