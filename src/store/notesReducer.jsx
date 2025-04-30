import { v4 as uuidv4 } from "uuid";
import { saveNotesToStorage } from "./localStorage";

// --- ACTIONS REDUCER ---
export const ACTIONS = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};

export function notesReducer(state, action) {
  switch (action.type) {
    case ACTIONS.CREATE: {
      const newNote = {
        id: uuidv4(),
        ...action.payload,
      };

      saveNotesToStorage([newNote, ...state]);
      return [newNote, ...state];
    }

    case ACTIONS.UPDATE: {
      const updatedNotes = state.map((note) =>
        note.id === action.payload.id ? { ...note, ...action.payload } : note
      );
      saveNotesToStorage(updatedNotes);
      return updatedNotes;
    }

    case ACTIONS.DELETE: {
      const updatedNotes = state.filter(
        (note) => note.id !== action.payload.id
      );
      saveNotesToStorage(updatedNotes);
      return updatedNotes;
    }
    default:
      return state;
  }
}
