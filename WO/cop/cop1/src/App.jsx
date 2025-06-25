import "./App.css"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"
import PersonalInfo from "./components/PersonalInfo"
import Skills from "./components/Skills"

function App() {
  return (
    <main className="cv-container">
      <header>
        <h1>Panty Smellerz</h1>
        <p>Senior Developer</p>
        <p>bootysmeller@gmail.com</p>
      </header>
      <PersonalInfo />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </main>
  )
}

export default App
