import React from 'react';
import avatart_img from "../../assets/Img_Avatar_1.png";

function getImagePath(taskId) {
  const imgPath = 'images/employees';
  let img = taskId < 10 ? `0${taskId}` : taskId;
  img = `${imgPath}/${img}.png`;
  //return img;
  return '../../assets/Img_upld1.png';
}
function getTaskColor(taskId) {
  const color = taskId % 6;
  return `custom-task-color-${color}`;
}

export default function TaskTemplate({ taskData, taskSize, taskResources }) {
  return (
    <div
      className={`custom-task text-sm font-medium text-white items-center justify-between pr-4 !flex`}
      style={{ width: `${taskSize?.width}px`, backgroundColor: taskResources[0]?.color }}
    >
      <div className="custom-task-img-wrapper">
        <img
          className="custom-task-img"
          //src={getImagePath(taskData.id)}
          src={avatart_img}
        />
      </div>
      <div className="font-medium">
        {taskResources[0]?.textVal} 5
      </div>
      {/* <div className="custom-task-wrapper">
        <div className="custom-task-title">{taskData.title}</div>
        <div className="custom-task-row">{taskResources[0].text}</div>
      </div> */}
      {/* <div
        className="custom-task-progress"
        style={{ width: `${taskData.progress}%` }}
      ></div> */}
    </div>
  );
}
