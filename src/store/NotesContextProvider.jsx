import { useReducer } from "react";
import { NotesContext } from "./NotesContext";
import { v4 as uuidv4 } from "uuid";

// --- ACTIONS REDUCER ---
const ACTIONS = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};

function notesReducer(state, action) {
  switch (action.type) {
    case ACTIONS.CREATE: {
      const newNote = {
        id: uuidv4(),
        ...action.payload,
      };

      return [newNote, ...state];
    }

    case ACTIONS.UPDATE: {
      return state.map((note) =>
        note.id === action.payload.id ? { ...note, ...action.payload } : note
      );
    }

    case ACTIONS.DELETE: {
      return state.filter((note) => note.id !== action.payload.id);
    }
    default:
      return state;
  }
}

export default function NotesContextProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, []);

  function handleCreateNote(noteData) {
    dispatch({
      type: ACTIONS.CREATE,
      payload: noteData,
    });
  }

  function handleDeleteNote(id) {
    dispatch({
      type: ACTIONS.DELETE,
      payload: { id },
    });
  }

  function handleUpdateNote(noteData) {
    dispatch({
      type: ACTIONS.UPDATE,
      payload: noteData,
    });
  }

  const contexValue = {
    notes: notes,
    createNote: handleCreateNote,
    deleteNote: handleDeleteNote,
    updateNote: handleUpdateNote,
  };
  return (
    <NotesContext.Provider value={contexValue}>
      {children}
    </NotesContext.Provider>
  );
}
