import Link from "next/link";
//import Image from "next/image";

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
      {/* <img className="highlight-article__image" src={featuredImage} width= {500} height={500} alt="" ></Image>*/}
    <img className="highlight-article__image" src={featuredImage} alt="" />

</article>
  )
}

export default HighlightArticle