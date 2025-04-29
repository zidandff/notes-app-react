import { useRef, useState } from "react";
import NoteModal from "./NoteModal";
import ModalDialog from "./ModalDialog";

import editIcon from "../assets/edit-icon.svg";
import archiveIcon from "../assets/archived-icon.svg";
import trashIcon from "../assets/trash-icon.svg";

export default function NoteItem({ id, title, body }) {
  const [isEdit, setIsEdit] = useState(false);
  const modal = useRef();

  function handleOpenModal() {
    modal.current.open();
  }

  function handleEditNote() {
    modal.current.open();
    setIsEdit(true);
  }

  function handleCloseModal() {
    console.log("halooo");
    setIsEdit(false);
  }

  return (
    <>
      <ModalDialog ref={modal} onClose={handleCloseModal}>
        <NoteModal
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          modalRef={modal}
          id={id}
          title={title}
          body={body}
        />
      </ModalDialog>

      <div
        onClick={handleOpenModal}
        id={id}
        className="bg-gray-200 px-4 py-6 rounded-md h-full flex flex-col justify-between"
      >
        <div>
          <h2 className="text-lg font-medium">{title}</h2>
          <p className="whitespace-pre-wrap line-clamp-4">{body}</p>
        </div>

        <div className="flex justify-end gap-2">
          <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
            <img className="w-5" src={trashIcon} alt="" />
          </button>
          <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
            <img className="w-5" src={archiveIcon} alt="" />
          </button>
          <button
            onClick={handleEditNote}
            className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
          >
            <img className="w-5" src={editIcon} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
