import './App.css';
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
function App() {
  return (
    <div className='app'>
      <Header/>
      <Home/>
      <Contact/>
      <Skills/>
      <Experience/>
    </div>
  );
}

export default App;
