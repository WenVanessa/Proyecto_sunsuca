import { useState } from 'react';
import '../css/galleryPhotos.css';
import logo from '../img/logo.png';
import sembradoEcologico from '../img/sembradoEcologico.jpg'; 
import regadoAutomatico from '../img/regadoAutomatico.jpg'; 
import cuidadoAmbiente from '../img/cuidadoAmbiente.jpg'; 
import procesamientoResiduos from '../img/procesamientoResiduos.jpeg'; 
import { Outlet, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GrCatalog } from "react-icons/gr";
import { IoMdMegaphone, IoMdPhotos, IoMdLogIn } from "react-icons/io";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function GalleryPhotos() {

    const images = [
        {
            original: sembradoEcologico,
            thumbnail: sembradoEcologico // Es para que la imagen se muestre mas pequeña en la parte de abajo 
        }, 
        {
            original: regadoAutomatico,
            thumbnail: regadoAutomatico
        }, 
        {
            original: cuidadoAmbiente, 
            thumbnail: cuidadoAmbiente
        }, 
        {
            original: procesamientoResiduos,
            thumbnail: procesamientoResiduos
        }
    ]

    return(
        <div>
            <header className="header">
                <nav className="nav-container">
                    <div className="logo"> <img src={logo} alt="Logo" className="logo-img" /> </div>
                    <ul className="nav-list">
                        <li><Link to="/"><FaHome size={25} color="white" />Pagina Principal</Link></li>
                        <li><Link to="/Catalog"><GrCatalog size={25} color="white" />Contrata nuestros servicios</Link></li>
                        <li><Link to="/Advertising"><IoMdMegaphone size={25} color="white"/>Publicidad</Link></li>
                        <li><Link to="/GalleryPhotos"><IoMdPhotos size={25} color="white" />Galeria de fotos</Link></li>
                        <li><Link to="/Login"><IoMdLogIn size={25} color="white"/>login</Link></li>
                    </ul>
                </nav>
                <Outlet />
            </header>
            <main>
                <section className='iniciativa'>
                    <h2>GALERIA DE PROYECTOS SOSTENIBLES</h2>
                    <p>Aquí podrás observar nuestras iniciativas ecológicas diseñadas para impulsar un futuro más verde 
                    y sostenible, contribuyendo al cuidado del medio ambiente y al bienestar de las próximas generaciones.</p>
                </section>
                <section className='gallery'>
                    <ImageGallery 
                        items={images}
                    />
                </section>
            </main>
            <footer id="contacto" className="footer">
                <div className="footer-content">
                <div className="footer-info">
                    <h3>SUNSUCA</h3>
                    <p>Innovación y sostenibilidad en el agro</p>
                </div>
                <div className="footer-contact">
                    <h4>Contáctanos</h4>
                    <p>Email: info@sunsuca.com</p>
                    <p>Teléfono: (123) 456-7890</p>
                </div>
                </div>
            </footer>
        </div>
    )
}

export default GalleryPhotos