import React, { useState } from 'react';

function Project({activePrjId, projects, deleteProject, setActivePrjId}) {
  const [tasks, setTasks] = useState([]);

  const activeProject = projects.find((prj) => prj.id === activePrjId);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-stone-600 mb-2">{activeProject.title}</h1>
        <button onClick={() => {
          setActivePrjId(null)
          deleteProject(activeProject);
        }} className="text-stone-600 hover:text-stone-950">Delete</button>
      </div>
      <p className="text-stone-600">{activeProject.description}</p>
      <h2>Tasks</h2>
      <div className="flex items-center gap-4">
        <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
        <button className="text-stone-700 hover:text-stone-950">Add Task</button>
      </div>

      {tasks.length > 0 && (
        <ul>

        </ul>
      )}
    </>
  );
}

export default Project;

// text-3xl font-bold text-stone-600 mb-2
