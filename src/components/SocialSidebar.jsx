import React from 'react';
import { Github, Linkedin, MessageCircle, Instagram } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    id: 'github',
    icon: <Github size={20} />,
    label: 'GitHub',
    href: 'https://github.com/Smritibasnet09',
  },
  {
    id: 'linkedin',
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/smriti-basnet-a140ab329/',
  },
  {
    id: 'whatsapp',
    icon: <MessageCircle size={20} />,
    label: 'WhatsApp',
    href: 'https://wa.me/9779800000000',
  },
  {
    id: 'instagram',
    icon: <Instagram size={20} />,
    label: 'Instagram',
    href: 'https://instagram.com',
  },
];

export default function SocialSidebar() {
  return (
    <aside className="fixed-social-sidebar" aria-label="Social Profiles">
      <div className="social-sidebar-track">
        {SOCIAL_LINKS.map(({ id, icon, label, href }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-dock-item"
            aria-label={label}
            title={label}
          >
            {icon}
            <span className="social-tooltip">{label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
