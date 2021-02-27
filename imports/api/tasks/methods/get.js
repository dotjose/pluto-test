// TODO: tasks get method
import { Tasks } from '../index';

const getCompletedTasks = () => {
  const tasks = Tasks.find({ isPrivate: false, status: 'completed' }).fetch().reverse();
  return tasks;
};

const getIncompletedTasks = () => {
  const tasks = Tasks.find({ isPrivate: false, status: 'incomplete', }).fetch().reverse();
  return tasks;
};

export { getCompletedTasks, getIncompletedTasks };
