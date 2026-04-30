import { extractImageUrl, renderParagraphContent } from "@/utils/strapi.utils";
import ReactMarkdown from "react-markdown";


const ImageTextComponent = ({ component }) => {
  const { paragraph, imageCaption, image, isLandscape, imageShowsRight } =
    component || {};

  const imageUrl = extractImageUrl(image); // resolve first

  return (
    <div
      className={`article-text-image ${isLandscape ? "" : "article-text-image--portrait"}
      ${imageShowsRight ? "" : "article-text-image--reversed"}`}
    >
      <div className="copy article-text-image__text article-paragraph">
        <ReactMarkdown>{renderParagraphContent(paragraph)}</ReactMarkdown>
      </div>
      <div className="article-text-image__container">
        {imageUrl && (  // ← check resolved URL, not raw object
          <div className="article-text-image__image">
            <img src={imageUrl} alt={imageCaption || ''} />
          </div>
        )}
        {imageCaption && (
          <p className="article-text-image__caption copy-small">{imageCaption}</p>
        )}
      </div>
    </div>
  );
};

export default ImageTextComponent;

