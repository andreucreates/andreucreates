import { useState } from "react";

type Skill = "escribir" | "leer" | "hablar" | "escuchar";
type Nivel = 0 | 25 | 50 | 75 | 80 | 85 | 90 | 100;

type Idioma = {
    nombre: string;
    nivelGeneral: "Básico" | "Intermedio" | "Avanzado" | "Nativo";
    skills: Record<Skill, Nivel>;
};

const idiomas: Idioma[] = [
    { nombre: "Español", nivelGeneral: "Nativo", skills: { escribir: 100, leer: 100, hablar: 100, escuchar: 100 } },
    { nombre: "Inglés", nivelGeneral: "Avanzado", skills: { escribir: 85, leer: 90, hablar: 80, escuchar: 100 } },
    { nombre: "Valenciano", nivelGeneral: "Nativo", skills: { escribir: 100, leer: 100, hablar: 100, escuchar: 100 } },
];

function SkillMeter({ label, value }: { label: string; value: number }) {
    return (
        <li className="flex items-center gap-3 p-3">
            <span className="w-20 shrink-0 text-sm text-slate-300">{label}</span>
            <progress
                value={value}
                max={100}
                aria-label={`${label} ${value}`}
                className="progress-bar h-2 w-full rounded-full bg-slate-800"
            />
        </li>
    );
}

export default function Languages() {
    const [abiertos, setAbiertos] = useState<Set<number>>(new Set());

    const toggle = (i: number) => {
        setAbiertos(prev => {
            const next = new Set(prev);
            if (next.has(i)) {
                next.delete(i);
            } else {
                next.add(i);
            }
            return next;
        });
    };

    return (
        <div className="flex flex-col gap-8 mb-10">
            <h1 className="text-2xl font-semibold">Idiomas</h1>

            <ul className="flex flex-col gap-4">
                {idiomas.map((idioma, i) => {
                    const isOpen = abiertos.has(i);
                    const panelId = `idioma-panel-${i}`;

                    return (
                        <li key={idioma.nombre}>
                            <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-950 p6">
                                <div className="flex items-center gap-4 p-3">
                                    <button
                                        onClick={() => toggle(i)}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-700 text-lg font-semibold hover:bg-slate-800 transition-colors"
                                    >
                                        {isOpen ? "−" : "+"}
                                    </button>

                                    <div className="flex flex-col">
                                        <span className="text-lg font-semibold">{idioma.nombre}</span>
                                        <span className="text-sm text-indigo-400">{idioma.nivelGeneral}</span>
                                    </div>
                                </div>

                                {isOpen && (
                                    <ul
                                        id={panelId}
                                        className="flex flex-col gap-3 border-t border-slate-800 pt-4"
                                    >
                                        <SkillMeter label="Expresión escrita" value={idioma.skills.escribir} />
                                        <SkillMeter label="Comprensión lectora" value={idioma.skills.leer} />
                                        <SkillMeter label="Expresión oral" value={idioma.skills.hablar} />
                                        <SkillMeter label="Comprensión auditiva" value={idioma.skills.escuchar} />
                                    </ul>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
