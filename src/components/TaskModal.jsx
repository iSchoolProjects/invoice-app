import React, { useState } from 'react';

export default function TaskModal() {
  const [state, setState] = useState({
    status: '',
    subtasks: [
      {
        title: '',
        isCompleted: true,
      },
    ],
  });
  const [open, setOpen] = useState(false);
  const [checkedCount, setCheckedCount] = useState(0);

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleCheckboxChange = (e) => {
    const checkbox = e.target;
    const isChecked = checkbox.checked;

    if (isChecked) {
      setCheckedCount(checkedCount + 1);
    } else {
      setCheckedCount(checkedCount - 1);
    }
  };

  const checkboxes = [
    'Research competitor pricing and business models',
    'Outline a business model that works for our solution',
    'Talk to potential customers about our proposed solution and ask for fair price expectancy',
  ];
  const options = [
    { value: 'doing', label: 'Doing' },
    { value: 'todo', label: 'Todo' },
    { value: 'done', label: 'Done' },
  ];

  return (
    <>
      <div className="task-modal">
        <div className="task-modal-body">
          <div className="title-section">
            <h3>
              Research pricing points of various competitors and trial different
              business models
            </h3>
            <div className="dropdown">
              <button onClick={handleOpen}>
                <img src="./assets/three-dots.svg" alt="" />
              </button>
              {open ? (
                <ul className="menu">
                  <li className="menu-item">
                    <button>Edit Task</button>
                  </li>
                  <li className="menu-item">
                    <button>Delete Task</button>
                  </li>
                </ul>
              ) : null}
            </div>
          </div>
          <p>
            We know what we're planning to build for version one. Now we need to
            finalise the first pricing model we'll use. Keep iterating the
            subtasks until we have a coherent proposition.
          </p>
          <p>
            Subtasks ({checkedCount} of {checkboxes.length})
          </p>
          {checkboxes.map((subtask, index) => (
            <div key={index} className="input-field">
              <input
                onChange={handleCheckboxChange}
                type="checkbox"
                id={`checkbox-${index}`}
              />
              <label htmlFor={`checkbox-${index}`}>{subtask}</label>
            </div>
          ))}
          <p>Current Status</p>
          <select name="status" id="doing" onChange={handleChange}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
