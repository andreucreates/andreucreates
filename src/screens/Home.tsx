export default function Home() {
    return (
        <div className="app-section">
            <h1>Hola, soy Andreu</h1>

            <div className="app-card home-card">
                <p className="home-intro">
                    ¡Bienvenido a mi espacio! Aquí comparto una muestra de mi trabajo: mis proyectos,
                    las tecnologías que utilizo, los idiomas que hablo, así como mi formación académica
                    y experiencia profesional. También encontrarás algunos detalles sobre quién soy y
                    cómo entiendo el desarrollo de software.
                </p>

                <p className="home-bio">
                    Me llamo <span className="home-name">Andreu</span>, tengo 23 años y estoy finalizando el
                    Grado en Ingeniería Informática, especializado en la rama de{" "}
                    <strong>Ingeniería de Software</strong>. Actualmente estoy buscando empleo como
                    programador, con interés tanto en <strong>desarrollo frontend</strong> como{" "}
                    <strong>backend</strong>. Poseo experiencia práctica en ambos ámbitos gracias a
                    proyectos personales y a mi experiencia profesional.
                </p>
            </div>
        </div>
    );
}
