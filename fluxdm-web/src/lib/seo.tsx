import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    type?: 'website' | 'article' | 'product';
    name?: string;
    image?: string;
    schema?: object; // JSON-LD structured data
}

export const SEO = ({ title, description, canonical, type = 'website', name, image, schema }: SEOProps) => {
    const siteName = name || 'FluxDM';
    const defaultImage = 'https://fluxdm.space/og-image.jpg';

    const siteUrl = 'https://fluxdm.space';
    const currentPath = window.location.pathname; // Using pathname to strip query params

    // Logic: 
    // 1. If canonical prop provided: use it (if relative, prepend siteUrl).
    // 2. Default: use siteUrl + currentPath (strips query params automatically).
    const resolvedCanonical = canonical
        ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`)
        : `${siteUrl}${currentPath}`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title} | {siteName}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={resolvedCanonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={resolvedCanonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image || defaultImage} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image || defaultImage} />

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};
