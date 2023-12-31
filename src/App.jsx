import _ from 'lodash';
import React, { useState, useEffect, useRef } from 'react';
import Project from './components/Project.jsx';
import SideBar from './components/SideBar.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import AddProjectSection from './components/AddProjectSection.jsx';

function App() {
  const [projects, setProjects] = useState([
    /*
    {title: 'text Susan', description: 'ask about Renee Cosmo', id: _.uniqueId()},
    {title: 'wipe cat shelves',description: 'ask about Renee Cosmo', id: _.uniqueId()},
    */
  ]);
  const [activePrjId, setActivePrjId] = useState(null);
  const [currentAction, setCurrentAction] = useState('no-project');

  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => setTasks((prev) => [...prev, {
    text: taskText,
    id: _.uniqueId(),
    prjId: activePrjId,
  }]);
  //setTasks((prev) => [...prev, task]);

  const deleteTask = (taskId) => {
    setTasks((prev) => prev.filter((id) => id !== taskId));
  };

  const addProject = (prj) => {
    setProjects((prev) => [...prev, prj]);
  };

  const changeCurrentAction = (stateVal) => {
    setCurrentAction(stateVal)
  };

  const deleteProject = () => {
    changeCurrentAction('no-project');
    /*
    const prjLocation = projects.findIndex((el) => el.id === activePrjId);
    const beforePrj = projects.slice(0, prjLocation);
    const afterPrj = projects.slice(prjLocation + 1);
    setProjects(beforePrj.concat(afterPrj));
    */
    setProjects(projects.filter((prj) => prj.id !== activePrjId));
    setActivePrjId(null);
  };

  const defineMainContent = () => {
    switch (currentAction) {
      case 'no-project':
        return <NoProjectSelected changeCurrentAction={changeCurrentAction} setActivePrjId={setActivePrjId} />;
      case 'add-project':
        return <AddProjectSection addProject={addProject} changeCurrentAction={changeCurrentAction} />;
      case 'open-project':
        return <Project
          projects={projects}
          deleteProject={deleteProject}
          tasks={tasks}
          addTask={addTask}
          deleteTask={deleteTask}
          activePrjId={activePrjId}
        />
      default:
        throw new Error(`Unknown current action: '${currentAction}'!`);
    }
  };

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar activePrjId={activePrjId} projects={projects} changeCurrentAction={changeCurrentAction} setActivePrjId={setActivePrjId} />
        {defineMainContent()} 
      </main>
      

    </>
  );
}

export default App;

// <AddProjectPopup />

// <SideBar generateList={generateProjectsList} onClickHandler={} />
// <main className="h-screen my-8 flex gap-8">

// <SideBar projects={projects} setActivePrjId={setActivePrjId} addProject={addProject} deleteProject={deleteProject} />

