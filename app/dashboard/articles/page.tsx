import { getArticles } from '@/app/lib/actions';
import ArticlesList from '@/app/dashboard/articles/_components/ArticlesList';

export default function ArticlesPage() {
	return (
		<ArticlesList getArticles={getArticles}/>
	)
}
