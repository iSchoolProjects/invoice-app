import React from "react";
import { data } from "../data";

export default function Boards() {
  return (
    <div className="boards-holder">
      <div className="boards">
        {data.boards.slice(0, 1).map((board, boardIndex) => (
          <div className="board-card" key={boardIndex}>
            {board.columns.map((column, columnIndex) => (
              <div className="task-card" key={columnIndex}>
                <div className="container">
                  <span></span>
                  <h3>
                    {column.name.replace("-", " ").toLocaleUpperCase()}(
                    {column.tasks.length})
                  </h3>
                </div>
                {column.tasks.map((task, taskIndex) => (
                  <div key={taskIndex} className="card-text">
                    <h2>{task.title}</h2>
                    <p>{`${
                      task.subtasks.filter((subtask) => subtask.isCompleted)
                        .length
                    } of ${task.subtasks.length} subtasks`}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
        <div className="new-column">
          <h4>+New Column</h4>
        </div>
      </div>
    </div>
  );
}
