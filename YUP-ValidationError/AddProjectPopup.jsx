import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import * as yup from 'yup';
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


  /*
  // getting Input Data by using state:
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
  */

  const titleElem = useRef(null);
  const descriptionElem = useRef(null);
  const dateElem = useRef(null);

  const y = [];
  const validateInputs = (inputsData) => {
    const inputsSchema = yup.object({
      title: yup.string().required(),
      description:  yup.string().required(),
      date: yup.date().default(() => new Date()),
    });

    return inputsSchema.validateSync(inputsData, { abortEarly: false }, {strict: true});;
  };

  const handleProjectSubmit = () => {
    const prjData = {
      title: titleElem.current.value,
      description: descriptionElem.current.value,
      date: dateElem.current.value,
    };

    
    try {
      const validated = validateInputs(prjData);
    } catch (e) {
      // console.log('BASYUNYA', e.errors);
      console.log('BASYUNYA', e.errors);
      y.push(e);
    }
    console.log(y);
    // const validated = validateInputs(prjData);
    // console.log('BASYUNYA', validated.message);
    addProject({...prjData, id: _.uniqueId()});
    // setInputs({});
    changeCurrentAction('no-project');
  };

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
      <Input ref={titleElem} htmlFor='title' label='Title' type='text' textarea={false} id='title' name='title' />
      <Input ref={descriptionElem} htmlFor='description' label='Description' textarea={true} id='description' name='description' />
      <Input ref={dateElem} htmlFor='due-date' label='Due Date' type='date' textarea={false} id='due-date' name='date' />
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

