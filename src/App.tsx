import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import TerminalWindow from './components/TerminalWindow';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import HTB from './pages/HTB';
import './index.css';

const AppContent: React.FC = () => {
  const location = useLocation();
  
  // Map paths to terminal paths for the window header
  const getPath = (pathname: string) => {
    switch (pathname) {
      case '/': return '~';
      case '/about': return '~/about';
      case '/projects': return '~/projects';
      case '/htb': return '~/htb';
      default: return '~';
    }
  };

  return (
    <div className="scanline" style={{ minHeight: '100vh', padding: '1rem' }}>
      <TerminalWindow path={getPath(location.pathname)}>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/htb" element={<HTB />} />
          </Routes>
        </AnimatePresence>
        
        <footer style={{ 
          marginTop: '3rem', 
          paddingTop: '1.5rem', 
          borderTop: '1px solid var(--border-muted)',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '11px',
          color: 'var(--text-muted)'
        }}>
          <span>© 2026 Clinton Gethi | GumBee Tech</span>
          <span>built with ❤️ & too many hours of debugging</span>
        </footer>
      </TerminalWindow>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
