export default function Projects() {
    return (
        <div className="flex flex-col gap-8 mb-10">
            <h1 className="text-2xl font-bold">Proyectos personales</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

                <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-6">
                    <h2 className="text-lg font-semibold">FichApp</h2>
                    <p className="text-sm font-normal leading-relaxed text-slate-300">
                        FichApp es una aplicación web orientada a la gestión y registro de la jornada laboral, diseñada para facilitar tanto a trabajadores como a empleadores el control de horarios, fichajes y organización del trabajo. La aplicación adapta sus funcionalidades según el rol de cada usuario, ofreciendo herramientas específicas para la gestión de empleados y para el seguimiento individual de la jornada.
                        <br/><br/>
                        El proyecto ha sido desarrollado con React y utiliza Supabase como plataforma para la autenticación de usuarios y la gestión de la base de datos PostgreSQL. La aplicación permite registrar fichajes con hora y geolocalización, gestionar puestos de trabajo, horarios, días laborables y festivos, asignar o desasignar trabajadores y consultar el historial de actividad. Además, incorpora Leaflet y OpenStreetMap para la gestión y visualización de ubicaciones.
                        <br/><br/>
                        FichApp cuenta también con un sistema de notificaciones e informes mensuales automáticos, pensado para facilitar el seguimiento de la jornada y detectar posibles incidencias. Su arquitectura está organizada mediante componentes, servicios, repositorios y modelos de dominio, buscando mantener una estructura modular, clara y fácilmente ampliable.
                        <br/><br/>
                        Este proyecto me ha permitido trabajar de forma práctica en el desarrollo de una aplicación web completa, abordando aspectos como la autenticación, gestión de datos, geolocalización, diseño de interfaces y organización de la lógica de negocio, además de profundizar en el diseño y mantenimiento de una arquitectura de software estructurada.
                    </p>
                </div>

                <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-6">
                    <h2 className="text-lg font-semibold">Portfolio personal / Blog profesional</h2>
                    <p className="text-sm font-normal leading-relaxed text-slate-300">
                        Este sitio web ha sido desarrollado como una plataforma personal para mostrar mi trabajo,
                        mis proyectos y mi trayectoria académica y profesional. Además de funcionar como blog,
                        actúa como portfolio técnico donde presento las tecnologías que domino, mis habilidades
                        lingüísticas, mi experiencia laboral y mis intereses dentro del desarrollo de software.
                    </p>
                    <p className="text-sm font-normal leading-relaxed text-slate-300">
                        El proyecto ha sido construido utilizando <strong>React</strong> y <strong>TypeScript</strong>,
                        con un diseño modular propio basado en componentes reutilizables y estilos personalizados.
                        La estructura de la web está organizada en distintas secciones —inicio, proyectos, estudios,
                        experiencia, idiomas y más— con el objetivo de ofrecer una navegación clara, moderna y coherente.
                    </p>
                    <p className="text-sm font-normal leading-relaxed text-slate-300">
                        Este blog es un proyecto en continuo crecimiento, en el que sigo incorporando nuevas
                        funcionalidades, mejorando el diseño y utilizando tecnologías que domino o que estoy aprendiendo.
                        Representa tanto mi evolución como desarrollador como mi interés en crear herramientas útiles,
                        bien estructuradas y visualmente atractivas.
                    </p>
                </div>

                <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-6">
                    <h2 className="text-lg font-semibold">Carbon Tracker</h2>
                    <p className="text-sm font-normal leading-relaxed text-slate-300">
                        CarbonTracker es una aplicación móvil multiplataforma diseñada para calcular y visualizar las emisiones de CO<sub>2</sub> generadas en los desplazamientos cotidianos. 
                        Permite registrar rutas automáticamente mediante geolocalización, comparar medios de transporte y generar informes personalizados de impacto ambiental.
                        <br /><br />
                        La interfaz está desarrollada en React Native, empleando Expo para la gestión del ciclo de vida y la integración con sensores del dispositivo. 
                        El backend se estructura en Supabase, donde se almacenan los trayectos, estadísticas y perfiles de usuario. 
                        Este proyecto forma parte de una iniciativa más amplia orientada a promover la movilidad sostenible y a facilitar a cada usuario una comprensión práctica de su huella ecológica.
                    </p>
                </div>

                <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-6">
                    <h2 className="text-lg font-semibold">Ragazzi Finder</h2>
                    <p className="text-sm font-normal leading-relaxed text-slate-300">
                        Ragazzi Finder es una red social creada para conectar a jugadores con compañeros de partida que compartan gustos, nivel y estilo de juego. 
                        La aplicación permite buscar perfiles compatibles, crear comunidades temáticas y comunicarse mediante un sistema de mensajería integrado.
                        <br /><br />
                        El proyecto fue desarrollado íntegramente en Kotlin como aplicación nativa para Android, incorporando Firebase para la autenticación, el almacenamiento en tiempo real y la distribución segura de mensajes. 
                        Su diseño se centra en mejorar la experiencia social del gaming, fomentando conexiones significativas entre usuarios y reduciendo la barrera de encontrar grupos o personas con intereses similares.
                    </p>
                </div>

            </div>
        </div>
    );
}