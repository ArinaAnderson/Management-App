import React, { useState, useEffect, useRef } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(({ children, buttonCaption }, ref) => {
  const dialogElem = useRef(null);

  useImperativeHandle(ref, () => ({
    openModal() {
      dialogElem.current.showModal();
    }
  }));
  
  return createPortal(
    <dialog ref={dialogElem} className="backdrop:bg-teal-900/90 py-4 px-6 rounded-md shadow-md">
      {children}
      <form method="dialog" className="text-right">
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-800 text-stone-100 hover:bg-teal-900 hover:text-stone-100">{buttonCaption}</button>
      </form>
    </dialog>,
    document.querySelector('#modal-root')
  );
});

export default Modal;
