import React from 'react';

export const Input = React.forwardRef(({ className = '', ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`px-3 py-2 border rounded bg-white text-black outline-none focus:ring-2 focus:ring-pink-500 ${className}`}
      {...props}
    />
  );
});
Input.displayName = 'Input';
