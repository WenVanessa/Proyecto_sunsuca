import '../css/home.css';
import logo from '../img/logo.png';
import sembradoEcologico from '../img/sembradoEcologico.jpg'; 
import regadoAutomatico from '../img/regadoAutomatico.jpg'; 
import cuidadoAmbiente from '../img/cuidadoAmbiente.jpg'; 
import procesamientoResiduos from '../img/procesamientoResiduos.jpeg'; 
import { Outlet, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GrCatalog } from "react-icons/gr";
import { IoMdMegaphone, IoMdPhotos, IoMdLogIn } from "react-icons/io";

function Home() {
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
            <main className='main-content'>
                <section className="hero-section">
                    <div className="hero-content">
                        <h1 className='title'>BIENVENIDOS A SUNSUCA</h1>
                        <p className='subtitle'>Soluciones ecológicas para el sector agropecuario</p>
                    </div>
                </section>
                <section id="servicios" className="services-section">
                    <div className="section-container">
                        <h2>Nuestros Servicios</h2>
                        <div className="services-grid">
                            {[
                                {
                                    title: "Sembrado ecológico",
                                    description: "Promovemos técnicas sostenibles para el cultivo ecológico.",
                                    image: sembradoEcologico,
                                },
                                {
                                    title: "Riego automático",
                                    description: "Sistemas inteligentes que optimizan el uso del agua.",
                                    image: regadoAutomatico,
                                },
                                {
                                    title: "Cuidado del medio ambiente",
                                    description: "Implementamos estrategias para proteger la naturaleza.",
                                    image: cuidadoAmbiente,
                                },
                                {
                                    title: "Procesamiento de residuos",
                                    description: "Gestión eficiente para convertir residuos en recursos.",
                                    image: procesamientoResiduos,
                                },
                            ].map((servicio, index) => (
                                <div key={index} className="service-card">
                                    <img src={servicio.image} alt={servicio.title} className="service-image" />
                                    <h3>{servicio.title}</h3>
                                    <p>{servicio.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="informacion" className="info-section">
                    <div className="section-container">
                        <h2>Información Pública</h2>
                        <div className="info-content">
                        <p>
                            SUNSUCA se compromete con el desarrollo sostenible y la innovación en el sector agropecuario. 
                            Nuestras prácticas están diseñadas para maximizar la producción mientras minimizamos el impacto ambiental.
                        </p>
                        <p>
                            Trabajamos en estrecha colaboración con agricultores y ganaderos para implementar soluciones 
                            tecnológicas que mejoren la eficiencia y la sostenibilidad de sus operaciones.
                        </p>
                        </div>
                    </div>
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

export default Home