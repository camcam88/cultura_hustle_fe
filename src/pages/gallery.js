import * as React from "react"
import SEO from '../components/SEO';
import GalleryStyle from '../components/ImgGallery'
import './index.css'

const GalleryPage = () => {
    return (
    <main>
        <SEO
            title="Gallery"
        />
        <h1>Gallery</h1>
        <GalleryStyle/>
    </main>
)
}

export default GalleryPage