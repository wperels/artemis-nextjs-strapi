import HeroSection from './_components/HeroSection'
import InfoBlock from './_components/InfoBlock'
import { fetchDataFromStrapi, processInfoBlocks, getStrapiMediaUrl } from '../utils/strapi.utils'
import BlogPreview from './_components/Blog/BlogPreview/BlogPreview'

export default async function Home() {

  const data = await fetchDataFromStrapi(
    "infoblocks-landing2?populate[heroImage]=true&populate[info_blocks][populate]=button"
  )

  const InfoblockData = processInfoBlocks(data)

  // heroImage is served from Cloudinary — URL is already absolute
  const heroImageSrc = data?.heroImage?.url
    ? getStrapiMediaUrl(data.heroImage.url)
    : null

  // Use alt text from Strapi if set, otherwise fallback
  const heroAlt = data?.heroImage?.alternativeText || "Artemis hero"

  const heroHeadline = (
    <>
      <h1>artemis.</h1>
      <h1>rocks.</h1>
      <h1>our moon.</h1>
    </>
  )

  return (
    <main>
      <HeroSection headline={heroHeadline} imgSrc={heroImageSrc} heroAlt={heroAlt} />
      {InfoblockData.map((block) => (
        <InfoBlock key={block.id} data={block} />
      ))}
      <BlogPreview />
    </main>
  )
}

export const revalidate = 300