import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';  // Add this for URL query handling
import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';
import './App.css';

export default function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  // Using search params to read from URL
  const [searchParams, setSearchParams] = useSearchParams();

  const [grouping, setGrouping] = useState(() => {
    return searchParams.get('grouping') || 'status';
  });

  const [sorting, setSorting] = useState(() => {
    return searchParams.get('sorting') || 'priority';
  });

  useEffect(() => {
    fetchData();
  }, []);

  // Update URL params when grouping or sorting changes
  useEffect(() => {
    searchParams.set('grouping', grouping);
    searchParams.set('sorting', sorting);
    setSearchParams(searchParams);  // This updates the URL
  }, [grouping, sorting, searchParams, setSearchParams]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDisplayChange = (newGrouping, newSorting) => {
    setGrouping(newGrouping);
    setSorting(newSorting);
  };

  return (
    <div className="app">
      <Header
        onDisplayChange={handleDisplayChange}
        currentGrouping={grouping}
        currentSorting={sorting}
      />
      <KanbanBoard
        tickets={tickets}
        users={users}
        grouping={grouping}
        sorting={sorting}
      />
    </div>
  );
}
