import React from 'react';
import { IconTerminal2, IconCode, IconCpu, IconGlobe, IconDeviceDesktop, IconShieldSearch } from '@tabler/icons-react';

const About: React.FC = () => {
  const skills = [
    { name: 'C', icon: <IconCode size={18} />, category: 'Systems' },
    { name: 'Python', icon: <IconCode size={18} />, category: 'Tools' },
    { name: 'Bash', icon: <IconTerminal2 size={18} />, category: 'Scripting' },
    { name: 'Arch Linux', icon: <IconDeviceDesktop size={18} />, category: 'OS' },
    { name: 'Docker', icon: <IconCpu size={18} />, category: 'DevOps' },
    { name: 'Neovim', icon: <IconCode size={18} />, category: 'Editor' },
    { name: 'Cisco Networking', icon: <IconGlobe size={18} />, category: 'Networking' },
    { name: 'Reverse Engineering', icon: <IconShieldSearch size={18} />, category: 'Security', re: true },
  ];

  return (
    <div className="about-content">
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
          <span style={{ color: 'var(--accent-green)' }}>$</span>
          <span style={{ color: 'var(--text-bright)' }}>cat bio.txt</span>
        </div>
        <div style={{ 
          color: 'var(--text-muted)', 
          fontSize: '14px', 
          lineHeight: '1.8',
          background: 'var(--bg-secondary)',
          padding: '1.5rem',
          borderRadius: '8px',
          borderLeft: '4px solid var(--accent-blue)'
        }}>
          "Society is the error I am just trying to debug it; One project at a time; Code Till I Die."
          <br /><br />
          I'm a systems programmer and cybersecurity enthusiast based in Embu, Kenya. 
          I spend most of my time diving into low-level code, reversing binaries, and building custom tools. 
          Founder of Gum Bee Tech.
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
          <span style={{ color: 'var(--accent-green)' }}>$</span>
          <span style={{ color: 'var(--text-bright)' }}>ls skills/</span>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {skills.map((skill) => (
            <div 
              key={skill.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 16px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                fontSize: '13px',
                borderLeft: skill.re ? '3px solid var(--accent-orange)' : '1px solid var(--border-color)',
                transition: 'transform 0.2s, border-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-blue)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = skill.re ? 'var(--accent-orange)' : 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span style={{ color: skill.re ? 'var(--accent-orange)' : 'var(--accent-blue)' }}>{skill.icon}</span>
              <span>{skill.name}</span>
              <span style={{ fontSize: '10px', color: 'var(--text-muted)', marginLeft: '4px' }}>[{skill.category}]</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
          <span style={{ color: 'var(--accent-green)' }}>$</span>
          <span style={{ color: 'var(--text-bright)' }}>echo $INTERESTS</span>
        </div>
        <div style={{ color: 'var(--accent-orange)', fontSize: '14px' }}>
          Low Level Programming, Reverse Engineering, Game Dev, Cyber Security
        </div>
      </div>
    </div>
  );
};

export default About;
