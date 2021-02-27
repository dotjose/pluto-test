// TODO: create task method
import { Tasks } from '../index';

export default createTask = payload => {
  const { title, dueDate, repeat, status, customFields, color } = payload;
  const tasksPayload = {
    title,
    dueDate: new Date(dueDate),
    repeat,
    status,
    customFields,
    color
  };
  return Tasks.insert(tasksPayload);
};
