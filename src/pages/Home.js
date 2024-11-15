import { Outlet, Link } from "react-router-dom"

function Home() {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Pagina Principal</Link>
                    </li>
                    <li>
                        <Link to="/Login">login</Link>
                    </li>
                    <li>
                        <Link to="/Catalog">Catalogo</Link>
                    </li>
                    <li>
                        <Link to="/Advertising">Publicidad</Link>
                    </li>
                    <li>
                        <Link to="/GalleryPhotos">Galeria de fotos</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Home