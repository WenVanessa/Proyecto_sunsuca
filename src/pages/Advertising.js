import { useState } from 'react';
import '../css/advertising.css';
import logo from '../img/logo.png';
import sembradoEcologico from '../img/sembradoEcologico.jpg'; 
import regadoAutomatico from '../img/regadoAutomatico.jpg'; 
import cuidadoAmbiente from '../img/cuidadoAmbiente.jpg'; 
import procesamientoResiduos from '../img/procesamientoResiduos.jpeg'; 
import { Outlet, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GrCatalog } from "react-icons/gr";
import { IoMdMegaphone, IoMdPhotos, IoMdLogIn } from "react-icons/io";

function Advertising() {

    const activities = [
        {
          title: "Implementación de Riego Inteligente",
          description: "Instalamos sistemas de riego automatizado en 500 hectáreas de cultivos de maíz, reduciendo el consumo de agua en un 30%.",
          image: sembradoEcologico,
        },
        {
          title: "Taller de Agricultura Sostenible",
          description: "Capacitamos a más de 100 agricultores locales en técnicas de cultivo ecológico y manejo sostenible de recursos.",
          image: regadoAutomatico,
        },
        {
          title: "Proyecto de Reforestación",
          description: "Plantamos 10,000 árboles nativos en áreas degradadas, contribuyendo a la restauración del ecosistema local.",
          image: cuidadoAmbiente,
        },
        {
          title: "Innovación en Procesamiento de Residuos",
          description: "Implementamos un sistema de compostaje a gran escala que convierte residuos agrícolas en abono orgánico de alta calidad.",
          image: procesamientoResiduos,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + activities.length) % activities.length);
    };

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % activities.length);
    };

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
            <main class="container mx-auto py-8">
                <section id="about" class="mb-16">
                    <h2 className="title">Innovación Agrícola Sostenible</h2>
                    <p className="paragraph">
                        En SUNSUCA, nos dedicamos a revolucionar el sector agropecuario con soluciones tecnológicas 
                        que promueven la sostenibilidad y la eficiencia. Nuestro compromiso es ayudar a los agricultores 
                        a maximizar sus rendimientos mientras minimizamos el impacto ambiental.
                    </p>
                    <a href="/Catalog" className="boton1">
                        Explorar Nuestros Servicios
                    </a>
                </section>
                <section className="activities mb-16">
                    <h2 className="title2">Nuestras Actividades Recientes</h2>
                    <div className="carousel">
                        <div className="carousel-content" style={{transform: `translateX(-${currentIndex * 50}%)`}}>
                            {activities.map((activity, index) => (
                                <div key={index} className="carousel-item">
                                    <h3>{activity.title}</h3>
                                    <img src={activity.image} alt={activity.title} className="carousel-image"/>
                                    <p>{activity.description}</p>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-prev" onClick={handlePrev}>&lt;</button>
                        <button className="carousel-next" onClick={handleNext}>&gt;</button>
                    </div>
                </section>
                <section id="testimonials" class="mb-16">
                    <h2 className="title3">Lo que dicen nuestros clientes</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="card" style={{ border: '3px solid #004d4d' }}>
                            <div class="card-content">
                                <p class="italic">"SUNSUCA transformó nuestra forma de cultivar. Sus sistemas de riego inteligente nos han ayudado a ahorrar agua y aumentar nuestra producción."</p>
                                <p class="font-semibold mt-4">- María Rodríguez, Agricultora</p>
                            </div>
                        </div>
                        <div class="card"style={{ border: '3px solid #004d4d' }}>
                            <div class="card-content">
                                <p className="say">"La asesoría en prácticas sostenibles de SUNSUCA nos ha permitido reducir nuestro impacto ambiental sin sacrificar la productividad."</p>
                                <p className="font-semibold mt-4" style={{ fontWeight: 'bold' }}>
                                - Juan Pérez, Ganadero
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact">
                    <h2>¿Listo para revolucionar tu agricultura?</h2>
                    <p>Contáctanos hoy para descubrir cómo podemos ayudarte a implementar soluciones agrícolas sostenibles y eficientes.</p>
                    <button>Contactar Ahora</button>
                </section>
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
            </main>
        </div>
    )
}

export default Advertising