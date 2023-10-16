import React from 'react';
import { useLocation } from 'react-router-dom';

function VolunteerDisplay() {
  const { state } = useLocation();
  const selectedFood = state && state.selectedFood;

  return (
    <div>
      <h2>Volunteer Display Page</h2>
      {selectedFood ? (
        <>
          <h2>{selectedFood.foodTitle}</h2>
          <p>{selectedFood.foodDescription}</p>
          <p>{selectedFood.foodExpiry}</p>
          <p>{selectedFood.foodLocation}</p>
          <p>{selectedFood.foodPickDate}</p>
        </>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}

export default VolunteerDisplay;
