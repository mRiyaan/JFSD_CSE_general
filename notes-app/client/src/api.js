import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5001/api/notes',
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('AXIOS ERROR:', error);  // Log full error
    return Promise.reject(error);
  }
);

export const fetchNotes = () => API.get('/');
export const createNote = (newNote) => API.post('/', newNote);
export const updateNote = (id, updatedNote) => API.put(`/${id}`, updatedNote);
export const deleteNote = (id) => API.delete(`/${id}`);
