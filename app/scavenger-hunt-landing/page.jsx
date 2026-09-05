// app/scavenger-hunt-landing/page.jsx
import HeroSection from './../_components/HeroSection'
import ScavengerHuntLanding from '../_components/ScavengerHunt/ScavengerHuntLanding'
import { fetchDataFromStrapi, getStrapiMediaUrl } from '../../utils/strapi.utils'

export const revalidate = 300;

export default async function Page() {
  const data = await fetchDataFromStrapi(
    "infoblocks-scavenger-hunt-landing?populate[heroImage]=true"
  )

const heroImageSrc = data?.heroImage?.url
  ? getStrapiMediaUrl(data.heroImage.url)
  : null

const heroAlt = data?.heroImage?.alternativeText || "Scavenger Hunt hero"

  const heroHeadline = data?.heroHeadline
    ? data.heroHeadline.split('|').map((line, i) => (
        <h1 key={i}>{line}</h1>
      ))
    : null

  return (
    <main>
      <HeroSection
        imgSrc={heroImageSrc}
        heroAlt={heroAlt}
        headline={heroHeadline}
        theme="turquoise"
      />
      <ScavengerHuntLanding />
    </main>
  )
}