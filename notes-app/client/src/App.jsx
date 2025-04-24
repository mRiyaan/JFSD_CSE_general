import { useEffect, useState } from 'react';
import { fetchNotes, createNote, updateNote, deleteNote } from './api';
import NoteForm from './components/NoteForm';
import NoteCard from './components/NoteCard';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    fetchNotes().then(res => setNotes(res.data));
  }, []);

  const handleSave = async (note) => {
    if (note._id) {
      const res = await updateNote(note._id, note);
      setNotes(notes.map(n => (n._id === res.data._id ? res.data : n)));
    } else {
      const res = await createNote(note);
      setNotes([res.data, ...notes]);
    }
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    setNotes(notes.filter(n => n._id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">My Notes</h1>
        <NoteForm onSave={handleSave} currentNote={currentNote} clearCurrent={() => setCurrentNote(null)} />
        <div className="space-y-4">
          {notes.map(note => (
            <NoteCard key={note._id} note={note} onEdit={setCurrentNote} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
