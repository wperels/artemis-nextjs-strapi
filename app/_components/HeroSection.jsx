import Link from 'next/link'
import Image from 'next/image'

const HeroSection = ({ imgSrc, heroAlt, headline, theme = "turquoise" }) => {
  return (
    <section className="hero">
      <div className="hero__background">
        {imgSrc && (
          <Image
            src={imgSrc}
            fill
            alt={heroAlt || "Artemis hero"}
            priority
          />
        )}
      </div>
      <div className={`hero__headline hero__headline--${theme}`}>
        {headline || <h1>headline missing</h1>}
      </div>
      <img
          className={`hero__logo hero__logo--${theme}`}
          src="/assets/Artemis_program.svg"
          width={120}
          height={111}
          alt="NASA Artemis program logo"
        />
    </section>
  )
}

export default HeroSection