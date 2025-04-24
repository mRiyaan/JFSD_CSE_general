import { useState, useEffect } from 'react';

const NoteForm = ({ onSave, currentNote, clearCurrent }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setContent(currentNote.content);
    }
  }, [currentNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, content, _id: currentNote?._id });
    setTitle('');
    setContent('');
    clearCurrent();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-xl shadow">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <div className="flex justify-end gap-2">
        {currentNote && (
          <button onClick={clearCurrent} type="button" className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
        )}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {currentNote ? 'Update' : 'Add'} Note
        </button>
      </div>
    </form>
  );
};

export default NoteForm;