import React, { useState, useEffect, useRef } from 'react';

function SideBar() {
  const [projects, setProjects] = useState([{title: 'text Susan', id: 0}, {title: 'wipe cat shelves', id: 1}]);
  const [isAddProjectPopupOpen, setIsAddProjectPopupOpen] = useState(false);

  const generateProjectsList = () => {
    const liElems = projects.map(({title, id}) => <li key={id}>{title}</li>);
    return <ul className="mt-8">{liElems}</ul>
  };

  const handleAddProjectBtnClick = () => {
    setIsAddProjectPopupOpen(true);
  };
  
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl rounded-b-none">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
      <button
        type="button"
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      >
        + Add project
      </button>
      {projects.length > 0 && generateProjectsList()}
    </aside>
  );
}

export default SideBar;
