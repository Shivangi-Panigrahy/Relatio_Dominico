export const currentDate = new Date();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

export const tasks = [
  {
    id: 1,
    parentId: 0,
    title: 'Project Initialization',
    start: new Date(year, month, 1),
    end: new Date(year, month, 3),
    progress: 50,
  },
  {
    id: 2,
    parentId: 1,
    title: 'Requirement Gathering',
    start: new Date(year, month, 1),
    end: new Date(year, month, 2),
    progress: 30,
  },
  {
    id: 3,
    parentId: 1,
    title: 'Feasibility Study',
    start: new Date(year, month, 2),
    end: new Date(year, month, 3),
    progress: 70,
  },
  {
    id: 4,
    parentId: 0,
    title: 'Development Phase',
    start: new Date(year, month, 4),
    end: new Date(year, month, 10),
    progress: 40,
  },
  {
    id: 5,
    parentId: 4,
    title: 'UI Design',
    start: new Date(year, month, 4),
    end: new Date(year, month, 5),
    progress: 60,
  },
  {
    id: 6,
    parentId: 4,
    title: 'Backend Development',
    start: new Date(year, month, 5),
    end: new Date(year, month, 7),
    progress: 30,
  },
  {
    id: 7,
    parentId: 4,
    title: 'Integration',
    start: new Date(year, month, 7),
    end: new Date(year, month, 9),
    progress: 20,
  },
  {
    id: 8,
    parentId: 0,
    title: 'Testing & Deployment',
    start: new Date(year, month, 11),
    end: new Date(year, month, 14),
    progress: 10,
  },
];

export const dependencies = [
  { id: 1, predecessorId: 2, successorId: 3, type: 0 }, // Requirement Gathering -> Feasibility Study
  { id: 2, predecessorId: 3, successorId: 4, type: 0 }, // Feasibility Study -> Development Phase
  { id: 3, predecessorId: 5, successorId: 6, type: 0 }, // UI Design -> Backend Development
  { id: 4, predecessorId: 6, successorId: 7, type: 0 }, // Backend Development -> Integration
  { id: 5, predecessorId: 7, successorId: 8, type: 0 }, // Integration -> Testing & Deployment
];

export const resources = [
  { id: 1, text: 'Project Manager' },
  { id: 2, text: 'Business Analyst' },
  { id: 3, text: 'UI/UX Designer' },
  { id: 4, text: 'Backend Developer' },
  { id: 5, text: 'QA Engineer' },
  { id: 6, text: 'DevOps Engineer' },
];

export const resourceAssignments = [
  { id: 0, taskId: 1, resourceId: 1 },
  { id: 1, taskId: 2, resourceId: 2 },
  { id: 2, taskId: 3, resourceId: 2 },
  { id: 3, taskId: 4, resourceId: 1 },
  { id: 4, taskId: 5, resourceId: 3 },
  { id: 5, taskId: 6, resourceId: 4 },
  { id: 6, taskId: 7, resourceId: 4 },
  { id: 7, taskId: 8, resourceId: 5 },
];
