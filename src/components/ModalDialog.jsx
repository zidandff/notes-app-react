import { useRef, useContext, useImperativeHandle } from "react";
import { NotesContext } from "../store/NotesContext";

export default function ModalDialog({ ref }) {
  const modal = useRef();
  const noteTitle = useRef();
  const noteBody = useRef();
  const { createNote } = useContext(NotesContext);

  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },
    };
  });

  function handleSubmitNote(e) {
    e.preventDefault();
    createNote({
      title: noteTitle.current.value,
      body: noteBody.current.value,
    });

    e.target.reset();
  }

  function handleCloseClickOutside(event) {
    if (event.target === modal.current) {
      modal.current.close();
    }
  }

  return (
    <dialog
      ref={modal}
      className="bg-transparent backdrop:bg-black/40 backdrop:backdrop-blur-sm"
      onClick={handleCloseClickOutside}
    >
      <div className="modal bg-gray-100 px-6 py-12 rounded-2xl relative">
        <form className="absolute right-2 top-2" method="dialog">
          <button className="leading=[0] p-2 rounded-full hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-0.5 -0.5 16 16"
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
              id="X--Streamline-Feather"
              height={16}
              width={16}
            >
              <desc>{"X Streamline Icon: https://streamlinehq.com"}</desc>
              <path d="M11.25 3.75 3.75 11.25" strokeWidth={1} />
              <path d="m3.75 3.75 7.5 7.5" strokeWidth={1} />
            </svg>
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
    </dialog>
  );
}
