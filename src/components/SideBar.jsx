import React, { useRef } from 'react';
import Button from './Button.jsx';

function SideBar({ projects, activePrjId, changeCurrentAction, setActivePrjId }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl rounded-b-none">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
      <div>
        <Button type="button" onClick={() => {
          changeCurrentAction('add-project');
          setActivePrjId(null);
        }}>
        + Add Project
        </Button>
      </div>
      <ul className="list-none mt-8 mx-0 px-0">
        {projects.map(({title, id}) => {
          const baseBtnClass = "w-full text-left px-2 py-1 my-1 mr-1 rounded-sd"
          const btnClass = activePrjId === id
            ? `${baseBtnClass} bg-teal-900 text-stone-50 hover:bg-teal-700`
            : `${baseBtnClass} bg-stone-900 text-stone-50 hover:bg-stone-700`;
          return (
            <li className="px-0 mx-0" key={id}>
              <button
                className={btnClass}
                onClick={() => {
                  changeCurrentAction('open-project');
                  setActivePrjId(id);
                }}
              >
                {title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default SideBar;

// "w-full text-left px-2 py-1 my-1 mr-1 rounded-sd bg-stone-900 text-stone-50 hover:bg-stone-100  hover:text-stone-800"

// <AddProjectPopup ref={popupElem} onPopupSubmit={handleDialogueSubmit} onPopupClose={closeAddProjectPopup} />

// <AddProjectPopup ref={popupElem} addProject={addProject} />
