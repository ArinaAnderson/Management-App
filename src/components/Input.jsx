import React from 'react';

export default function Input({ label, htmlFor, textarea, ...props }) {
  const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 focus:outline-none focus:bg-stone-100";

  return <p className="flex flex-col gap-1 my-4">
    <label className="text-sm uppercase font-bold text-stone-600" htmlFor={htmlFor}>{label}</label>
    {textarea
      ? <textarea className={classes} {...props} />
      : <input className={classes} {...props} />}
  </p>
};
