import React from 'react';
import { NavBar, SearchBar, SideBar } from "../../components";
import { useLabel, useServices, useAppTheme } from "../../context";
import "../../pages/pages.css";
import { useEffect } from "react";

const Label = () => {
  const { data } = useLabel();
  const { state } = useServices();
  const { theme } = useAppTheme();

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "")
      : (document.body.style.backgroundColor = "var(--gray-dark)");
  });

  return (
    <div className="notes-align">
      <NavBar />
      <div className="sidebar-align">
        <SideBar />
      </div>

      <div className="hero-img">
          <SearchBar />
      </div>
      <h4 className="section-header">LABEL</h4>
      <div className="container-main">
          {data.map((label) => {
            const labeledData = state.notes.filter((item) => {
              return item.tags.find((element) => element === label.labelName);
            });
            return (
              <>
                <h5 className="section-subheading" key={label.id}>
                  <p>{label.labelName}</p>
               </h5>

                {labeledData.map((item) => {
                  return (
                    <div
                      className="container-note"
                      key={item._id}
                      style={{ ...item, backgroundColor: item.bgColor }}
                    >
                      <div className="container-title">
                        <h2 className="heading-note">{item.title}</h2>
                        <div>
                        <i
                          className={
                            item.pinnedNote
                              ? "material-icons icon-pin-label"
                              : "material-icons-outlined icon-pin-label"
                          }
                        >
                          push_pin
                        </i>
                        </div>
                      </div>
                      <div
                        className="notes-body"
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                      <div class="container-label">
                        {item.tags.map((label) => {
                          return (
                            <div className="custom-label">
                              {label}
                            </div>
                          );
                        })}
                      </div>
                      <div className="notes-menu">
                        <div className="date-n-time">
                          {`${new Date(item.createdTime).toLocaleString()}`}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
  );
};

export { Label };