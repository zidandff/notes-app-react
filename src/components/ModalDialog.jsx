import { useImperativeHandle, useRef } from "react";
import { NotesContext } from "../store/NotesContext";

export default function ModalDialog({ ref, children }) {
  const modal = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },
      close() {
        modal.current.close();
      },
    };
  });

  function handleCloseClickOutside(event) {
    if (event.target === modal.current) {
      modal.current.close();
    }
  }

  return (
    <dialog
      ref={modal}
      className="bg-transparent w-full backdrop:bg-black/40 backdrop:backdrop-blur-sm"
      onClick={handleCloseClickOutside}
    >
      {children}
    </dialog>
  );
}
