
// =======================Using axios to communicae with backend=============
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';

export const getHospitals = () => axios.get(`${API_URL}hospitals/`);
export const getHealthPrograms = () => axios.get(`${API_URL}healthprograms/`);
export const getDoctorProfiles = () => axios.get(`${API_URL}doctorprofiles/`);
export const getClients = () => axios.get(`${API_URL}clients/`);
export const getBookings = () => axios.get(`${API_URL}bookings/`);
export const getBlogPosts = () => axios.get(`${API_URL}blogposts/`);
export const getIncidences = () => axios.get(`${API_URL}incidences/`);

// Add POST functions to CREATE records
export const createHealthProgram = (data) => axios.post(`${API_URL}healthprograms/`, data);
export const createClient = (data) => axios.post(`${API_URL}clients/`, data);
export const createBooking = (data) => axios.post(`${API_URL}bookings/`, data);
export const createIncidence = (data) => axios.post(`${API_URL}incidences/`, data);
