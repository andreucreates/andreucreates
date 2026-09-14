export default function Home() {
    return (
        <div className="flex flex-col gap-8 mb-10">
            <h1 className="text-2xl font-bold">Sobre mí</h1>
            <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <p>
                    ¡Bienvenido a mi espacio!
                </p>
                <p className="text-slate-300 leading-relaxed">
                    Me llamo <span className="text-indigo-400 font-semibold">Andreu</span> y estoy finalizando el Grado en Ingeniería Informática, especializado en <strong>Ingeniería de Software</strong>. Mi perfil está orientado al desarrollo de aplicaciones, tanto <strong>frontend como backend</strong>, ámbitos en los que he adquirido experiencia a través de proyectos personales y de mi experiencia profesional.
                </p>
                <p className="text-slate-300 leading-relaxed">
                    Actualmente busco incorporarme profesionalmente como <strong>desarrollador de software</strong>, con especial interés en seguir creciendo en el diseño y desarrollo de aplicaciones, afrontar nuevos retos técnicos y participar en proyectos en los que pueda continuar ampliando mis conocimientos.
                </p>
                <p className="text-slate-300 leading-relaxed">
                    En esta web puedes conocer algunos de los <strong>proyectos que he desarrollado</strong>, las <strong>tecnologías con las que trabajo</strong>, mi formación y experiencia profesional, así como mi manera de entender el desarrollo de software.
                </p>
            </div>
        </div>
    );
}
