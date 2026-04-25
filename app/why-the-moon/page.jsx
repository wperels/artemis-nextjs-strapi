import HeroSection from './../_components/HeroSection'
import InfoBlock from './../_components/InfoBlock'
import { fetchDataFromStrapi, processInfoBlocks, getStrapiMediaUrl } from '../../utils/strapi.utils'

export const revalidate = 300;

export default async function Home() {

  const data = await fetchDataFromStrapi(
    "infoblocks-experience2?populate[heroImage]=true&populate[info_blocks][populate][0]=button&populate[info_blocks][populate][1]=image"
  )
  
  const infoBlockData = processInfoBlocks(data)

  // heroImage served from Cloudinary — URL is already absolute
  const heroImageSrc = data?.heroImage?.[0]?.url
    ? getStrapiMediaUrl(data.heroImage[0].url)
    : null

  const heroAlt = data?.heroImage?.[0]?.alternativeText || "Why the Moon hero"

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
        theme="orange"
      />
      {infoBlockData.map((data) => <InfoBlock key={data.id} data={data} />)}
    </main>
  )
}