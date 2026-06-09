import React from 'react';
import { IconShield, IconTarget, IconTrophy, IconChevronRight } from '@tabler/icons-react';

const HTB: React.FC = () => {
  return (
    <div className="htb-content">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
        <span style={{ color: 'var(--accent-green)' }}>$</span>
        <span style={{ color: 'var(--text-bright)' }}>nmap -sV hackthebox.eu</span>
      </div>

      <div style={{ 
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        padding: '2rem',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <img 
            src="https://www.hackthebox.com/badge/image/1149480" 
            alt="HackTheBox Badge" 
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }}
          />
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
          <StatBox icon={<IconTarget size={20} />} label="Rank" value="Pro Hacker" color="var(--accent-green)" />
          <StatBox icon={<IconTrophy size={20} />} label="Points" value="950+" color="var(--accent-blue)" />
          <StatBox icon={<IconShield size={20} />} label="User Owns" value="15+" color="var(--accent-purple)" />
          <StatBox icon={<IconShield size={20} />} label="System Owns" value="12+" color="var(--accent-orange)" />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a 
          href="https://app.hackthebox.com/profile/1149480" 
          target="_blank" 
          rel="noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 24px',
            background: 'var(--accent-green)',
            color: 'var(--bg-main)',
            borderRadius: '8px',
            fontWeight: 700,
            fontSize: '14px',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(86, 211, 100, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          View Full Profile <IconChevronRight size={18} />
        </a>
      </div>
    </div>
  );
};

const StatBox = ({ icon, label, value, color }: { icon: React.ReactNode, label: string, value: string, color: string }) => (
  <div style={{
    padding: '1rem',
    background: 'var(--bg-terminal)',
    border: '1px solid var(--border-muted)',
    borderRadius: '8px',
  }}>
    <div style={{ color: color, marginBottom: '8px', display: 'flex', justifyContent: 'center' }}>{icon}</div>
    <div style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</div>
    <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-bright)' }}>{value}</div>
  </div>
);

export default HTB;
