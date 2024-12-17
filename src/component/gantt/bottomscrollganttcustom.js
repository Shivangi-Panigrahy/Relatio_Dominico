import React from 'react';
import Gantt, {
  Tasks,
  Dependencies,
  Resources,
  ResourceAssignments,
  Column,
  Editing,
} from 'devextreme-react/gantt';
import {
  tasks, dependencies, resources, resourceAssignments,
} from './data';

function TimelineCalendar() {
  const handleTaskMoving = (e) => {
    const movedTask = e.newValues;
    if (movedTask) {
      const parentId = e.values.parentId || e.values.id;
      const childTasks = tasks.filter(task => task.parentId === parentId);

      childTasks.forEach(child => {
        const offset = movedTask.start - e.values.start; // Calculate the time difference
        console.log('offset: ', offset);
        console.log('offset:>> ', offset / 100);
        child.start = new Date(child.start.getTime() + offset / 100 );
        child.end = new Date(child.end.getTime() + offset / 100);
      });

      // Update the tasks list (in real applications, sync with state or data source)
    }
  };

  return (
    <div id="form-demo">
      <div className="widget-container">
        <Gantt
          taskListWidth={500}
          height={700}
          scaleType="days"
          onTaskMoving={handleTaskMoving} // Attach the event handler
        >
          <Tasks dataSource={tasks} />
          <Dependencies dataSource={dependencies} />
          <Resources dataSource={resources} />
          <ResourceAssignments dataSource={resourceAssignments} />

          <Column
            dataField="title"
            caption="Subject"
            width={300}
          />
          <Column
            dataField="start"
            caption="Start Date"
          />
          <Column
            dataField="end"
            caption="End Date"
          />

          <Editing enabled />
        </Gantt>
      </div>
    </div>
  );
}

export default TimelineCalendar;

// import React from 'react';
// import Gantt, {
//   Tasks,
//   Dependencies,
//   Resources,
//   ResourceAssignments,
//   Column,
//   Editing,
// } from 'devextreme-react/gantt';
// import {
//   tasks, dependencies, resources, resourceAssignments,
// } from './data.js';

// function TimelineCalendar() {
//   return (
//     <div id="form-demo">
//       <div className="widget-container">
//         <Gantt
//           taskListWidth={500}
//           height={700}
//           scaleType="days"
//         >
//           <Tasks dataSource={tasks} />
//           <Dependencies dataSource={dependencies} />
//           <Resources dataSource={resources} />
//           <ResourceAssignments dataSource={resourceAssignments} />

//           <Column
//             dataField="title"
//             caption="Subject"
//             width={300}
//           />
//           <Column
//             dataField="start"
//             caption="Start Date"
//           />
//           <Column
//             dataField="end"
//             caption="End Date"
//           />

//           <Editing enabled />
//         </Gantt>
//       </div>
//     </div>
//   );
// }
// export default TimelineCalendar;
