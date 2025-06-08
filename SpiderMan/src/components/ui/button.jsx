import React from 'react';

export const Button = ({ children, className = '', variant = 'default', ...props }) => {
  const base =
    'px-4 py-2 rounded font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    default: 'bg-pink-600 text-white hover:bg-pink-700 focus:ring-pink-500',
    ghost: 'bg-transparent border border-pink-500 text-white hover:bg-pink-500 hover:text-black'
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
