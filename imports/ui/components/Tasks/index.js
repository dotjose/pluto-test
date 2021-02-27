import React, { useEffect, useState } from 'react';
import CompleteTasks from './complete';
import IncompleteTasks from './incomplete';
import AddTask from './add';
import {
  getCompletedTasks,
  getIncompletedTasks
} from '../../../api/tasks/methods/get';
import { useTracker } from 'react-meteor-hooks';
import { Meteor } from 'meteor/meteor';

const TaskLists = () => {
  Meteor.subscribe('tasks');

  const completedTasks = useTracker(() => {
    return getCompletedTasks();
  }, []);

  const incompletedTasks = useTracker(() => {
    return getIncompletedTasks();
  }, []);

  return (
    <>
      <AddTask />
      <IncompleteTasks data={incompletedTasks} />
      <CompleteTasks data={completedTasks} />
    </>
  );
};

export default TaskLists;
