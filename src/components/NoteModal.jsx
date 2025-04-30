import { useRef, useContext } from "react";
import { NotesContext } from "../store/NotesContext";
import Input from "./Input";

import archiveIcon from "../assets/archived-icon.svg";
import trashIcon from "../assets/trash-icon.svg";

export default function NoteModal({ id, title, body }) {
  const noteTitle = useRef();
  const noteBody = useRef();
  const { deleteNote, updateNote } = useContext(NotesContext);

  function handleUpdateNote(e) {
    e.preventDefault();
    updateNote({
      id: id,
      title: noteTitle.current.value,
      body: noteBody.current.value,
    });
    e.target.reset();
  }

  return (
    <div className="w-full md:w-[450px] min-h-[50dvh] overflow-auto mx-auto flex flex-col justify-between bg-gray-100 px-6 py-4 rounded-2xl relative">
      <form onSubmit={handleUpdateNote}>
        <Input ref={noteTitle} value={title} className="text-lg font-medium" />
        <Input textarea ref={noteBody} value={body} rows={10} />
      </form>
      <div className="flex justify-between">
        <div className="flex justify-end gap-2">
          <button
            onClick={() => deleteNote(id)}
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            <img className="w-5" src={trashIcon} alt="" />
          </button>
          <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
            <img className="w-5" src={archiveIcon} alt="" />
          </button>
        </div>

        <form className="" method="dialog">
          <button className="hover:text-gray-500">close</button>
        </form>
      </div>
    </div>
  );
}
