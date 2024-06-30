import React, { useState } from 'react';
import Venue from '@/models/venue';
import Address from '@/models/address';

interface VenueFormProps {
  onAddVenue: (venue: Venue) => void;
}

const VenueForm: React.FC<VenueFormProps> = ({ onAddVenue }) => {
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [capacity, setCapacity] = useState<number | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newVenue = new Venue(0, name, new Address(0, street, city, state, zip), Number(capacity));
    onAddVenue(newVenue);
    // Clear form fields after submission
    setName('');
    setStreet('');
    setCity('');
    setState('');
    setZip('');
    setCapacity('');
  };

  return (
    <div>
      <h2>Add Venue</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Street:
          <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} required />
        </label>
        <label>
          City:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
        </label>
        <label>
          State:
          <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
        </label>
        <label>
          Zip:
          <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} required />
        </label>
        <label>
          Capacity:
          <input type="number" value={capacity} onChange={(e) => setCapacity(Number(e.target.value))} required />
        </label>
        <button type="submit">Add Venue</button>
      </form>
    </div>
  );
};

export default VenueForm;
