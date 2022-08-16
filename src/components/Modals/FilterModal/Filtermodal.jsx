import { useEffect } from "react";
import { useFilter, useLabel, useServices } from "../../../context";
import styles from "./Filtermodal.module.css";

const priorityDB = ["High", "Medium", "Low"];

const FilterModal = ({ showFilterModal, onClosingFilterModal }) => {
  const { filterDispatch } = useFilter();
  const {
    checkedCheckbox,
    setCheckedCheckbox,
    setShowFilterData,
    option,
    setOption,
  } = useFilter();
  const { data } = useLabel();
  const { state } = useServices();

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    checked
      ? setCheckedCheckbox([...checkedCheckbox, value])
      : setCheckedCheckbox(checkedCheckbox.filter((e) => e !== value));
  };

  const clearAllFilters = () => {
    filterDispatch({
      type: "SORT_BY_DATE",
      payload: "oldest-first",
    });
    setCheckedCheckbox("");
    setShowFilterData(false);
  };

  useEffect(() => {
    const dispatchData = () => {
      if (checkedCheckbox !== "" && state.notes) {
        option === "priority"
          ? filterDispatch({
              type: "SORT_BY_PRIORITY",
              payload: checkedCheckbox,
            })
          : filterDispatch({
              type: "SORT_BY_LABELS",
              payload: checkedCheckbox,
            });
      }
    };
    dispatchData();
  }, [checkedCheckbox, filterDispatch, option, state.notes]);

  if (!showFilterModal) {
    return null;
  }

  const handleFilterAndSort = () => {
    setShowFilterData(true);
    onClosingFilterModal();
  };

  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal}>
        <div className={styles.modal_heading}>
          <h3 className="h3">Sort & Filter Notes</h3>
          <div>
            <button
              className={styles.btn_close_modal}
              onClick={onClosingFilterModal}
            >
              <i className="material-icons">close</i>
            </button>
          </div>
        </div>
        <div className={styles.modal_contents}>
          <ul className={styles.modal_content_list}>
            <li className={styles.unordered_list}>
              <label className="text-bold">Sort By</label>
              <select
                name="sort-by"
                className={styles.dropdown}
                onChange={(e) =>
                  filterDispatch({
                    type: "SORT_BY_DATE",
                    payload: e.target.value,
                  })
                }
              >
                <option value="oldest-first">select option</option>
                <option value="newest-first">Newest First</option>
                <option value="oldest-first">Oldest First</option>
              </select>
            </li>
            <li className={styles.unordered_list}>
              <label className="text-bold">Filter By</label>
              <select
                name="filter-by"
                className={styles.dropdown}
                onChange={(e) => setOption(e.target.value)}
              >
                <option value="priority">Priority</option>
                <option value="labels">Labels</option>
              </select>
            </li>
            <li className={styles.unordered_list}>
              <label className="text-bold">Select Labels</label>
            </li>
            {option === "priority" && data !== undefined
              ? priorityDB.map((item) => {
                  return (
                    <li className={styles.notes_label} key={item}>
                      <input
                        type="checkbox"
                        name={item}
                        value={item}
                        onChange={handleCheckboxChange}
                      />
                      <label>{item}</label>
                    </li>
                  );
                })
              : data.map((item) => {
                  return (
                    <li className={styles.notes_label} key={item.id}>
                      <input
                        type="checkbox"
                        name={item.labelName}
                        value={item.labelName}
                        onChange={handleCheckboxChange}
                      />
                      <label>{item.labelName}</label>
                    </li>
                  );
                })}
          </ul>
        </div>
        <div className={styles.cta_filter_modal}>
          <button className="btn btn-secondary-outline" onClick={clearAllFilters}>
            clear
          </button>
          <button className="btn btn-primary-solid" onClick={handleFilterAndSort}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export { FilterModal };