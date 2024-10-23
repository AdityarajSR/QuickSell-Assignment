// import { BiRadioCircle } from "react-icons/bi";
// import { LuMoreHorizontal } from "react-icons/lu";
// import { TbProgress } from "react-icons/tb";
// import { IoCheckmarkDoneCircle } from "react-icons/io5";
// import { AiFillCloseCircle, AiFillWarning } from "react-icons/ai";
// import { BiSignal2, BiSignal3, BiSignal4 } from "react-icons/bi";
import highPriority from './Img - High Priority.svg';
import lowPriority from './Img - Low Priority.svg';
import mediumPriority from './Img - Medium Priority.svg';
import noPriority from './No-priority.svg';
import urgentPriority from './SVG - Urgent Priority colour.svg';
import backlog from './Backlog.svg'
import todo from './To-do.svg'
import inProgress from './in-progress.svg'
import cancelled from './Cancelled.svg'
import done from './Done.svg'

export const getPriorityIcon = (priority) => {
  switch (priority) {
    case "No priority":
      return <img src={noPriority} alt="a" />;
    // return <LuMoreHorizontal color="#797d84" size={14} />;
    case "Low":
      return <img src={lowPriority} alt="a" />;
    // return <BiSignal2 color='#6b6f76' size={14} />;
    case "Medium":
      return <img src={mediumPriority} alt="alt" />
    // return <BiSignal3 color='#6b6f76' size={14} />;
    case "High":
      return <img src={highPriority} alt="a" />;
    // return <BiSignal4 color='#6b6f76' size={14} />;
    case "Urgent":
      return <img src={highPriority} alt="a" />;
    // return <AiFillWarning color='#fc7840' size={14} />;
    default:
      return <img src="add.svg" alt="a" />;
    // return <AiFillWarning color='#fc7840' size={14} />;
  }
};

export const getStatusIcon = (priority) => {
  switch (priority) {
    case "Backlog":
      return <img src={backlog} alt="a" />;
    // return <BiRadioCircle color='#e2e2e2' size={24} />;
    case "Todo":
      // return <BiRadioCircle color='#e2e2e2' size={24} />;
      return <img src={todo} alt="a" />;
    case "In progress":
      // return <TbProgress color='#f1ca4b' size={16} />;
      return <img src={inProgress} alt="a" />;
    case "Done":
      return <img src={done} alt="a" />;
    // return <IoCheckmarkDoneCircle color='#5e6ad2' size={16} />;
    case "Canceled":
      return <img src={cancelled} alt="a" />;
    // return <AiFillCloseCircle color='#94a2b3' size={16} />;
    default:
      return <img src={done} alt="a" />;
    // return <AiFillCloseCircle color='#94a2b3' size={16} />;
  }
};
