export default function WorkExperience() {
    return (
        <div className="flex flex-col gap-8 mb-10">
            <h1 className="text-2xl font-bold">Experiencia profesional</h1>

            <div className="grid gird-cols gap-6 md:grid-cols-2 lg:grid-cols-3">

                <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-6">
                    <h2 className="text-lg font-semibold">Becario en mantenimiento de software</h2>
                    <h4 className="text-sm font-medium text-indigo-400">Loterías y Apuestas del Estado</h4>
                    <h6 className="text-xs uppercase tracking-wide text-slate-500">500+ horas de experiencia 2025 — 2025</h6>
                    <p className="text-sm leading-relaxed text-slate-300">
                        Participación activa en el desarrollo, mantenimiento y optimización de aplicaciones corporativas,
                        trabajando tanto en frontend como en backend dentro de un entorno empresarial de alta exigencia.
                    </p>
                </div>

                <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-6">
                    <h2 className="text-lg font-semibold">Responsabilidades principales</h2>
                    <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
                        <li>Mantenimiento y mejora de aplicaciones ASP.NET 4.0 Web Forms.</li>
                        <li>Implementación de nuevas funcionalidades en C#, HTML, CSS y JavaScript.</li>
                        <li>Resolución de incidencias y refactorización de código legado.</li>
                        <li>Gestión de consultas SQL, stored procedures y tareas de optimización.</li>
                        <li>Colaboración con el equipo en pruebas, depuración y despliegues.</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-6">
                    <h2 className="text-lg font-semibold">Tecnologías utilizadas</h2>
                    <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
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
