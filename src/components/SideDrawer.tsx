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
            className={`drawer-overlay ${open ? "show" : ""}`}
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
        >
            <nav
                ref={panelRef}
                className={`drawer-panel ${open ? "open" : ""}`}
            >
                <button className="close-btn" onClick={onClose} aria-label="Cerrar menú"></button>
                <ul className="menu-list">
                    {options.map((o) => (
                        <li key={o.href}>
                            <Link to={o.href}>{o.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}