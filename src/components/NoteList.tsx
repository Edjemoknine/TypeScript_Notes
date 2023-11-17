import { Note } from "../models";
import NoteCard from "./NoteCard";

type Props = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};
const NoteList = ({ notes, setNotes }: Props) => {
  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  return (
    <div>
      <h2 className="mt-3">Notes</h2>
      <div>
        {notes.map((note) => (
          <NoteCard deleteNote={deleteNote} note={note} key={note.id} />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
