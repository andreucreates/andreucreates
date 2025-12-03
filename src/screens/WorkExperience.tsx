export default function WorkExperience() {
    return (
        <div className="app-section">
            <h1>Experiencia profesional</h1>

            <div className="app-grid">

                <div className="app-card">
                    <h2>Becario en mantenimiento de software</h2>
                    <h4>Loterías y Apuestas del Estado</h4>
                    <h6>500+ horas de experiencia — 2024</h6>
                    <p>
                        Participación activa en el desarrollo, mantenimiento y optimización de aplicaciones corporativas,
                        trabajando tanto en frontend como en backend dentro de un entorno empresarial de alta exigencia.
                    </p>
                </div>

                <div className="app-card">
                    <h2>Responsabilidades principales</h2>
                    <ul className="work-list">
                        <li>Mantenimiento y mejora de aplicaciones ASP.NET 4.0 Web Forms.</li>
                        <li>Implementación de nuevas funcionalidades en C#, HTML, CSS y JavaScript.</li>
                        <li>Resolución de incidencias y refactorización de código legado.</li>
                        <li>Gestión de consultas SQL, stored procedures y tareas de optimización.</li>
                        <li>Colaboración con el equipo en pruebas, depuración y despliegues.</li>
                    </ul>
                </div>

                <div className="app-card">
                    <h2>Tecnologías utilizadas</h2>
                    <ul className="work-list">
                        <li>ASP.NET 4.0 Web Forms (C#)</li>
                        <li>HTML · CSS · JavaScript</li>
                        <li>SQL Server Management Studio (SSMS)</li>
                        <li>Control de versiones con Git</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
