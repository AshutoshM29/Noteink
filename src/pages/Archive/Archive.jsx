import React, { useEffect } from 'react';
import { NotesMenuBar, SearchBar, SideBar, NavBar } from "../../components/index";
import { useLabel, useServices, useAppTheme, useAuth, useSearch } from "../../context/index";
import "../../pages/pages.css";

const Archive = () => {
const { state, getArchivedNotes } = useServices();
const { displayLabel } = useLabel();
const { theme } = useAppTheme();
const { search } = useSearch();
const { isAuthorized } = useAuth();

useEffect(() => {
theme === "light"
? (document.body.style.backgroundColor = "")
: (document.body.style.backgroundColor = "var(--gray-dark)");
}, [theme]);

useEffect(() => {
if (isAuthorized) {
getArchivedNotes();
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
  <h4 className="section-header">ARCHIVED</h4>
  <div className="container-main">
  {state.archives.map((item) => {
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
      <div className="notes-body" dangerouslySetInnerHTML={{ __html: item.body }}></div>
      <div className="container-label">
        {displayLabel.map((label) => {
        return (
        <p className="labels-custom">
          {label}
        </p>
        );
        })}
      </div>
      <div className="notes-menu">
        <div className="date-n-time">
          {`${new Date(item.createdTime).toLocaleString()}`}
        </div>
        <NotesMenuBar notes={item} menutype={false} location={"archive"} />
      </div>
    </div>
    );
    })}
  </div>
</div>
);
};

export { Archive };