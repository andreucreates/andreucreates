import { Suspense, useState, lazy } from "react";
import SideDrawer from "./components/SideDrawer";
import {Routes, Route} from "react-router-dom";
import "./index.css";
import githubLogo from "./assets/githubLogo.png";
import ContactForm from "./components/ContactForm";

const Home = lazy(() => import("./screens/Home"));
const WorkExperience = lazy(() => import("./screens/WorkExperience"));
const Projects = lazy(() => import("./screens/Projects"));
const Tech = lazy(() => import("./screens/Tech"));
const Languages = lazy(() => import("./screens/Languages"));
const Studies = lazy(() => import("./screens/Studies"));

export default function App() {
  const [open, setOpen] = useState(false);
  const [contactFormVisibility, setContactFormVisibility] = useState(false);

  const items = [
    {label: "Inicio", href: "/"},
    {label: "Experiencia laboral", href: "/experiencia"},
    {label: "Mis proyectos", href: "/proyectos"},
    {label: "Tecnologías utilizadas", href: "/tecnologias"},
    {label: "Idiomas", href: "/idiomas"},
    {label: "Trayectoria académica", href: "/estudios"}
  ];

  return (
    <div className="layout">
      <header className="topbar">
        <button
          className="hamburger"
          aria-label="Abrir menú"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls="side-menu"
          onClick={() => setOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1>Blog de Andreu Aguado Pitxer</h1>
        <div className="github-container">
          <a
            href="https://github.com/goodgyal"     
            target="_blank"                          
            rel="noopener noreferrer" 
          >
            <button className="github-btn">
              <img src={githubLogo} alt="gitLogo"></img>
            </button>
          </a>
        </div>
      </header>

      <main style={{paddingLeft: "20%", paddingRight: "20%", paddingTop: "3rem",}}>
        <Suspense fallback={<p>Cargando...</p>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/experiencia" element={<WorkExperience />}></Route>
            <Route path="/proyectos" element={<Projects />}></Route>
            <Route path="/tecnologias" element={<Tech />}></Route>
            <Route path="/idiomas" element={<Languages />}></Route>
            <Route path="*" element={<p>Página no encontrada</p>}></Route>
            <Route path="/estudios" element={<Studies />}></Route>
          </Routes>
        </Suspense>
      </main>
      <SideDrawer open={open} onClose={() => setOpen(false) } options={items}></SideDrawer>
      {contactFormVisibility && 
      <ContactForm  setContactFormVisibility={setContactFormVisibility}></ContactForm>}
      <footer>
        <button className="contact-button" onClick={() => {setContactFormVisibility(true)}}>
          Contacta conmigo
        </button>
      </footer>
    </div>
  );
}