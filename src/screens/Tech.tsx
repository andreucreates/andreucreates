export default function Tech() {
    return (
        <div className="flex flex-col gap-8 mb-10">
            <h1 className="text-2xl font-bold">Tecnologías utilizadas</h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

                <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-6">
                    <h2 className='text-lg font-semibold'>Entornos de desarrollo</h2>
                    <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
                        <li>Visual Studio Code</li>
                        <li>Visual Studio 2010</li>
                        <li>Visual Studio 2022</li>
                        <li>Android Studio</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-6">
                    <h2 className='text-lg font-semibold'>Sistemas de bases de datos</h2>
                    <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
                        <li>SQL Server Management Studio</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-6">
                    <h2 className='text-lg font-semibold'>Frameworks y librerías</h2>
                    <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
                        <li>React</li>
                        <li>React Native</li>
                        <li>ASP.NET 4.0 Web Forms</li>
                        <li>Windows Forms</li>
                        <li>Jetpack Compose</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-6">
                    <h2 className='text-lg font-semibold'>Control de versiones</h2>
                    <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
                        <li>Git, GitHub</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-6">
                    <h2 className='text-lg font-semibold'>Lenguajes de programación</h2>
                    <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
                        <li>Java</li>
                        <li>JavaScript, TypeScript</li>
                        <li>C++, C#</li>
                        <li>Kotlin</li>
                        <li>Python</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-6">
                    <h2 className='text-lg font-semibold'>Lenguajes de marcado</h2>
                    <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
                        <li>HTML</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-6">
                    <h2 className='text-lg font-semibold'>Lenguajes de estilo</h2>
                    <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
                        <li>CSS</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-6">
                    <h2 className='text-lg font-semibold'>Intercambio de datos</h2>
                    <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
                        <li>JSON</li>
                        <li>XML</li>
                        <li>SOAP</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-6">
                    <h2 className='text-lg font-semibold'>Herramientas</h2>
                    <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
                        <li>Postman</li>
                        <li>SoapUI</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
