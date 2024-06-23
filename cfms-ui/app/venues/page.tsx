'use client'

import { title } from "@/components/primitives";
import React, { useState, useEffect } from 'react';
import Venue from '@/models/venue';
import VenueList from '@/components/venue/venue-list';
import VenueForm from '@/components/venue/venue-form';
import { fetchVenues, addVenue, editVenue, deleteVenue } from '@/services/venue-service';

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
      <h1 className={title()}>Venues</h1>
      <VenueForm onAddVenue={handleAddVenue} />
      <VenueList venues={venues} onEditVenue={handleEditVenue} onDeleteVenue={handleDeleteVenue} />
    </div>
  );
};

export default VenuesPage;
