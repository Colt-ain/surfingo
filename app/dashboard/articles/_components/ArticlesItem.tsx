import Image from 'next/image';
import Link from 'next/link';

export default function ArticlesItem({
	article,
}) {
	return (
		<Link
			key={article.id}
			className='flex mb-10'
			href={`/dashboard/articles/${article.id}`}
		>
			<Image
				style={{
					width: 'auto',
					height: 'auto',
				}}
				className='rounded-lg mr-5'
				src={`/images/${article.id}.png`}
				alt={article.title}
				width={200}
				height={100}
				priority
			></Image>
			<div className='flex flex-col pb-4'>
				<div className='pb-4'>
					<strong className='text-2xl'>{article.title}</strong>
					<div className='text-xl'>{article.subTitle}</div>
				</div>
				<div className='w-[550px] truncate text-ellipsis'>{article.description}</div>
			</div>
		</Link>
	);
}
