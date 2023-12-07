import React, { useState, useEffect, useRef } from 'react';
import Project from './components/Project.jsx';
import SideBar from './components/SideBar.jsx';

function App() {
  // const [projects, setProjects] = useState([{title: 'text Susan', id: 0}, {title: 'wipe cat shelves', id: 1}]);
  /*
  const generateProjectsList = () => {
    const liElems = projects.map(({title, id}) => <li key={id}>{title}</li>);
    return <ul className="mt-8">{liElems}</ul>
  };
  */
  const [activeProject, setActiveProject] = useState(null);
  
  return (
    <>
      
      <main className="h-screen my-8 flex gap-8">
        <SideBar setActiveProject={setActiveProject}/>
        <Project />
      </main>
      

    </>
  );
}

export default App;

// <SideBar generateList={generateProjectsList} onClickHandler={} />
