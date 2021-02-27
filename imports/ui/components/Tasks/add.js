import React, { useState } from 'react';

import createTask from '../../../api/tasks/methods/create';

export default AddTask = () => {
  const [task, setTask] = useState('');

  saveTask = e => {
    setTask(e.target.value);
    if (e.which === 13) submit(e);
  };

  submit = e => {
    e.preventDefault();
    const taskPayload = {
      title: task,
      status: 'incomplete',
      dueDate: Date(),
      color: '#1f1f00'
    };
    try {
      const newTask = createTask(taskPayload);
      console.log(newTask);
    } catch (exception) {
        console.log(exception);
      console.log('Unable to create a task now');
    }
    setTask('');
  };

  return (
    <form className="add-task" noValidate="" onSubmit={e => submit(e)}>
      <div>
        <div className="fieldset add-task-input fieldset-stripped">
          <div className="fieldset-content">
            <label className="fieldset-label">
              <span className="fieldset-label-content has-icon">
                <i className="icon-plus" />
              </span>
              <input
                className=""
                name="title"
                placeholder="Add new task"
                type="text"
                autoComplete="off"
                value={task}
                onChange={e => saveTask(e)}
              />
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};
