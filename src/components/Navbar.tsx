import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'projects', path: '/projects' },
    { name: 'htb', path: '/htb' },
  ];

  return (
    <nav style={{ 
      display: 'flex', 
      gap: '1.5rem', 
      marginBottom: '2rem',
      padding: '0.5rem 0',
      borderBottom: '1px solid var(--border-muted)',
      flexWrap: 'wrap'
    }}>
      {navItems.map((item) => (
        <Link 
          key={item.path} 
          to={item.path}
          style={{
            color: location.pathname === item.path ? 'var(--accent-green)' : 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          <span style={{ color: 'var(--accent-blue)' }}>./</span>
          {item.name}
          {location.pathname === item.path && (
            <span style={{ 
              width: '8px', 
              height: '14px', 
              background: 'var(--accent-green)', 
              marginLeft: '4px',
              animation: 'blink 1s step-end infinite'
            }} />
          )}
        </Link>
      ))}
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
