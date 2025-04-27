import { useRef } from "react";
import NoteModal from "./NoteModal";
import ModalDialog from "./ModalDialog";

export default function NoteItem({ id, title, body }) {
  const modal = useRef();
  function handleClick() {
    modal.current.open();
  }
  return (
    <>
      <ModalDialog ref={modal}>
        <NoteModal modalRef={modal} id={id} title={title} body={body} />
      </ModalDialog>

      <div
        onClick={handleClick}
        id={id}
        className="bg-gray-200 px-4 py-6 rounded-md h-full"
      >
        <h2>{title}</h2>
        <p className="whitespace-pre-wrap line-clamp-4">{body}</p>
      </div>
    </>
  );
}
