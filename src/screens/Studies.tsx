import circulos from '../assets/unionIcono.svg'

export default function Studies() {
    return (
        <div className="flex flex-col gap-8 mb-10">
            <h1 className='text-2xl font-semibold'>Mi trayectoria académica</h1>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 items-center">
                <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-6">
                    <h2 className='text-lg font-semibold'>Bachillerato de Ciencias y Tecnologías</h2>
                    <h4 className='text-sm font-medium text-indigo-400'>Instituto de Educación Secundaria Pere Boïl</h4>
                    <h6 className='text-xs uppercase tracking-wide text-slate-500'>2018 - 2020</h6>
                </div>
                <div className='flex items-center justify-center'>
                    <img src={circulos} alt="" width={200} height={80} />
                </div>
                <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-6">
                    <h2 className='text-lg font-semibold'>Grado en Ingeniería Informática</h2>
                    <h4 className='text-sm font-medium text-indigo-400'>Universidad Politécnica de Valencia</h4>
                    <h6 className='text-xs uppercase tracking-wide text-slate-500'>2020 - actualidad</h6>
                </div>
            </div>
        </div>
    )
}