import React, { useState } from 'react';
import Tasks from './Tasks.jsx';

function Project({ activePrjId, projects, deleteProject, tasks, addTask }) {
  const activeProject = projects.find((prj) => prj.id === activePrjId);
  const currentTasks = tasks.filter(({prjId}) => prjId === activePrjId);

  const formattedDate = new Date(activeProject.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{activeProject.title}</h1>
          <button onClick={() => {
            deleteProject();
          }} className="text-stone-600 hover:text-stone-950">
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-600">{formattedDate}</p>
        <p className="text-stone-800 whitespace-pre-wrap">{activeProject.description}</p>
      </header>
      <Tasks tasks={currentTasks} activePrjId={activePrjId} addTask={addTask} />
    </div>
  );
}  

export default Project;

// text-3xl font-bold text-stone-600 mb-2
