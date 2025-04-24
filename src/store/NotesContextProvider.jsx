import { useState } from "react";
import { NotesContext } from "./NotesContext";
import { v4 as uuidv4 } from "uuid";

export default function NotesContextProvider({ children }) {
  const [notes, setNotes] = useState([]);

  function handleCreateNote(noteData) {
    setNotes((prev) => {
      const newNote = {
        id: uuidv4(),
        ...noteData,
      };

      return [newNote, ...prev];
    });
  }

  const ctxValue = {
    notes: notes,
    createNote: handleCreateNote,
  };
  return (
    <NotesContext.Provider value={ctxValue}>{children}</NotesContext.Provider>
  );
}
