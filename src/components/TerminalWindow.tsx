import React from 'react';
import { motion } from 'framer-motion';

interface TerminalWindowProps {
  children: React.ReactNode;
  title?: string;
  path?: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ children, title = 'clintongethi.fun', path = '~' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="terminal-window"
      style={{
        background: 'var(--bg-terminal)',
        border: '1px solid var(--border-color)',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        width: '100%',
        maxWidth: '900px',
        margin: '2rem auto'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 15px',
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-muted)',
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--terminal-red)' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--terminal-yellow)' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--terminal-green)' }} />
        </div>
        <div style={{ 
          marginLeft: '20px', 
          fontSize: '12px', 
          color: 'var(--text-muted)',
          display: 'flex',
          gap: '10px'
        }}>
          <span>{title}</span>
          <span>—</span>
          <span style={{ color: 'var(--accent-blue)' }}>{path}</span>
        </div>
      </div>
      <div style={{ padding: '1.5rem', minHeight: '400px' }}>
        {children}
      </div>
    </motion.div>
  );
};

export default TerminalWindow;
