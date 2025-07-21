import { MetadataRoute } from 'next';
import { ofertaStaticDb } from '@/utils/oferta-static-db';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    try {
        const offers = ofertaStaticDb.map((offer) => ({
            url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/oferta/${offer.title.toLowerCase()}`,
            priority: 1,
            lastModified: offer.lastModified,
            changeFrequency: 'weekly' as const,
        }));

        return [
            {
                url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
                priority: 1,
                changeFrequency: 'weekly',
            },
            {
                url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/kontakt`,
                priority: 1,
                changeFrequency: 'weekly',
            },
            ...offers,
        ];
    } catch (error) {
        console.error('Error generating sitemap:', error);
        return [];
    }
}
