import Link from "next/link";

const HighlightArticle = ( {data} ) => {
  
  if (!data) return <p className="text-muted">No highlighted mission available.</p>;
  const { headline, excerpt, slug, featuredImage } = data;  
 
  return ( 
    <article className="highlight-article">
      <div className="highlight-article__info">
        <h3>{headline}</h3>
        <p className="copy">{excerpt}</p>
        <Link className="btn btn--turquoise btn--medium" href={`/missions/${slug}`}>
          Read More
        </Link>
      </div>

      {/* Desktop image */}
      <img className="highlight-article__image" src={featuredImage} alt="" />

      {/* Mobile only */}
      <div className="highlight-article__media">
        <img src={featuredImage} alt="" />
        <div className="highlight-article__overlay">
          <h3>{headline}</h3>
        </div>
      </div>
      <div className="highlight-article__mobile-footer">
        <p className="copy">{excerpt}</p>
        <Link className="btn btn--turquoise btn--medium" href={`/missions/${slug}`}>
          Read More
        </Link>
      </div>
    </article>
  )
}

export default HighlightArticle