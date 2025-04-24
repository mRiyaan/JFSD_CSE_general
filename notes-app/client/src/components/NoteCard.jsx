const NoteCard = ({ note, onEdit, onDelete }) => {
    return (
      <div className="bg-white shadow rounded-xl p-4 space-y-2">
        <h3 className="text-lg font-bold">{note.title}</h3>
        <p className="text-sm text-gray-700">{note.content}</p>
        <div className="flex justify-end gap-2">
          <button onClick={() => onEdit(note)} className="text-blue-500">Edit</button>
          <button onClick={() => onDelete(note._id)} className="text-red-500">Delete</button>
        </div>
      </div>
    );
  };
  
  export default NoteCard;