import NotesList from "./components/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "08/10/2022",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "08/14/2022",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "08/30/2022",
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "08/31/2022",
    },
  ]);

  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
