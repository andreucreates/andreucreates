export default function Spinner() {
    return (
        <div className="flex justify-center items-center py-12">
            <div
                className="h-10 w-10 rounded-full border-4 border-bs-slate-700 border-t-indigo-500 animate-spin"
                role="status"
                aria-label="Cargando"
            ></div>
        </div>
    )
}