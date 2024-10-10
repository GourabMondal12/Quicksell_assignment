import React from 'react';
import KanbanColumn from './KanbanColumn';


export default function KanbanBoard({ tickets, users, grouping, sorting }) {
  const groupTickets = () => {
    const grouped = {};
    
    tickets.forEach(ticket => {
      let key;
      if (grouping === 'status') key = ticket.status;
      else if (grouping === 'user') key = users.find(user => user.id === ticket.userId)?.name || 'Unassigned';
      else if (grouping === 'priority') key = getPriorityLabel(ticket.priority);
      
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(ticket);
    });

    Object.keys(grouped).forEach(key => {
      grouped[key].sort((a, b) => {
        if (sorting === 'priority') return b.priority - a.priority;
        return a.title.localeCompare(b.title);
      });
    });

    return grouped;
  };

  const getPriorityLabel = (priority) => {
    const labels = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
    return labels[priority];
  };

  const groupedTickets = groupTickets();

  return (
    <div className="kanban-board">
      {Object.entries(groupedTickets).map(([key, tickets]) => (
        <KanbanColumn key={key} title={key} tickets={tickets} users={users} />
      ))}
    </div>
  );
}