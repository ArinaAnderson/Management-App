import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import _ from 'lodash';

export default function Tasks({ tasks, addTask, deleteTask }) {
  // const inputElem = useRef(null);

  /*
  const taskIdCount = useRef(null);
  useEffect(() => {
    taskIdCount.current = 0;
  }, []);
  */
 /*
  useEffect(() => {
    inputElem.current.value = '';
  }, [tasks]);
  */

  const [taskInput, setTaskInput] = useState('');

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex items-center gap-4">
        <input onChange={(e) => setTaskInput(e.target.value)} type="text" value={taskInput} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
        <button
          onClick={() => {
            addTask(taskInput);
            setTaskInput('');
          }
        }
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
      {tasks.length === 0
        ? <p className="text-stone-900 my-4">This project does not have any tasks yet.</p>
        : <ul className="list-disc p-4">
          {tasks.map(({text, id}) => {
            return <li key={id}>{text}</li>
          })}
        </ul>
      }
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
