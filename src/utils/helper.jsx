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
    case "Low":
      return <img src={lowPriority} alt="a" />;
    case "Medium":
      return <img src={mediumPriority} alt="alt" />
    case "High":
      return <img src={highPriority} alt="a" />;
    case "Urgent":
      return <img src={highPriority} alt="a" />;
    default:
      return <img src="add.svg" alt="a" />;
  }
};

export const getStatusIcon = (priority) => {
  switch (priority) {
    case "Backlog":
      return <img src={backlog} alt="a" />;
    case "Todo":
      return <img src={todo} alt="a" />;
    case "In progress":
      return <img src={inProgress} alt="a" />;
    case "Done":
      return <img src={done} alt="a" />;
    case "Canceled":
      return <img src={cancelled} alt="a" />;
    default:
      return <img src={done} alt="a" />;
  }
};
