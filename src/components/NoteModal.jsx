import { useRef, useContext } from "react";
import { NotesContext } from "../store/NotesContext";

import closeIcon from "../assets/close-icon.svg";
import editIcon from "../assets/edit-icon.svg";
import archiveIcon from "../assets/archived-icon.svg";
import trashIcon from "../assets/trash-icon.svg";

export default function NoteModal({ id, title, body, isEdit, setIsEdit }) {
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
    <div className="w-full md:w-[450px] min-h-[50dvh] overflow-auto mx-auto flex flex-col bg-gray-100 px-6 pt-12 pb-6 rounded-2xl relative">
      {!isEdit && (
        <>
          <form className="absolute right-2 top-2" method="dialog">
            <button className="leading=[0] p-2 rounded-full hover:bg-gray-300">
              <img src={closeIcon} alt="" />
            </button>
          </form>

          <div className="flex-grow">
            <h1 className="text-2xl font-medium">{title}</h1>
            <p className="whitespace-pre-wrap">{body}</p>
          </div>

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
            <button
              onClick={() => setIsEdit(true)}
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
            >
              <img className="w-5" src={editIcon} alt="" />
            </button>
          </div>
        </>
      )}

      {isEdit && (
        <>
          <form className="absolute right-2 top-2" method="dialog">
            <button className="leading=[0] p-2 rounded-full hover:bg-gray-300">
              <img src={closeIcon} alt="" />
            </button>
          </form>
          <form onSubmit={handleUpdateNote}>
            <input
              ref={noteTitle}
              className="w-full focus:outline-none p-4 rounded-md mb-2"
              type="text"
              defaultValue={title}
              placeholder="Judul Catatan"
            />
            <textarea
              rows={10}
              ref={noteBody}
              defaultValue={body}
              className="w-full  focus:outline-none p-4 rounded-md mb-4"
              placeholder="Isi Catatan"
              id=""
            ></textarea>
            <button className="w-full bg-cyan-600 py-2 text-sm rounded-md text-gray-100">
              Simpan
            </button>
          </form>
        </>
      )}
    </div>
  );
}
