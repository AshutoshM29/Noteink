import { useEffect } from 'react';
import { NotesMenuBar, SearchBar, SideBar, NavBar } from "../../components";
import { useServices, useLabel, useAppTheme, useAuth } from "../../context";
import "../../pages/pages.css";

const Trash = () => {
const { state, getTrashedNotes } = useServices();
const { displayLabel } = useLabel();
const { theme } = useAppTheme();
const { isAuthorized } = useAuth();

useEffect(() => {
theme === "light"
? (document.body.style.backgroundColor = "")
: (document.body.style.backgroundColor = "var(--gray-dark)");
}, [theme]);

useEffect(() => {
if (isAuthorized) {
getTrashedNotes();
}
}, []);

return (
<div className="notes-align">
  <NavBar />
  <div className="sidebar-align">
    <SideBar />
  </div>
  <div className="hero-img">
    <SearchBar />
  </div>
  <h4 className="section-header">TRASH</h4>
  <div className="container-main">
    {state.trash.map((item) => {
    return (
    <div className="container-note" key={item._id} style={{ ...item, backgroundColor: item.bgColor }}>
      <div className="container-ntitle">
        <h2 className="heading-note">{item.title}</h2>
        <div>
          <i className={ item.pinnedNote ? "material-icons icon-pin" : "material-icons-outlined icon-pin" }>
            push_pin
          </i>
        </div>
      </div>
      <div className="notes-body" dangerouslySetInnerHTML={{ __html: item.body }} />
      <div className="container-label">
        {displayLabel.map((label) => {
        return (
        <div className="labels-custom">
          {label}
        </div>
        );
        })}
      </div>
      <div className="notes-menu">
        <div className="date-n-time">
          {`${new Date(item.createdTime).toLocaleString()}`}
        </div>
        <NotesMenuBar notes={item} menutype={false} location={"trash"} />
      </div>
    </div>
    );
    })}
  </div>
</div>
);
};

export { Trash };