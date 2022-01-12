import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function SEO({ children, description, location, title, image }) {
    const { site } = useStaticQuery(graphql`
        query {
            site {
            siteMetadata {
                title
                description
            }
            }
        }
`);
    return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
        <html lang="en" />
        <title>{title}</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta charSet="utf-8" content={site.siteMetadata.description} />
        {location && <meta property="og:url" content={location.href} />}
        <meta property="og:image" content={image || '/logo.svg'} />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
        />
        <meta property="og:description" content={description} key="ogdesc" />
        {children}
    </Helmet>
    );
}