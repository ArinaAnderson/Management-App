import _ from 'lodash';
import React, { useState, useEffect, useRef } from 'react';
import AddProjectPopup from './AddProjectPopup.jsx';
import Project from './Project.jsx';

function Main({projects, activePrjId, addProject, deleteProject, setActivePrjId}) {
  const popupElem = useRef(null);

  const handleAddProjectBtnClick = () => {
    popupElem.current.openModal(); // API
  };

  const content = activePrjId
    ? <Project activePrjId={activePrjId} projects={projects} deleteProject={deleteProject} setActivePrjId={setActivePrjId} />
    : (
      <div className="mt-24 text-center w-2/3">
        <h2 className="text-xl font-bold text-stone-500 my-4">No project Selected</h2>
        <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
        <button
          onClick={handleAddProjectBtnClick}
          type="button"
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
            Create new project
        </button>
      </div>
    );
  return (
    <>
      <AddProjectPopup ref={popupElem} addProject={addProject} />
      {content}
    </>
  );
}

export default Main;
