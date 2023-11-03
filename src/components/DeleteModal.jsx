import React from 'react';

export default function DeleteModal() {
  return (
    <>
      <div className="task-modal">
        <div className="task-modal-body">
          <h4>Delete this Board?</h4>
          <p>
            Are you sure you want to delete the ‘Platform Launch’ board? This
            action will remove all columns and tasks and cannot be reversed.
          </p>
          <div className="buttons-holder">
            <button>Delete</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}
