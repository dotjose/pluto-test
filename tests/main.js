import { expect } from 'chai';
import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';

import { Tasks } from '../imports/api/tasks/model/schema';

import {
  getCompletedTasks,
  getIncompletedTasks
} from '../imports/api/tasks/methods/get';

import postTasks from '../imports/api/tasks/methods/create';

describe('test', function() {
  it('should pass', () => {
    expect('plutio').to.eq('plutio');
  });
});

if (Meteor.isServer) {
  describe('Tasks', () => {
    describe('methods', () => {
      before(() => {
        Tasks.remove({});
      });

      it('can insert new tasks', () => {
        const payload = {
          title: 'New Test Task',
          dueDate: new Date(),
          status: 'completed',
          isPrivate: false
        };
        postTasks(payload);
        const tasks = Tasks.find({}).fetch();
        assert.equal(tasks.length, 1);
        assert.isTrue(tasks.some(task => task.title === payload.title));
      });

      it('can not change restricted schema values', () => {
        const payload = {
          title: 'Another Task',
          dueDate: new Date(),
          status: 'incomplete',
          hasDescription: true
        };
        postTasks(payload);
        const tasks = Tasks.find({}).fetch();
        assert.isTrue(tasks.some(task => task.hasDescription === false));
      });

      it('can retrieve only completed and publically visible tasks', () => {
        const tasks = getCompletedTasks();
        assert.isTrue(tasks.some(task => (task.status === 'completed' && task.isPrivate === false)));
        assert.equal(tasks.length, 1);
      });

      it('can retrieve only incompleted and publically visible tasks', () => {
        const tasks = getIncompletedTasks();
        assert.isTrue(tasks.some(task => (task.status === 'incomplete' && task.isPrivate === false)));
        assert.equal(tasks.length, 1);
      });
    });
  });
}
