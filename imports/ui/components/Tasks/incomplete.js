import React from 'react';

const IncompleteTasks = ({ data }) => {
  return (
    <div className="group-container open">
      <div className="group-head">
        <p>Incomplete</p>
      </div>
      <div className="group-content">
        {data.map(task => (
          <div className="task" key={task._id}>
            <a
              className="task-link has-color-tag"
              href="#"
              style={{ borderColor: '#4e42c3' }}
            >
              <div className="task-link-head">
                <div className="task-checkbox">
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox-toggle">
                      <i className="checkbox-icon icon-check" />
                    </span>
                  </label>
                </div>
                <div className="task-title">
                  <p>{task.title}</p>
                </div>
              </div>
              <div className="task-link-body">
                <div className="indicators">
                  {task.hasDescription === true ? (
                    <span className="icon-indicator">
                      <i className="icon-description" />
                    </span>
                  ) : null}
                  {task.commentsCount > 0 ? (
                    <span className="icon-indicator">
                      <i className="icon-chat" />
                    </span>
                  ) : null}
                  {task.filesCount > 0 ? (
                    <span className="icon-indicator">
                      <i className="icon-attach" />
                    </span>
                  ) : null}
                  {task.totalTimeTracked > 0 ? (
                    <span className="icon-indicator">
                      <i className="icon-timer" />
                    </span>
                  ) : null}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncompleteTasks;
