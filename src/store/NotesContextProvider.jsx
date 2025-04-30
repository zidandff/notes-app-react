import { useReducer } from "react";
import { NotesContext } from "./NotesContext";
import { ACTIONS, notesReducer } from "./notesReducer";
import { loadNotesFromStorage } from "./localStorage";

export default function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, loadNotesFromStorage());

  console.log(notes);

  function createNote(noteData) {
    dispatch({
      type: ACTIONS.CREATE,
      payload: noteData,
    });
  }

  function deleteNote(id) {
    dispatch({
      type: ACTIONS.DELETE,
      payload: { id },
    });
  }

  function updateNote(noteData) {
    dispatch({
      type: ACTIONS.UPDATE,
      payload: noteData,
    });
  }

  const contexValue = {
    notes,
    createNote,
    deleteNote,
    updateNote,
  };
  return (
    <NotesContext.Provider value={contexValue}>
      {children}
    </NotesContext.Provider>
  );
}
