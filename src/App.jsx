import _ from 'lodash';
import React, { useState, useEffect, useRef } from 'react';
// import Project from './components/Project.jsx';
import SideBar from './components/SideBar.jsx';
import Main from './components/Main.jsx';

function App() {
  const [projects, setProjects] = useState([
    /*
    {title: 'text Susan', description: 'ask about Renee Cosmo', id: _.uniqueId()},
    {title: 'wipe cat shelves',description: 'ask about Renee Cosmo', id: _.uniqueId()},
    */
  ]);
  const [activePrjId, setActivePrjId] = useState(null);

  const addProject = (prj) => {
    setProjects((prev) => [...prev, prj]);
  };

  const deleteProject = (prj) => {
     const prjLocation = projects.findIndex((el) => el.id === prj.id);
    const beforePrj = projects.slice(0, prjLocation);
    const afterPrj = projects.slice(prjLocation + 1);
    setProjects(beforePrj.concat(afterPrj));
  };

  return (
    <>
      
      <main className="h-screen my-8 flex gap-8">
        <SideBar projects={projects} setActivePrjId={setActivePrjId} addProject={addProject} deleteProject={deleteProject} />
        <Main projects={projects} setActivePrjId={setActivePrjId} activePrjId={activePrjId} addProject={addProject} deleteProject={deleteProject} />
      </main>
      

    </>
  );
}

export default App;

// <SideBar generateList={generateProjectsList} onClickHandler={} />
