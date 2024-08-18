'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IArticle } from '@/app/interfaces/common';

import styles from './styles.module.css';

function Articles({ articles }: {articles: IArticle[]}) {
	const scrollView = useRef<any | null>(null);
	const scrollTopY = useRef<number>(0);
	const intervalId = useRef<number>();

	const [isStoppedAnimation, setIsStoppedAnimation] = useState(false);

	const stopAnimation = () => {
		setIsStoppedAnimation(true);
		clearInterval(intervalId.current!);
	};

	const startInterval = () => {
		intervalId.current = setInterval(() => {
			scrollView.current?.scrollTo({
				top: scrollTopY.current + 1,
				behavior: 'smooth',
			});
			scrollTopY.current = scrollTopY.current + 1;
		}, 50);
	};

	useEffect(() => {
		if (isStoppedAnimation) return;

		startInterval();

		return () => {
			clearInterval(intervalId.current!);
		};
	}, [isStoppedAnimation]);

	useEffect(() => {
		if (scrollView.current) {
			scrollView.current.addEventListener('scroll', () => {
				scrollTopY.current = scrollView.current!.scrollTop;
			});
		}
	}, []);

	return (
		<div className='w-full relative'>
			<h4 className="text-2xl font-semibold">Last articles</h4>
			<Image
				style={{
					width: 'auto',
					height: 'auto',
				}}
				src="/home-image.png"
				width={500}
				height={380}
				className="hidden md:block mb-10 rounded-lg"
				alt="Screenshots of the dashboard project showing desktop version"
			/>
			<div
				ref={scrollView}
				className='w-full h-[300px] no-scrollbar relative'
				style={{
					overflowY: 'auto',
				}}
			>
				<div
					onMouseEnter={() => stopAnimation()}
					onMouseLeave={() => {
						setIsStoppedAnimation(false);
						scrollTopY.current = scrollView.current!.scrollTop;
					}}
				>
					{articles.map((article) => {
						return (
							<Link
								href={`/dashboard/articles/${article.id}`} key={article.id}
								className="flex flex-col border-b border-gray-200 p-4"
							>
								<span className="text-md font-semibold">{article.title}</span>
								<div className="text-sm text-gray-600 truncate text-ellipsis">{article.description}</div>
							</Link>
						);
					})}
				</div>
			</div>
			<div className={styles.overlayer}></div>
		</div>
	);
}

export default Articles;
