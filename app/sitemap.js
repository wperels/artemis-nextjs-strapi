const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3003'

const routes = [
  '',
  '/about',
  '/events',
  '/missions',
  '/newsletter',
  '/scavenger-hunt-landing',
  '/techstack',
  '/why-the-moon',
]

export default function sitemap() {
  const lastModified = new Date()
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/scavenger-hunt-landing' ? 0.9 : 0.7,
  }))
}