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
        <li className="skill-row">
            <span className="skill-label">{label}</span>
            <progress
                value={value}
                max={100}
                aria-label={`${label} ${value}`}
                className="progress-bar"
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
        <div className="app-section app-section--languages">
            <h1>Idiomas</h1>

            <ul className="language-list">
                {idiomas.map((idioma, i) => {
                    const isOpen = abiertos.has(i);
                    const panelId = `idioma-panel-${i}`;

                    return (
                        <li key={idioma.nombre} className="language-item">
                            <div className="app-card language-card">
                                <div className="language-header">
                                    <button
                                        onClick={() => toggle(i)}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        className="language-toggle"
                                    >
                                        {isOpen ? "−" : "+"}
                                    </button>

                                    <div className="language-title">
                                        <span className="language-name">{idioma.nombre}</span>
                                        <span className="language-level">{idioma.nivelGeneral}</span>
                                    </div>
                                </div>

                                {isOpen && (
                                    <ul
                                        id={panelId}
                                        className="language-skills"
                                    >
                                        <SkillMeter label="Escribir" value={idioma.skills.escribir} />
                                        <SkillMeter label="Leer" value={idioma.skills.leer} />
                                        <SkillMeter label="Hablar" value={idioma.skills.hablar} />
                                        <SkillMeter label="Escuchar" value={idioma.skills.escuchar} />
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
