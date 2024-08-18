import { getArticleById } from '@/app/lib/actions';
import FullArticle from '@/app/dashboard/articles/[articleId]/FullArticle';

export default async function ArticlesPage({
	params
}: {
	params: {
		articleId,
	},
}) {
	const { articleId } = params;

	return (
		<FullArticle articleId={articleId} getArticleById={getArticleById}/>
	);
}
