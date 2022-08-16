import { useEffect } from "react";
import { NavBar, Editor, NotesMenuBar, SearchBar, SideBar, FilterModal } from "../../components/index";
import { useServices, useFilter, useAppTheme, useSearch, useAuth } from "../../context/index";
import "./Home.css";

const Home = () => {
const { state, setShowEditorModal, showEditorModal, getNewNotes } =
useServices();
const { showFilterModal, setShowFilterModal, filterState, showFilterData } =
useFilter();
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
getNewNotes();
}
}, []);

return (
<div className="notes-align">
  <NavBar />
  <FilterModal showFilterModal={showFilterModal} onClosingFilterModal={()=> setShowFilterModal(false)}
    />
    <Editor showEditorModal={showEditorModal} onClosingEditorModal={()=> setShowEditorModal(false)}
      />
      <div className="sidebar-align">
        <SideBar />
      </div>

      <div className="hero-img">
        <SearchBar />
      </div>
      <h4 className="section-header">HOME</h4>

      <div className="container-main">
        {showFilterData
        ? filterState.filteredData &&
        filterState.filteredData
        ?.filter((item) => {
        if (search === "") {
        return item;
        } else if (
        item.title.toLowerCase().includes(search.toLowerCase())
        ) {
        return item;
        }
        })
        .map((item) => {
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
          <div class="container-label">
            {item.tags.map((label) => {
            return (
            <p className="custom-label">
              {label}
            </p>
            );
            })}
          </div>
          <div className="notes-menu">
            <div className="date-n-time">
              {`${new Date(item.createdTime).toLocaleString()}`}
            </div>
            <div className="priority-tab">{item.priority}</div>
            <NotesMenuBar notes={item} menutype={false} />
          </div>
        </div>
        );
        })
        : state.notes &&
        state.notes
        .filter((item) => {
        if (search === "") {
        return item;
        } else if (
        item.title.toLowerCase().includes(search.toLowerCase())
        ) {
        return item;
        }
        })
        .map((item) => {
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
          <div class="container-label">
            {item.tags.map((label) => {
            return (
            <p className="custom-label">
              {label}
            </p>
            );
            })}
          </div>
          <div className="notes-menu">
            <div className="date-n-time">
              {`${new Date(item.createdTime).toLocaleString()}`}
            </div>
            <div className="priority-tab">{item.priority}</div>
            <NotesMenuBar notes={item} menutype={false} />
          </div>
        </div>
        );
        })}
      </div>
</div>
);
};

export { Home };