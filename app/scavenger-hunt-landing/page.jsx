// app/scavenger-hunt-landing/page.jsx
import HeroSection from './../_components/HeroSection'
import ScavengerHuntLanding from '../_components/ScavengerHunt/ScavengerHuntLanding'
import { fetchDataFromStrapi, getStrapiMediaUrl } from '../../utils/strapi.utils'

export const revalidate = 300;

export const metadata = {
  title: "Mankind's Journey Scavenger Hunt",
  description:
    'Collect clues, solve puzzles, and earn points and badges in a family-friendly Artemis scavenger hunt across articles, events, and museums.',
  alternates: { canonical: '/scavenger-hunt-landing' },
  openGraph: {
    title: "Mankind's Journey Scavenger Hunt | NASA Artemis",
    description:
      'Collect clues, solve puzzles, and earn badges in the Artemis scavenger hunt.',
    url: '/scavenger-hunt-landing',
    type: 'website',
  },
  twitter: {
    title: "Mankind's Journey Scavenger Hunt",
    description: 'Collect clues, solve puzzles, and earn badges.',
  },
}

export default async function Page() {
  const data = await fetchDataFromStrapi(
    "infoblocks-scavenger-hunt-landing?populate[heroImage]=true"
  )

  const heroImageSrc = data?.heroImage?.url
    ? getStrapiMediaUrl(data.heroImage.url)
    : null

  const heroAlt =
    data?.heroImage?.alternativeText ||
    "Orion spacecraft with the Moon and Earth in the background"

  const heroHeadline = data?.heroHeadline
    ? data.heroHeadline.split('|').map((line, i) => (
        <p key={i} className="hero__tagline">{line}</p>
      ))
    : null

  return (
    <main>
      <HeroSection
        imgSrc={heroImageSrc}
        heroAlt={heroAlt}
        headline={heroHeadline}
        title="Mankind's journey scavenger hunt"
        theme="turquoise"
      />
      <ScavengerHuntLanding />
    </main>
  )
}