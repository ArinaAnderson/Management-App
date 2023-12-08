import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import { forwardRef, useImperativeHandle } from 'react';

const AddProjectPopup = forwardRef(({addProject}, ref) => {
  const dialogElem = useRef(null);

  useImperativeHandle(ref, () => ({
    openModal() {
      dialogElem.current.showModal();
    }
  }));

  const closeAddProjectPopup = () => {
    dialogElemm.current.close();
  };

  const handleDialogueSubmit = (e) => {
    // closeAddProjectPopup();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData);
    addProject({...formDataObj, id: _.uniqueId()});
  };


  return (
    <dialog ref={dialogElem} onClose={(e) => console.log('MARMUUUUU', e.type)} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      <form className="mt-4 text-right" method="dialog" onSubmit={handleDialogueSubmit}>
        <menu className="flex items-center justify-end gap-4 my-4">
          <li><button onClick={closeAddProjectPopup} type="button" className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Cancel</button></li>
          <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
        </menu>
        <label htmlFor="title" className="text-sm font-bold uppercase text-stone-500">
          Title
        </label>
        <input
          id="title"
          type="text"
          name="title"
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />

        <label htmlFor="description" className="text-sm font-bold uppercase text-stone-500">
          Description
        </label>
        <input
          id="description"
          type="text"
          name="description"
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      </form>
    </dialog>
  );
})

export default AddProjectPopup;

// const AddProjectPopup = forwardRef(({onPopupSubmit, onPopupClose}, ref) => {


// onClose dialog handler:
  // console.log(evt.target)
  // MARMUUUUU
  // <dialog class="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">

  // console.log(evt.type)
  // MARMUUUUU
  // close

/*
<li><button onClick={(e) => {
          e.preventDefault();
          props.onPopupClose();
        }} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Cancel</button></li>
*/

// onSubmit={props.onPopupClose}

/*
onSubmit={(e) => {
  const formData = new FormData(e.target);
  const formDataObj = Object.fromEntries(formData);
  console.log('KUKU', formDataObj.title, formDataObj.description);
  props.onPopupClose();
}}>
*/

