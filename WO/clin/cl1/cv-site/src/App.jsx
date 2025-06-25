import { motion } from "framer-motion"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Press+Start+2P&display=swap');
  
  :root {
    --neon-pink: #ff2ced;
    --neon-purple: #9d00ff;
    --neon-cyan: #00f9ff;
    --dark-bg: #0f0a1a;
    --text-glow: 0 0 10px var(--neon-pink), 0 0 20px var(--neon-purple);
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--dark-bg);
    color: white;
    font-family: 'Orbitron', sans-serif;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const Header = styled(motion.header)`
  text-align: center;
  margin-bottom: 3rem;
  h1 {
    font-family: "Press Start 2P", cursive;
    color: var(--neon-pink);
    text-shadow: var(--text-glow);
    font-size: 3rem;
  }
`

const Section = styled(motion.section)`
  background: rgba(15, 10, 26, 0.7);
  border: 1px solid var(--neon-cyan);
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 0 15px rgba(0, 249, 255, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 25px rgba(0, 249, 255, 0.6);
    transform: translateY(-5px);
  }

  h2 {
    color: var(--neon-cyan);
    margin-top: 0;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>My Synthwave CV</h1>
        </Header>

        <Section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>About Me</h2>
          <p>Your bio here...</p>
        </Section>

        <Section
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Skills</h2>
          <p>Your skills here...</p>
        </Section>
      </Container>
    </>
  )
}

export default App
