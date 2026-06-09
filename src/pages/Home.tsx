import React from 'react';
import { IconBrandGithub, IconBrandYoutube, IconBrandInstagram, IconShield, IconBrandTwitch, IconBrandTiktok } from '@tabler/icons-react';

const Home: React.FC = () => {
  return (
    <div className="home-content">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
        <span style={{ color: 'var(--accent-green)' }}>$</span>
        <span style={{ color: 'var(--text-bright)' }}>whoami</span>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-bright)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Clinton <br />
            <span style={{ color: 'var(--accent-blue)' }}>Gethi</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '1.5rem', maxWidth: '500px' }}>
            Self-taught dev from <em style={{ color: 'var(--accent-orange)', fontStyle: 'normal' }}>Kenya</em> — specialising in low-level programming & <em style={{ color: 'var(--accent-orange)', fontStyle: 'normal' }}>reverse engineering</em>. Currently writing C, building games & tools.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <SocialBtn href="https://github.com/nidashay" icon={<IconBrandGithub size={16} />} label="GitHub" />
            <SocialBtn href="https://youtube.com/@dumb_nidashay" icon={<IconBrandYoutube size={16} />} label="YouTube" />
            <SocialBtn href="https://instagram.com/clint_be_me" icon={<IconBrandInstagram size={16} />} label="Instagram" />
            <SocialBtn href="https://tiktok.com/@clint_be_me" icon={<IconBrandTiktok size={16} />} label="TikTok" />
            <SocialBtn href="https://app.hackthebox.com/profile/nidashay" icon={<IconShield size={16} />} label="HTB" />
          </div>
        </div>
        
        <div style={{ position: 'relative' }}>
          <div style={{ 
            width: '150px', 
            height: '150px', 
            borderRadius: '50%', 
            border: '2px solid var(--border-color)',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 1
          }}>
            <img 
              src="/clinton.jpg" 
              alt="Clinton" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.nextElementSibling) {
                  (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                }
              }}
            />
            <div style={{ display: 'none', alignItems: 'center', justifyContent: 'center', height: '100%', background: 'var(--bg-secondary)', fontSize: '2rem', color: 'var(--accent-blue)' }}>CG</div>
          </div>
          <div style={{ 
            position: 'absolute', 
            inset: '-5px', 
            borderRadius: '50%', 
            border: '1px solid rgba(88, 166, 255, 0.3)',
            animation: 'pulse 2s infinite'
          }} />
        </div>
      </div>

      <div style={{ 
        background: 'rgba(30, 10, 42, 0.4)', 
        border: '1px solid rgba(110, 64, 201, 0.2)', 
        padding: '12px 20px', 
        borderRadius: '30px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        color: 'var(--accent-purple)',
        fontSize: '13px'
      }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-purple)', animation: 'blink 1.5s infinite' }} />
        streams daily on twitch
        <a href="https://twitch.tv/dumb_nidashay" target="_blank" rel="noreferrer" style={{ marginLeft: '10px', display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'underline' }}>
          <IconBrandTwitch size={14} /> twitch.tv/dumb_nidashay
        </a>
      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

const SocialBtn = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 16px',
      borderRadius: '6px',
      fontSize: '12px',
      border: '1px solid var(--border-color)',
      background: 'var(--bg-secondary)',
      transition: 'all 0.2s'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = 'var(--accent-blue)';
      e.currentTarget.style.color = 'var(--accent-blue)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'var(--border-color)';
      e.currentTarget.style.color = 'inherit';
    }}
  >
    {icon} {label}
  </a>
);

export default Home;
