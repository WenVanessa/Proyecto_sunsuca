import React from 'react';
import '../css/card.css';  // Puedes agregar los estilos personalizados para las tarjetas.

const Card = ({ children }) => {
    return (
        <div className="card">
            {children}
        </div>
    );
};

const CardImage = ({ src, alt }) => (
    <div className="card-image">
        <img src={src} alt={alt} style={{ width: '100%', borderRadius: '8px' }} />
    </div>
);
const CardHeader = ({ children }) => <div className="card-header">{children}</div>;
const CardTitle = ({ children }) => <h3 className="card-title">{children}</h3>;
const CardDescription = ({ children }) => <p className="card-description">{children}</p>;
const CardContent = ({ children }) => <div className="card-content">{children}</div>;
const CardFooter = ({ children }) => <div className="card-footer">{children}</div>;

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardImage };
