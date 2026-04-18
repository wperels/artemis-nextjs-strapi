import { fetchBlogArticles } from "../../../../utils/strapi.utils"; 
import BlogPreviewItem from "@/app/_components/Blog/BlogPreview/BlogPreviewItem"

const BlogPreview = async () => {
  let data = [];
  
  try {
    data = await fetchBlogArticles() ?? [];
  } catch (err) {
    console.error('BlogPreview failed to load:', err.message);
    return null; // renders nothing instead of crashing the page
  }

  if (!data.length) return null; // no articles yet — render nothing

  const highlightArticle = data.find((article) => article.isHighlightArticle);
  const recentlyPublishedArticles = data
    .filter((article) => !article.isHighlightArticle)
    .slice(0, 3);

  // Guard: only include highlightArticle if it exists
  const articlesToDisplay = [
    ...(highlightArticle ? [highlightArticle] : []),
    ...recentlyPublishedArticles
  ].filter(Boolean); // removes any undefined entries

  if (!articlesToDisplay.length) return null;

  return (
    <div className="blog-preview">
      <h2 className="blog-preview__headline">the blog</h2>
      <div className="blog-preview__container">
        {articlesToDisplay.map((article) => (
          <BlogPreviewItem 
            key={article.id} 
            article={article} 
            headline={article.headline} 
          />
        ))}
      </div>
    </div>
  )
}

export default BlogPreview