import React from 'react';
import UrgentIcon from '@icons/SVG - Urgent Priority colour.svg'
import HighIcon from '@icons/Img - High Priority.svg'
import MediumIcon from '@icons/Img - Medium Priority.svg'
import LowIcon from '@icons/Img - Low Priority.svg'
import NoPriorityIcon from '@icons/No-priority.svg'

export default function KanbanCard({ ticket, user }) {

  const getInitials = (name) => {
    const nameParts = name.split(" ");
    const firstInitial = nameParts[0]?.[0] || '';
    const lastInitial = nameParts.length > 1 ? nameParts[nameParts.length - 1][0] : '';
    return firstInitial + lastInitial;
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4: return <img src={UrgentIcon} alt="Urgent"/>;
      case 3: return <img src={HighIcon} alt="High"/>;
      case 2: return <img src={MediumIcon} alt="Medium"/>;
      case 1: return <img src={LowIcon} alt="Low"/>;
      case 0: return <img src={NoPriorityIcon} alt="No Priority"/>;
      default: return null;
    }
  };

  return (
    <div className="kanban-card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {user && (
          <div className="user-avatar">
            {user.avatar ? (
              <img src={user.avatar} alt={user.name} />
            ) : (
              <div className="initials">
                {getInitials(user.name)}
              </div>
            )}
            <span className={`status-indicator ${user.available ? 'available' : 'unavailable'}`}></span>
          </div>
        )}
      </div>
      <h3 className="ticket-title">{ticket.title}</h3>
      <div className="card-footer">
        <span className="priority-icon">{getPriorityIcon(ticket.priority)}</span>
        <span className="feature-request">
          Feature Request
        </span>
      </div>
    </div>
  );
}