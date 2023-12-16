import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import { forwardRef, useImperativeHandle } from 'react';
import Input from './Input.jsx';

const AddProjectPopup = forwardRef(({addProject, changeCurrentAction}, ref) => {
  const dialogElem = useRef(null);

  useImperativeHandle(ref, () => ({
    openModal() {
      // dialogElem.current.showModal();
    }
  }));

  const closeAddProjectPopup = () => {
    dialogElem.current.close();
  };

  const handleDialogueSubmit = (e) => {
    // closeAddProjectPopup();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData);
    e.target.reset();
    addProject({...formDataObj, id: _.uniqueId()});
  };



  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    date: '',
  });

  const hadleInputChange = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  
  const handleProjectSubmit = () => {
    addProject({...inputs, id: _.uniqueId()});
    setInputs({});
    changeCurrentAction('no-project');
  };

  /*
  const titleElem = useRef(null);
  const descriptionElem = useRef(null);
  const dateElem = useRef(null);

  const inputChangeHandler = (refElem, val) => {
    refElem.current = val;
  };
  */

  return  <div ref={dialogElem} className="w-[35rem] mt-16">
    <menu className="flex items-center justify-end gap-4 my-4">
      <li><button onClick={() => changeCurrentAction('no-project')} className="text-stone-800 hover:text-stone-950 hover:underline">Cancel</button></li>
      <li>
        <button
          onClick={handleProjectSubmit}
          className="px-6 py-2 border-2 border-stone-800 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-100  hover:text-stone-800">
          Save
        </button>
      </li>
    </menu>
    <div>
      <Input onChange={hadleInputChange} value={inputs.title.toUpperCase()} htmlFor='title' label='Title' type='text' textarea={false} id='title' name='title' />
      <Input onChange={hadleInputChange} value={inputs.description}  htmlFor='description' label='Description' type='text' textarea={true} id='description' name='description' />
      <Input onChange={hadleInputChange} value={inputs.date}  htmlFor='due-date' label='Due Date' type='text' textarea={false} id='due-date' name='date' />
    </div>
  </div>
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



/*

(
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

*/

