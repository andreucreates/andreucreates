import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom"; 

type Props = {
    open: boolean;
    onClose: () => void;
    options: Array<{ label: string; href: string}>;
}

export default function SideDrawer({ open, onClose, options}: Props) {
    const panelRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
        function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose();}
        if (open) document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    useEffect(() => {
        if (open) onClose();
    }, [location.pathname]);

    function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
        if( e.target === e.currentTarget ) onClose();
    }

    return (
        <div
            id="side-menu"
            aria-hidden={!open}
            className={`fixed inset-0 z-20 bg-black/50 backdrop-blur-sm transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
        >
            <nav
                ref={panelRef}
                className={`fixed top-0 left-0 z-30 h-full w-72 max-w-[80%] bg-slate-950 border-r border-slate-800 p-6 flex flex-col gap-6 transition-transform duration-200 ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                <button 
                    className="self-end w-8 h-8 flex items-center justify-center rounded-full text-xl text-slate-100 hover:bg-slate-800 transition-colors" 
                    onClick={onClose} 
                    aria-label="Cerrar menú">
                    X
                </button>
                <ul className="flex flex-col gap-2">
                    {options.map((o) => (
                        <li key={o.href}>
                            <Link to={o.href} className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800 hover:text-white transition-colors">{o.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}