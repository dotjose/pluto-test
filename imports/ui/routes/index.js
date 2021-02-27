import TasksPage from '../pages/Tasks';

const dashboardRoutes = [
  {
    path: '/tasks',
    name: 'Tasks',
    icon: 'item-icon icon-check',
    component: TasksPage
  },
  {
    path: '/projects',
    name: 'Projects',
    icon: 'item-icon icon-toolkit',
    component: TasksPage //will be replaced by projects page content. I putted here only to show the structure as an example.
  },
  {
    path: '/people',
    name: 'People',
    icon: 'item-icon icon-user',
    component: TasksPage //will be replaced by people page content. I putted here only to show the structure as an example.
  },
  {
    path: '/calendar',
    name: 'Calendar',
    icon: 'item-icon icon-calendar',
    component: TasksPage //will be replaced by calendar page content. I putted here only to show the structure as an example.
  },
  {
    path: '/inbox',
    name: 'Inbox',
    icon: 'item-icon icon-inbox',
    component: TasksPage //will be replaced by inbox page content. I putted here only to show the structure as an example.
  },
  {
    path: '/timesheets',
    name: 'Timesheets',
    icon: 'item-icon icon-timer',
    component: TasksPage //will be replaced by timesheets page content. I putted here only to show the structure as an example.
  },
  {
    path: '/settings',
    name: 'Settings',
    icon: 'item-icon icon-settings',
    component: TasksPage //will be replaced by settings page content. I putted here only to show the structure as an example.
  },
  {
    path: '/support',
    name: 'Support',
    icon: 'item-icon icon-question-mark',
    component: TasksPage //will be replaced by support page content. I putted here only to show the structure as an example.
  }
];

export default dashboardRoutes;
