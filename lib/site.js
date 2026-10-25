// lib/site.js
export const SITE_NAME = 'Artemis Moon Journey'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3003'

export function pageMetadata({ title, description, shareDescription, path }) {
  const fullTitle = `${title} | ${SITE_NAME}`
  const share = shareDescription || description
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description: share,
      url: path,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description: share },
  }
}