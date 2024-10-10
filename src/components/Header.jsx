import React, { useState, useEffect } from 'react';
import DownIcon from '@icons/down.svg';
import SlidersHorizontal from '@icons/Display.svg';

export default function Header({ onDisplayChange, currentGrouping, currentSorting }) {
  const [isOpen, setIsOpen] = useState(false);
  const [grouping, setGrouping] = useState(currentGrouping);
  const [sorting, setSorting] = useState(currentSorting);

  useEffect(() => {
    setGrouping(currentGrouping);
  }, [currentGrouping]);

  useEffect(() => {
    setSorting(currentSorting);
  }, [currentSorting]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onDisplayChange(grouping, sorting);
    setIsOpen(false);
  };

  return (
    <header className="header">
      <button className="display-button" onClick={() => setIsOpen(!isOpen)}>
        <img src={SlidersHorizontal} alt="SlidersHorizontal" />
        Display
        <img src={DownIcon} alt="DownIcon" />
      </button>
      {isOpen && (
        <form className="display-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="grouping">Grouping</label>
            <select
              id="grouping"
              value={grouping}
              onChange={(e) => setGrouping(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div>
            <label htmlFor="sorting">Ordering</label>
            <select
              id="sorting"
              value={sorting}
              onChange={(e) => setSorting(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
          <button type="submit">Apply</button>
        </form>
      )}
    </header>
  );
}
