import { useContext } from "react";
import { NotesContext } from "../store/NotesContext";
import NoteItem from "./NoteItem";

export default function NoteList() {
  const { notes } = useContext(NotesContext);
  return (
    <div className="ml-[80px] px-6 py-4 ">
      <ul id="note-list" className="grid grid-cols-4 gap-2">
        {notes.map((note) => (
          <li key={note.id}>
            <NoteItem {...note} />
          </li>
        ))}
      </ul>
    </div>
  );
}
