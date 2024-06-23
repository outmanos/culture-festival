'use client'

import React, { useState, useEffect } from 'react';
import Venue from '@/models/Venue';
import VenueList from '@/components/Venue/VenueList';
import VenueForm from '@/components/Venue/VenueForm';
import { fetchVenues, addVenue, editVenue, deleteVenue } from '@/services/VenueService';

const VenuesPage: React.FC = () => {
  const [venues, setVenues] = useState<Venue[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const venuesData = await fetchVenues();
      setVenues(venuesData);
    } catch (error) {
      console.error('Error fetching venues:', error);
    }
  };

  const handleAddVenue = async (venue: Venue) => {
    try {
      const addedVenue = await addVenue(venue);
      setVenues([...venues, addedVenue]);
    } catch (error) {
      console.error('Error adding venue:', error);
    }
  };

  const handleEditVenue = async (id: number, updatedVenue: Venue) => {
    try {
      const editedVenue = await editVenue(id, updatedVenue);
      const updatedVenues = venues.map((v) => (v.id === editedVenue.id ? editedVenue : v));
      setVenues(updatedVenues);
    } catch (error) {
      console.error('Error editing venue:', error);
    }
  };

  const handleDeleteVenue = async (id: number) => {
    try {
      await deleteVenue(id);
      const updatedVenues = venues.filter((v) => v.id !== id);
      setVenues(updatedVenues);
    } catch (error) {
      console.error('Error deleting venue:', error);
    }
  };

  return (
    <div>
      <h1>Venues Page</h1>
      <VenueForm onAddVenue={handleAddVenue} />
      <VenueList venues={venues} onEditVenue={handleEditVenue} onDeleteVenue={handleDeleteVenue} />
    </div>
  );
};

export default VenuesPage;
