import { v4 as uuidv4 } from "uuid";

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
