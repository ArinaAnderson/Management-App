import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import _ from 'lodash';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  const inputElem = useRef(null);

  /*
  const taskIdCount = useRef(null);
  useEffect(() => {
    taskIdCount.current = 0;
  }, []);
  */
  useEffect(() => {
    inputElem.current.value = '';
  }, [tasks]);

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex items-center gap-4">
        <input ref={inputElem} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
        <button
          onClick={() => {
            setTasks((prev) => {
              // taskIdCount.current += 1;
              console.log('SPIRAL', inputElem.current.value);
              return [...prev, { text: inputElem.current.value, id: _.uniqueId() }];
            });
            // inputElem.current.value ='';
          }}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
      <p className="text-stone-900 my-4">
        This project does not have any tasks yet.
      </p>
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => {
            return <li key={task.id}>{task.text}</li>
          })}
        </ul>
      )}
    </section>
  );
};

// onClick={() => console.log('Ura')}

/*
{tasks.map((task) => {
            // taskIdCount.current += 1;
            return <li>{task.text}</li>
          })}
*/
