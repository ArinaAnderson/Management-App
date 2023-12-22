import React from 'react';
import noProjectImage from '../assets/no-projects.png';
import Button from './Button.jsx';

export default function NoProjectSelected({ changeCurrentAction }) { 
  return <div className="mt-24 text-center w-2/3">
    <img src={noProjectImage} className="mx-auto object-contain w-16 h-16" alt="An empty task list" />
    <h2 className="text-xl font-bold text-stone-500 my-4">No project Selected</h2>
    <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
    <p className="mt-4">
      <Button type="button" onClick={() => changeCurrentAction('add-project')}>
        Create new project
      </Button>
    </p>
  
  </div>
};
