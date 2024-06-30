import axios from 'axios';
import Venue from '@/models/venue';
import Address from '@/models/address';

const apiUrl = 'http://go-api-will-go-here';

const fetchVenues = async (): Promise<Venue[]> => {
  try {
    const response = await axios.get<Venue[]>(`${apiUrl}/venues`);
    return response.data;
  } catch (error) {
    console.error('Error fetching venues:', error);
    // Fallback to dummy data if API request fails
    return getDummyVenues();
  }
};

const addVenue = async (venue: Venue): Promise<Venue> => {
  try {
    const response = await axios.post<Venue>(`${apiUrl}/venues`, venue);
    return response.data;
  } catch (error) {
    console.error('Error adding venue:', error);
    throw error;
  }
};

const editVenue = async (id: number, updatedVenue: Venue): Promise<Venue> => {
  try {
    const response = await axios.put<Venue>(`${apiUrl}/venues/${id}`, updatedVenue);
    return response.data;
  } catch (error) {
    console.error('Error editing venue:', error);
    throw error;
  }
};

const deleteVenue = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${apiUrl}/venues/${id}`);
  } catch (error) {
    console.error('Error deleting venue:', error);
    throw error;
  }
};

// Dummy data function for fallback
const getDummyVenues = (): Venue[] => {
  return [
    new Venue(1, 'Dummy Venue A', new Address(1, 'Dummy Street A', 'Dummy City A', 'Dummy State A', '12345'), 100),
    new Venue(2, 'Dummy Venue B', new Address(2, 'Dummy Street B', 'Dummy City B', 'Dummy State B', '54321'), 200),
  ];
};

export { fetchVenues, addVenue, editVenue, deleteVenue };
