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

  function handleDeleteNote(id) {
    setNotes((prev) => {
      return prev.filter((note) => note.id !== id);
    });
  }

  function handleUpdateNote(id, title, body) {
    setNotes((prevNotes) => {
      //  === GPT SOLUTION: cleaner & simpler ===
      // performance not really good for big data because even the targeted note has found the iteration will still going until end of element
      return prevNotes.map((note) =>
        note.id == id ? { id, title, body } : note
      );

      // === MY SOLUTION: performance wise, more verbose ===
      // const newNotes = [...prevNotes];
      // const updatedNoteIndex = newNotes.findIndex((note) => note.id == id);
      // const updatedNote = {
      //   ...newNotes[updatedNoteIndex],
      //   title: title,
      //   body: body,
      // };
      // newNotes[updatedNoteIndex] = updatedNote;
      // return newNotes;
    });
  }

  const ctxValue = {
    notes: notes,
    createNote: handleCreateNote,
    deleteNote: handleDeleteNote,
    updateNote: handleUpdateNote,
  };
  return (
    <NotesContext.Provider value={ctxValue}>{children}</NotesContext.Provider>
  );
}
