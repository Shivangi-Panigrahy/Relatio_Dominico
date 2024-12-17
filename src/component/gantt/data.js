import avatart_img from "../../assets/Img_Avatar_1.png";
export const currentDate = new Date(Date.now());
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

export const tasks = [
  {
    id: 1,
    parentId: 0,
    title: 'Tema Design',
    role: '',
    start: new Date(year, month, 1),
    end: new Date(year, month, 6),
    progress: 31,
    heading : true
  },
  {
    id: 2,
    parentId: 1,
    title: 'Matteo Vellone',
    role: 'Designer',
    start: new Date(year, month, 1),
    end: new Date(year, month, 3),
    progress: 40,
    image: avatart_img,
    color: "#57C700",
    
  },
  {
    id: 3,
    parentId: 1,
    title: 'John Doe',
    role: 'Developer',
    start: new Date(year, month, 3),
    end: new Date(year, month, 5),
    progress: 70,
    image: avatart_img,
    color: "#FFA903"
  },
  {
    id: 4,
    parentId: 1,
    title: 'Jane Smith',
    role: 'UX Designer',
    start: new Date(year, month, 4),
    end: new Date(year, month, 6),
    progress: 90,
    image: avatart_img,
    color: "red"
  },
  {
    id: 5,
    parentId: 0,
    title: 'Tema Tecnico',
    role: '',
    start: new Date(year, month, 6),
    end: new Date(year, month, 8),
    progress: 45,
    heading : true
  },
  {
    id: 6,
    parentId: 5,
    title: 'Matteo Vellone',
    role: 'Designer',
    start: new Date(year, month, 8),
    end: new Date(year, month, 14),
    progress: 40,
    image: avatart_img,
    color: "#57C700"
  },
  {
    id: 7,
    parentId: 5,
    title: 'John Doe',
    role: 'Developer',
    start: new Date(year, month, 14),
    end: new Date(year, month, 20),
    progress: 70,
    image: avatart_img,
    color: "#FFA903"
  },
  {
    id: 8,
    parentId: 5,
    title: 'Jane Smith',
    role: 'UX Designer',
    start: new Date(year, month, 20),
    end: new Date(year, month, 25),
    progress: 90,
    image: avatart_img,
    color: "red"
  },
  // {
  //   id: 9,
  //   parentId: 0,
  //   title: 'Tema Design',
  //   role: '',
  //   start: new Date(year, month, 25),
  //   end: new Date(year, month, 28),
  //   progress: 0,
  // },
  // {
  //   id: 10,
  //   parentId: 9,
  //   title: 'Matteo Vellone',
  //   role: 'Designer',
  //   start: new Date(year, month, 8),
  //   end: new Date(year, month, 14),
  //   progress: 40,
  // },
  // {
  //   id: 11,
  //   parentId: 9,
  //   title: 'John Doe',
  //   role: 'Developer',
  //   start: new Date(year, month, 14),
  //   end: new Date(year, month, 20),
  //   progress: 40,
  // },
  //   id: 12,
  //   parentId: 9,
  //   title: 'Jane Smith',
  //   role: 'UX Designer',
  //   start: new Date(year, month, 20),
  //   end: new Date(year, month, 25),
  //   progress: 0,
  // },
];
export const dependencies = [
  {
    id: 1,
    predecessorId: 2,
    successorId: 3,
    type: 0,
  },
  {
    id: 2,
    predecessorId: 3,
    successorId: 4,
    type: 0,
  },
  {
    id: 3,
    predecessorId: 4,
    successorId: 5,
    type: 0,
  },
  {
    id: 4,
    predecessorId: 5,
    successorId: 6,
    type: 0,
  },
  {
    id: 5,
    predecessorId: 6,
    successorId: 7,
    type: 0,
  },
  {
    id: 6,
    predecessorId: 7,
    successorId: 8,
    type: 0,
  },
  {
    id: 7,
    predecessorId: 8,
    successorId: 9,
    type: 0,
  },
];
export const resources = [
  {
    id: 1,
    text: 'John Heart',
    color: '#e72276',
    textVal: '5'
  },
  {
    id: 2,
    text: 'Paul Peyton',
    color: '#4361ee',
    textVal: '5'
  },
  {
    id: 3,
    text: 'Robert Reagan',
    color: '#e72276',
    textVal: '5'
  },
  {
    id: 4,
    text: 'Greta Sims',
    color: '#4361ee',
    textVal: '5'
  },
  {
    id: 5,
    text: 'Brett Wade',
    color: '#e72276',
    textVal: '5'
  },
  {
    id: 6,
    text: 'Sandra Johnson',
    color: '#4361ee',
    textVal: '5'
  },
  {
    id: 7,
    text: 'Kevin Carter',
    color: '#e72276',
    textVal: '5'
  },
  {
    id: 8,
    text: 'Cynthia Stanwick',
    color: '#4361ee',
    textVal: '5'
  },
  {
    id: 9,
    text: 'Olivia Samuelson',
    color: '#e72276',
    textVal: '5'
  },
];
export const resourceAssignments = [
  {
    id: 0,
    taskId: 1,
    resourceId: 1,
  },
  {
    id: 1,
    taskId: 2,
    resourceId: 2,
  },
  {
    id: 2,
    taskId: 3,
    resourceId: 3,
  },
  {
    id: 3,
    taskId: 4,
    resourceId: 4,
  },
  {
    id: 4,
    taskId: 5,
    resourceId: 5,
  },
  {
    id: 5,
    taskId: 6,
    resourceId: 6,
  },
  {
    id: 6,
    taskId: 7,
    resourceId: 7,
  },
  {
    id: 7,
    taskId: 8,
    resourceId: 8,
  },
  // {
  //   id: 8,
  //   taskId: 9,
  //   resourceId: 9,
  // },
];
