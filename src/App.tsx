import { Suspense, useState, lazy } from "react";
import SideDrawer from "./components/SideDrawer";
import {Routes, Route, useLocation} from "react-router-dom";
import "./index.css";
import githubLogo from "./assets/githubLogo.png";
import ContactForm from "./components/ContactForm";
import SignIn from "./screens/SignIn";
import RutaProtegida from "./components/RutaProtegida";

const Home = lazy(() => import("./screens/Home"));
const WorkExperience = lazy(() => import("./screens/WorkExperience"));
const Projects = lazy(() => import("./screens/Projects"));
const Tech = lazy(() => import("./screens/Tech"));
const Languages = lazy(() => import("./screens/Languages"));
const Studies = lazy(() => import("./screens/Studies"));
const Buzon = lazy(() => import("./screens/Buzon"))

export default function App() {
  const [open, setOpen] = useState(false);
  const [contactFormVisibility, setContactFormVisibility] = useState(false);
  const location = useLocation();
  const esBack = location.pathname.toLowerCase() === "/signin" || location.pathname.toLowerCase() === "/buzon";

  const items = [
    {label: "Sobre mí", href: "/"},
    {label: "Experiencia laboral", href: "/experiencia"},
    {label: "Mis proyectos", href: "/proyectos"},
    {label: "Tecnologías utilizadas", href: "/tecnologias"},
    {label: "Idiomas", href: "/idiomas"},
    {label: "Trayectoria académica", href: "/estudios"}
  ];

  return (
    <div className={`min-h-screen flex flex-col  text-slate-100 ${esBack ? "bg-cyan-200" : "bg-slate-900"}`}>
      {!esBack && 
      <header className="sticky top-0 z-10 grid grid-cols-3 items-center gap-4 px-6 py-4 bg-slate-950 border-b border-slate-800">
        <button
          className="flex flex-col justify-center gap-1.5 w-8 h-8 justify-self-start"
          aria-label="Abrir menú"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls="side-menu"
          onClick={() => setOpen(true)}
        >
          <span className="block h-0.5 w-6 rounded bg-slate-100"></span>
          <span className="block h-0.5 w-6 rounded bg-slate-100"></span>
          <span className="block h-0.5 w-6 rounded bg-slate-100"></span>
        </button>
        <h1 className="text-lg font-semibold tracking-tight justify-self-center text-center">Blog de Andreu Aguado Pitxer</h1>
        <div className="flex items-center justify-self-end">
          <a
            href="https://github.com/andreucreates"     
            target="_blank"                          
            rel="noopener noreferrer" 
          >
            <button className="p-2 rounded-full hover:bg-slate-800 transition-colors">
              <img src={githubLogo} alt="gitLogo" className="w-6 h-6"></img>
            </button>
          </a>
        </div>
      </header>}

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 pt-12">
        <Suspense fallback={<p>Cargando...</p>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/experiencia" element={<WorkExperience />}/>
            <Route path="/proyectos" element={<Projects />}/>
            <Route path="/tecnologias" element={<Tech />}/>
            <Route path="/idiomas" element={<Languages />}/>
            <Route path="*" element={<p>Página no encontrada</p>}/>
            <Route path="/estudios" element={<Studies />}/>
            <Route path="/signIn" element={<SignIn/>}/>
            <Route path="/buzon" element={
              <RutaProtegida>
                <Buzon />
              </RutaProtegida>
            }/>
          </Routes>
        </Suspense>
      </main>
      <SideDrawer open={open} onClose={() => setOpen(false) } options={items}></SideDrawer>
      {contactFormVisibility && 
      <ContactForm  setContactFormVisibility={setContactFormVisibility}></ContactForm>}
      {!esBack &&
      <footer className="flex justify-center py-6 border-t border-slate-800 bg-slate-950">
        <button className="px-5 py-2.5 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white font-medium transition-colors" onClick={() => {setContactFormVisibility(true)}}>
          Contacta conmigo
        </button>
      </footer>}
    </div>
  );
}