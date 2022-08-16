import { useState } from "react";
import { useServices, useTheme, useLabel, usePriority } from "../../context/index";
import { ColorPalette, LabelModal } from "../index";
import "../NotesMenuBar/NotesMenuBar.css";

const NotesMenuBar = ({ notes, menutype, location }) => {
  const [show, setShow] = useState(false);
  const [showLabelModal, setShowLabelModal] = useState(false);
  const { setBackgroundColor } = useTheme();
  const { setDisplayLabel } = useLabel();
  const { setPriority } = usePriority();

  const {
    postNewNotes,
    note,
    setNote,
    deleteNote,
    updateNote,
    setId,
    addNotesToArchive,
    restoreNoteFromArchive,
    deleteNoteFromArchive,
    addNotesToTrashed,
    deleteNoteFromTrash,
    restoreNoteFromTrash,
    setShowEditorModal,
    setEditMode,
    isInEditMode,
  } = useServices();

  const handleUpdate = (notes) => {
    setEditMode(true);
    setShowEditorModal(true);
    setNote({ title: notes.title, body: notes.body });
    setBackgroundColor(notes.bgColor);
    setDisplayLabel(notes.tags);
    setId(notes._id);
    setPriority(notes.priority);
  };

  return (
    <div className="notes-sub-menu">
      {menutype ? (
        <ul className="notes-list">
          <ColorPalette show={show} onClose={() => setShow(false)} />
          <LabelModal
            showLabelModal={showLabelModal}
            onCloseLabelModal={() => setShowLabelModal(false)}
          />

          {isInEditMode ? (
            <li onClick={() => updateNote(notes)}>
              <span className="material-icons" title="Done">check_circle</span>
            </li>
          ) : (
            <li onClick={() => postNewNotes(note)}>
              <span className="material-icons" title="Done">check_circle</span>
            </li>
          )}
          <li onClick={() => setShow(true)}>
            <span className="material-icons-outlined" title="Colors">palette</span>
          </li>
          <li>
            <span
              className="material-icons-outlined"
              title="Labels"
              onClick={() => setShowLabelModal(true)}
            >
              label
            </span>
          </li>
        </ul>
      ) : location === "archive" ? (
        <ul className="notes-list">
          <li onClick={() => restoreNoteFromArchive(notes._id)}>
            <span className="material-icons" title="Unarchive">unarchive</span>
          </li>
          <li onClick={() => deleteNoteFromArchive(notes._id)}>
            <span className="material-icons" title="Permanently Delete">delete</span>
          </li>
        </ul>
      ) : location === "trash" ? (
        <ul className="notes-list">
          <li onClick={() => restoreNoteFromTrash(notes._id)}>
            <span className="material-icons" title="Restore">restore_from_trash</span>
          </li>
          <li onClick={() => deleteNoteFromTrash(notes._id)}>
            <span className="material-icons" title="Permanently Delete">delete</span>
          </li>
        </ul>
      ) : (
        <ul className="notes-list">
          <li onClick={() => handleUpdate(notes)}>
            <span className="material-icons" title="Edit">edit_note</span>
          </li>
          <li onClick={() => addNotesToArchive(notes._id)}>
            <span className="material-icons" title="Archive">archive</span>
          </li>
          <li onClick={() => addNotesToTrashed(notes._id)}>
            <span className="material-icons" title="Delete">delete</span>
          </li>
          <li onClick={() => deleteNote(notes._id)}>
            <span className="material-icons" title="Permanently Delete">delete_forever</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export { NotesMenuBar };