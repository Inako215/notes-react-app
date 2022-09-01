import { MdDeleteForever } from "react-icons/md";

const Note = () => {
  return (
    <div className="note">
      <span>Hello! This is my first note!</span>
      <div className="note-footer">
        <small>08/31/2022</small>
        <MdDeleteForever className="delte-icon" size="1.3em" />
      </div>
    </div>
  );
};

export default Note;
