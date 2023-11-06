import React from 'react';
import {useNavigate} from 'react-router';
import {data} from '../data';

export default function Boards() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/dashboard/:id/column/:columnId/task/:taskId');
  };

  return (
    <div className="boards-holder">
      <div className="boards">
        {data?.boards?.slice(0, 1).map((board, boardIndex) => (
          <div className="board-card" key={boardIndex}>
            {board?.columns?.map((column, columnIndex) => (
              <div className="task-card" key={columnIndex}>
                <div className="container">
                  <h5 className={'background-' + ((+columnIndex + 1) % 5)}></h5>
                  <h3>
                    {column.name.replace('-', ' ').toLocaleUpperCase()}({column.tasks.length})
                  </h3>
                </div>
                {column?.tasks?.map((task, taskIndex) => (
                  <div key={taskIndex} onClick={handleNavigation} className="card-text">
                    <h2>{task.title}</h2>
                    <p>{`${task.subtasks.filter((subtask) => subtask.isCompleted).length} of ${task.subtasks.length} subtasks`}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
        <div className="new-column">
          <h4 onClick={() => navigate('/dashboard/:id/column')}> +New Column</h4>
        </div>
      </div>
    </div>
  );
}
