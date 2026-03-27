import React from 'react';
import { cn } from '../lib/utils';

interface TechCardProps {
  label?: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export const TechCard = ({ label, title, className, children }: TechCardProps) => (
  <div className={cn(
    "relative bg-white/5 border border-white/10 p-6 overflow-hidden group",
    className
  )}>
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-tech" />
    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-tech" />
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-tech" />
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-tech" />
    
    {label && (
      <div className="text-[10px] font-mono text-cyan-tech uppercase tracking-widest mb-4 opacity-50">
        [{label}]
      </div>
    )}
    
    {title && (
      <h3 className="text-xl font-display font-bold mb-4 uppercase italic">{title}</h3>
    )}
    
    <div className="relative z-10">{children}</div>
  </div>
);

interface TechButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export const TechButton = ({ href, onClick, className, variant = 'primary', children }: TechButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center gap-3 px-8 py-4 font-display font-black uppercase tracking-[0.2em] italic transition-all relative group shadow-[0_0_20px_rgba(0,242,255,0.1)]";
  const variants = {
    primary: "bg-cyan-tech text-black hover:bg-white hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]",
    outline: "border border-cyan-tech text-cyan-tech hover:bg-cyan-tech/10"
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-3">{children}</span>
      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </>
  );

  if (href) {
    return (
      <a href={href} className={cn(baseStyles, variants[variant], className)}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cn(baseStyles, variants[variant], className)}>
      {content}
    </button>
  );
};

interface SectionTitleProps {
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  children: React.ReactNode;
}

export const SectionTitle = ({ subtitle, align = 'left', className, children }: SectionTitleProps) => (
  <div className={cn(
    "mb-16",
    align === 'center' ? "text-center" : "text-left",
    className
  )}>
    {subtitle && (
      <div className="inline-block px-3 py-1 bg-cyan-tech/10 border border-cyan-tech/20 text-cyan-tech text-[10px] font-mono uppercase tracking-[0.3em] mb-4">
        {subtitle}
      </div>
    )}
    <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic leading-none">
      {children}
    </h2>
  </div>
);
