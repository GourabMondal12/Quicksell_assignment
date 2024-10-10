import React from 'react';
import KanbanCard from './KanbanCard';
import TodoIcon from '@icons/To-do.svg'
import InProgressIcon from '@icons/in-progress.svg'
import BacklogIcon from '@icons/Backlog.svg'
import CanceledIcon from '@icons/Cancelled.svg'
import DoneIcon from '@icons/Done.svg'


export default function KanbanColumn({ title, tickets, users }) {
  const getStatusIcon = (title) => {
    switch (title) {
      case 'Todo': return <img src={TodoIcon} alt="Todo"/>;
      case 'In progress': return <img src={InProgressIcon} alt="In Progress"/>;
      case 'Done': return <img src={DoneIcon} alt="Done"/>;
      case 'Canceled': return <img src={CanceledIcon} alt="Canceled"/>;
      case 'Backlog': return <img src={BacklogIcon} alt="Backlog"/>;
      default: return null;
    }
  };
  return (
    <div className="kanban-column">
      <h2>{getStatusIcon(title)} {title}</h2>
      {tickets.map(ticket => (
        <KanbanCard key={ticket.id} ticket={ticket} user={users.find(user => user.id === ticket.userId)} />
      ))}
    </div>
  );
}