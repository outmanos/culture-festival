import React from 'react';
import Venue from '@/models/venue';

interface VenueListProps {
  venues: Venue[];
  onEditVenue: (id: number, updatedVenue: Venue) => void;
  onDeleteVenue: (id: number) => void;
}

const VenueList: React.FC<VenueListProps> = ({ venues, onEditVenue, onDeleteVenue }) => {
  return (
    <div>
      <h2>Venue List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Capacity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {venues.map((venue) => (
            <tr key={venue.id}>
              <td>{venue.id}</td>
              <td>{venue.name}</td>
              <td>{`${venue.address.street}, ${venue.address.city}, ${venue.address.state} ${venue.address.zip}`}</td>
              <td>{venue.capacity}</td>
              <td>
                <button onClick={() => onEditVenue(venue.id, venue)}>Edit</button>
                <button onClick={() => onDeleteVenue(venue.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VenueList;
