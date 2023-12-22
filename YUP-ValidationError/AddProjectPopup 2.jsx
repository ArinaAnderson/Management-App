import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import * as yup from 'yup';
import Input from './Input.jsx';
import Modal from './Modal.jsx';

const AddProjectPopup = ({addProject, changeCurrentAction}) => {
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
  const [formState, setFormState] = useState({
    /*
    ç {
      title: null,
      description: null,
      date: null,
    },
    */
    validationErrors: [],
    isValid: false,
  });

  const titleElem = useRef(null);
  const descriptionElem = useRef(null);
  const dateElem = useRef(null);

  const modalElem = useRef(null);

  const errorMessagesMapping = {
    InvalidString: () => {
      setFormState((prev) => ({...prev}));
    },
    InvalidDate: () => {
      setFormState((prev) => ({...prev}));
    },
    requiredInput: () => {
      setFormState((prev) => ({...prev}));
    },
    'Network Error': () => {},
  };

  let y = [];

  // https://github.com/jquense/yup/issues/211
  const validateInputs = (inputsData) => {
    const inputsSchema = yup.object({
      title: yup.string().trim().typeError('InvalidString').required(),
      description: yup.string().trim().typeError('InvalidString').required(),
      date: yup.date().typeError('InvalidDate').default(() => new Date()),
    });

    return inputsSchema.validateSync(inputsData, { abortEarly: false }); // {strict: true}
  };

  yup.setLocale({
    string: {
      typeError: 'invalidString',
    },
    date: {
      typeError: 'InvalidDate',
    },
    mixed: {
      required: 'requiredInput',
    },
  });

  const handleProjectSubmit = () => {
    const prjData = {
      title: titleElem.current.value,
      description: descriptionElem.current.value,
      date: dateElem.current.value,
    };

    try {
      validateInputs(prjData);
      setFormState({ validationErrors: [], isValid: true });
      addProject({...prjData, id: _.uniqueId()});
      changeCurrentAction('no-project');
    } catch (e) {
      // console.log('BASYUNYA', e.errors);
      console.log('BASYUNYA', e.inner[2].path, e.inner[2].message);
      // y.push(e.inner[0].path, e.inner[0].message, e.inner[1].path, e.inner[1].message, e.inner[2].path, e.inner[2].message);
      const res =  e.inner.map((el) => ({path: el.path, message: el.message}));
      y = res;
      // y.forEach((el) => console.log('ROSIE', el[0].message, el[1].message,el[2].message,)); // RPSIE, ..., InvalidDate dateField 
      // console.log('KUKU',y[0], y[1], y[2]);
      // // console.log(y, y[0][0].path, y[0][1].path,y[0][2].path); // y.push(e.inner);
      console.log(y)
    }
    // y.push(e.inner[0].path, e.inner[0].message, e.inner[1].path, e.inner[1].message, e.inner[2].path, e.inner[2].message);
    // console.log(y) [ "title", "requiredInput", "description", "requiredInput", "date", "InvalidDate" ]
    
  };

  return  (
    <>
      <Modal ref={modalElem} />
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={() => changeCurrentAction('no-project')}
              className="text-stone-800 hover:text-stone-950 hover:underline">
              Cancel
            </button>
          </li>
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
    </>
  )
};

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

