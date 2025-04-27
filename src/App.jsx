import { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import ModalDialog from "./components/ModalDialog";
import Sidebar from "./components/Sidebar";
import NoteList from "./components/NoteList";
import NotesContextProvider from "./store/NotesContextProvider";
import addIcon from "./assets/add-icon.svg";
import AddNoteModal from "./components/AddNoteModal";

function App() {
  const modalRef = useRef();

  function handleAddNoteButton() {
    modalRef.current.open();
  }

  return (
    <NotesContextProvider>
      <Header />
      <Sidebar />
      <NoteList />

      <ModalDialog ref={modalRef}>
        <AddNoteModal modalRef={modalRef} />
      </ModalDialog>

      <button
        onClick={handleAddNoteButton}
        className="fixed z-20 right-4 bottom-8 bg-cyan-600 block p-4 rounded-full"
      >
        <img className="w-6 " src={addIcon} alt="" />
      </button>
    </NotesContextProvider>
  );
}

export default App;
