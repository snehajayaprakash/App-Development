import React, { useState } from 'react';
import './FilterSortDropdown.css'

function FilterSortDropdown({ filterBy, sortBy }) {
  const [selectedOption, setSelectedOption] = useState('name');

  const handleFilterSelect = (option) => {
    setSelectedOption(option);
    if (option === 'name') {
      filterBy('name');
    } else if (option === 'location') {
      filterBy('location');
    }
  };

  const handleSortSelect = (option) => {
    setSelectedOption(option);
    if (option === 'expiry') {
      sortBy('expiry');
    }
  };

  return (
    <div className="dropdown">
      <button className="dropbtns">Filter & Sort</button>
      <div className="dropdown-content">
        <div onClick={() => handleFilterSelect('name')}>Filter by Name</div>
        <div onClick={() => handleFilterSelect('location')}>Filter by Location</div>
        <div onClick={() => handleSortSelect('expiry')}>Sort by Expiry Date</div>
      </div>
    </div>
  );
}

export default FilterSortDropdown;
