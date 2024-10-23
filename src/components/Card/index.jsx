import React from 'react';
import './card.css';
import UserIcon from '../UserIcon';
import { getPriorityIcon, getStatusIcon } from '../../utils/helper';
import highPriority from '../../utils/Img - High Priority copy.svg';
import lowPriority from '../../utils/Img - Low Priority.svg';
import mediumPriority from '../../utils/Img - Medium Priority.svg';
import noPriority from '../../utils/No-priority.svg';
import urgentPriority from '../../utils/SVG - Urgent Priority colour.svg';



function Card({ ticket, userData, hideStatusIcon, hideProfileIcon, grouping }) {
  // Get the priority icon
  // const priorityIcon = getPriorityIcon(ticket.priority);
  console.log(ticket.priority)
  // console.log(priorityIcon)
  // console.log(grouping)
  const shouldShowPriorityIcon = grouping !== "priority"; // Show icon if grouping is not based on priority

  return (
    <div className='card'>
      <div className='top-container'>
        <div className='ticket-id'>{ticket.id}</div>
        {hideProfileIcon ? null : <UserIcon name={userData.name} available={userData.available} />}
      </div>
      <div className='middle-container'>
        {hideStatusIcon ? null : getStatusIcon(ticket.status)}
        <div className='title'>{ticket.title}</div>
      </div>
      <div className='bottom-container'>

        {shouldShowPriorityIcon && (
          <div className='more-icon-container'>
            <span className='priority-icon'>
            {/* Conditional rendering of images based on ticket priority number */}
            {ticket.priority === 4 && (
                <img src={urgentPriority} alt="Urgent Priority" />
              )}
              {ticket.priority === 3 && (
                <img src={highPriority} alt="High Priority" />
              )}
              {ticket.priority === 2 && (
                <img src={mediumPriority} alt="Medium Priority" />
              )}
              {ticket.priority === 1 && (
                <img src={lowPriority} alt="Low Priority" />
              )}
              {ticket.priority === 0 && (
                <img src={noPriority} alt="No Priority" />
              )}
            </span>
          </div>
        )}
        {ticket.tag.map((t) => (
          <div key={t} className='tag-container'>
            <div className='tag-icon'></div>
            <div className='tag-text'>{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
