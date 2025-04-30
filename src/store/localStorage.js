export const NOTES_STORAGE = "NOTES";

export function loadNotesFromStorage() {
  return JSON.parse(localStorage.getItem(NOTES_STORAGE)) || [];
}

export function saveNotesToStorage(notes) {
  localStorage.setItem(NOTES_STORAGE, JSON.stringify(notes));
}
