export default function Projects() {
    return (
        <div className="app-section">
            <h1>Proyectos personales</h1>
            <div className="app-grid">
                
                <div className="app-card">
                    <h2>Carbon Tracker</h2>
                    <h4>
                        CarbonTracker es una aplicación móvil multiplataforma diseñada para calcular y visualizar las emisiones de CO<sub>2</sub> generadas en los desplazamientos cotidianos. 
                        Permite registrar rutas automáticamente mediante geolocalización, comparar medios de transporte y generar informes personalizados de impacto ambiental.
                        <br /><br />
                        La interfaz está desarrollada en React Native, empleando Expo para la gestión del ciclo de vida y la integración con sensores del dispositivo. 
                        El backend se estructura en Supabase, donde se almacenan los trayectos, estadísticas y perfiles de usuario. 
                        Este proyecto forma parte de una iniciativa más amplia orientada a promover la movilidad sostenible y a facilitar a cada usuario una comprensión práctica de su huella ecológica.
                    </h4>
                </div>

                <div className="app-card">
                <h2>Ragazzi Finder</h2>
                <h4>
                    Ragazzi Finder es una red social creada para conectar a jugadores con compañeros de partida que compartan gustos, nivel y estilo de juego. 
                    La aplicación permite buscar perfiles compatibles, crear comunidades temáticas y comunicarse mediante un sistema de mensajería integrado.
                    <br /><br />
                    El proyecto fue desarrollado íntegramente en Kotlin como aplicación nativa para Android, incorporando Firebase para la autenticación, el almacenamiento en tiempo real y la distribución segura de mensajes. 
                    Su diseño se centra en mejorar la experiencia social del gaming, fomentando conexiones significativas entre usuarios y reduciendo la barrera de encontrar grupos o personas con intereses similares.
                </h4>
                </div>

                <div className="app-card">
                    <h2>Portfolio personal / Blog profesional</h2>
                    <h4>
                        Este sitio web ha sido desarrollado como una plataforma personal para mostrar mi trabajo,
                        mis proyectos y mi trayectoria académica y profesional. Además de funcionar como blog,
                        actúa como portfolio técnico donde presento las tecnologías que domino, mis habilidades
                        lingüísticas, mi experiencia laboral y mis intereses dentro del desarrollo de software.
                    </h4>
                    <h4>
                        El proyecto ha sido construido utilizando <strong>React</strong> y <strong>TypeScript</strong>,
                        con un diseño modular propio basado en componentes reutilizables y estilos personalizados.
                        La estructura de la web está organizada en distintas secciones —inicio, proyectos, estudios,
                        experiencia, idiomas y más— con el objetivo de ofrecer una navegación clara, moderna y coherente.
                    </h4>
                    <h4>
                        Este blog es un proyecto en continuo crecimiento, en el que sigo incorporando nuevas
                        funcionalidades, mejorando el diseño y utilizando tecnologías que domino o que estoy aprendiendo.
                        Representa tanto mi evolución como desarrollador como mi interés en crear herramientas útiles,
                        bien estructuradas y visualmente atractivas.
                    </h4>
                </div>
            </div>
        </div>
    );
}