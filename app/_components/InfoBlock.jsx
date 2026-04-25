import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';


const InfoBlock = ( {data} ) => {
const { headline, text,  showimageRight, imageSrc, button } = data;

/* console.log(data)
console.log('Button data:', button);
console.log('Button exists?:', !!button); */

return (
    <div className="info-block">
    <div className={`info ${showimageRight ? 'info--reversed' : ''}`}>
      <img src= {imageSrc || "/assets/Artemis_program.svg"} alt={headline || "NASA Artemis program logo"} className="info__image" />

    {/* <div className="info__image-wrapper">
      <Image
        src={imageSrc || "/assets/Artemis_program.svg"}
        alt={headline}
            width={800}
            height={600}
        className="info__image"
        //style={{ objectFit: 'cover', objectPosition: 'center' }}
        style={{ width: '100%', height: 'auto' }}
      />
    </div> */}

    <div className="info__text">
      <h2 className="info__headline">{headline}</h2>
      <div className="copy">
        <ReactMarkdown>{text}</ReactMarkdown>
        {/* Link element moved from createInfoBlockButton function in strapi.utils.js */}
         {button && (
            <Link 
              href={`/${button.slug}`} 
              className={`btn btn--medium btn--${button.color}`}
            >
              {button.text}
            </Link>
            
          )}
      </div>
    </div>
  </div> 
  </div> 
)
}

export default InfoBlock