import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: process.env.NEXT_BASE_URL!,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${process.env.NEXT_BASE_URL!}/about`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },

    ]
}