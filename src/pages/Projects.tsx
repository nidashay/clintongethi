import React, { useEffect, useState } from 'react';
import { IconBrandGithub, IconExternalLink, IconFolderCode } from '@tabler/icons-react';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
}

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  const repoPicks = ['Batch2Bash', 'Popflix', 'Skies-Mobile', 'Skies', 'Hellshift', 'gumbee_bot', 'vcsp'];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/nidashay/repos?per_page=100');
        const data = await response.json();
        const filtered = data.filter((repo: Repo) => 
          repoPicks.some(pick => pick.toLowerCase() === repo.name.toLowerCase())
        );
        // Sort to match the order of repoPicks
        const sorted = filtered.sort((a: Repo, b: Repo) => {
          return repoPicks.findIndex(p => p.toLowerCase() === a.name.toLowerCase()) - 
                 repoPicks.findIndex(p => p.toLowerCase() === b.name.toLowerCase());
        });
        setRepos(sorted);
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="projects-content">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
        <span style={{ color: 'var(--accent-green)' }}>$</span>
        <span style={{ color: 'var(--text-bright)' }}>ls -l projects/</span>
      </div>

      {loading ? (
        <div style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Loading repositories...</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {repos.map((repo) => (
            <div 
              key={repo.id}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '10px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.2s, transform 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-blue)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ color: 'var(--accent-blue)' }}><IconFolderCode size={24} /></div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a href={repo.html_url} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
                    <IconBrandGithub size={18} />
                  </a>
                  <a href={repo.html_url} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
                    <IconExternalLink size={18} />
                  </a>
                </div>
              </div>
              
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-bright)', marginBottom: '0.5rem' }}>
                {repo.name}
              </h3>
              
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '1.5rem', flexGrow: 1 }}>
                {repo.description || 'No description provided.'}
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ 
                  fontSize: '11px', 
                  padding: '3px 10px', 
                  borderRadius: '20px', 
                  background: 'rgba(88, 166, 255, 0.1)', 
                  color: 'var(--accent-blue)',
                  border: '1px solid rgba(88, 166, 255, 0.2)'
                }}>
                  {repo.language || 'Plain Text'}
                </span>
                {repo.stargazers_count > 0 && (
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                    ★ {repo.stargazers_count}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
