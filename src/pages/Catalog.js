import React, { useState } from 'react';
import '../css/catalog.css'; 
import logo from '../img/logo.png';
import sembradoEcologico from '../img/sembradoEcologico.jpg'; 
import regadoAutomatico from '../img/regadoAutomatico.jpg'; 
import cuidadoAmbiente from '../img/cuidadoAmbiente.jpg'; 
import procesamientoResiduos from '../img/procesamientoResiduos.jpeg';
import { Outlet, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GrCatalog } from "react-icons/gr";
import { IoMdMegaphone, IoMdPhotos, IoMdLogIn } from "react-icons/io";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardImage } from './Card'; // Importa los nuevos componentes

const services = [
    {
        id: 'sembrado-ecologico',
        title: 'Sembrado Ecológico',
        description: 'Técnicas de siembra que respetan el medio ambiente y maximizan la producción.',
        price: 1000, 
        image: sembradoEcologico,
    },
    {
        id: 'riego-automatico',
        title: 'Riego Automático',
        description: 'Sistemas inteligentes de riego que optimizan el uso del agua en grandes extensiones.',
        price: 1500,
        image: regadoAutomatico,
    },
    {
        id: 'cuidado-medio-ambiente',
        title: 'Cuidado del Medio Ambiente',
        description: 'Asesoría y implementación de prácticas agrícolas sostenibles.',
        price: 800, 
        image: cuidadoAmbiente,
    },
    {
        id: 'procesamiento-residuos',
        title: 'Procesamiento de Residuos',
        description: 'Gestión eficiente de residuos agrícolas para minimizar el impacto ambiental.',
        price: 1200, 
        image: procesamientoResiduos,
    }
];

function Catalog() {
    const [selectedService, setSelectedService] = useState('');
    const [notification, setNotification] = useState({ message: '', type: '' });

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get('name')?.toString() || '';
        const email = formData.get('email')?.toString() || '';
        const message = formData.get('message')?.toString() || '';

        console.log({ name, email, selectedService, message });

        // Configura la notificación
        setNotification({
            message: 'Solicitud enviada. Nos pondremos en contacto contigo pronto.',
            type: 'success',
        });

        // Oculta la notificación después de 5 segundos
        setTimeout(() => {
            setNotification({ message: '', type: '' });
        }, 5000);
    };

    return (
        <div>
            <header className="header">
                <nav className="nav-container">
                    <div className="logo">
                        <img src={logo} alt="Logo" className="logo-img" />
                    </div>
                    <ul className="nav-list">
                        <li><Link to="/"><FaHome size={25} color="white" /> Pagina Principal</Link></li>
                        <li><Link to="/catalog"><GrCatalog size={25} color="white" /> Contrata nuestros servicios</Link></li>
                        <li><Link to="/advertising"><IoMdMegaphone size={25} color="white" /> Publicidad</Link></li>
                        <li><Link to="/galleryPhotos"><IoMdPhotos size={25} color="white" /> Galeria de fotos</Link></li>
                        <li><Link to="/login"><IoMdLogIn size={25} color="white" /> Login</Link></li>
                    </ul>
                </nav>
                <Outlet />
            </header>
            <main>
                <div className='title'>
                    <h1>SUNSUCA - NUESTROS SERVICIOS</h1>
                </div>
                <div className="cards-container">
                    {services.map((service) => (
                        <Card key={service.id}>
                            <CardHeader>
                                <CardImage src={service.image} alt={service.title} />
                                <CardTitle>{service.title}</CardTitle>
                                <CardDescription>{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg font-semibold">Precio: ${service.price}</p>
                            </CardContent>
                            <CardFooter>
                                <button onClick={() => setSelectedService(service.id)}>Seleccionar</button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Nombre" required />
                    <input type="email" name="email" placeholder="Correo electrónico" required />
                    <textarea name="message" placeholder="Mensaje" required></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </main>
        </div>
    );
}

export default Catalog;
