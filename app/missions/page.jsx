import HighlightArticle from "../_components/Blog/HighlightArticle";
import SubscribeToNewsletter from "../_components/Blog/SubscribeToNewsletter";
import FeaturedItems from "../_components/FeaturedItems/FeaturedItems";
import { fetchBlogArticles, formatDate } from "../../utils/strapi.utils"; 
import ArticleIntro from "../_components/Blog/ArticleIntro";

export const revalidate = 3600;

export default async function Page() {
  let data = [];

  try {
    data = await fetchBlogArticles() ?? [];
  } catch (err) {
    console.error('Blog page failed to load articles:', err.message);
    return (
      <main className="blog-page">
        <p>Articles coming soon.</p>
      </main>
    );
  }

  const highlightArticleData = data.find((article) => article.isHighlightArticle) ?? null;
  const featuredArticlesData = data.filter((article) => !article.isHighlightArticle);

  return (
    <main className="blog-page">
      <HighlightArticle data={highlightArticleData} />
      <SubscribeToNewsletter />
      <FeaturedItems items={featuredArticlesData} />
    </main>
  );
}