import { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import ModalDialog from "./components/ModalDialog";
import Sidebar from "./components/Sidebar";
import NotesContextProvider from "./store/NotesContextProvider";

function App() {
  const modalRef = useRef();

  function handleAddNoteButton() {
    modalRef.current.open();
  }

  return (
    <NotesContextProvider>
      <Header />
      <Sidebar />
      <ModalDialog ref={modalRef} />
      <button
        onClick={handleAddNoteButton}
        className="fixed z-20 right-4 bottom-8 bg-cyan-600 block leading-[0] p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          id="Add--Streamline-Sharp-Material"
          height={32}
          width={32}
        >
          <desc>{"Add Streamline Icon: https://streamlinehq.com"}</desc>
          <path
            fill="#ffffff"
            d="M11.25 12.75H5v-1.5h6.25V5h1.5v6.25H19v1.5H12.75V19h-1.5V12.75Z"
            strokeWidth={0.5}
          />
        </svg>
      </button>
    </NotesContextProvider>
  );
}

export default App;
