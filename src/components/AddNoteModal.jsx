import { useContext, useRef } from "react";
import { NotesContext } from "../store/NotesContext";
import closeIcon from "../assets/close-icon.svg";

export default function AddNoteModal({ modalRef }) {
  const { createNote } = useContext(NotesContext);
  const noteTitle = useRef();
  const noteBody = useRef();

  function handleSubmitNote(e) {
    e.preventDefault();
    createNote({
      title: noteTitle.current.value,
      body: noteBody.current.value,
    });

    modalRef.current.close();
    e.target.reset();
  }

  return (
    <div className="modal w-full md:w-[450px] mx-auto bg-gray-100 px-6 py-12 rounded-2xl relative">
      <form className="absolute right-2 top-2" method="dialog">
        <button className="leading=[0] p-2 rounded-full hover:bg-gray-300">
          <img src={closeIcon} alt="" />
        </button>
      </form>
      <form onSubmit={handleSubmitNote}>
        <input
          ref={noteTitle}
          className="w-full focus:outline-none p-4 rounded-md mb-2"
          type="text"
          placeholder="Judul Catatan"
        />
        <textarea
          rows={10}
          ref={noteBody}
          className="w-full  focus:outline-none p-4 rounded-md mb-4"
          placeholder="Isi Catatan"
          id=""
        ></textarea>
        <button className="w-full bg-cyan-600 py-2 text-sm rounded-md text-gray-100">
          Simpan
        </button>
      </form>
    </div>
  );
}
