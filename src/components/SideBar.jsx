import React, { useRef } from 'react';
import Button from './Button.jsx';

function SideBar({ projects, changeCurrentAction }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl rounded-b-none">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
      <div>
        <Button onClick={() => changeCurrentAction('add-project')}>
        + Add Project
        </Button>
      </div>
      <ul>
        {projects.map(({title, id}) => <li key={id}><button>{title}</button></li>)}
      </ul>
    </aside>
  );
}

export default SideBar;

// <AddProjectPopup ref={popupElem} onPopupSubmit={handleDialogueSubmit} onPopupClose={closeAddProjectPopup} />

// <AddProjectPopup ref={popupElem} addProject={addProject} />
