import "./ColorPalette.css";
import { useTheme } from "../../../context";

const palleteDatabase = [
  {
    id: 1,
    bgColor: "#e9f5db",
  },
  {
    id: 2,
    bgColor: "#fefae0",
  },
  {
    id: 3,
    bgColor: "#e2eafc",
  },
  {
    id: 4,
    bgColor: "#f7ebfd",
  },
  {
    id: 5,
    bgColor: "#fff0f3",
  },
];

const ColorPalette = ({ show, onClose }) => {
  const { backColor, setBackgroundColor } = useTheme();

  if (!show) {
    return null;
  }

  return (
    <div className="pallete-modal-wrapper">
      <div className="modal-pallete">
          <ul className="list-pallete">
            {palleteDatabase.map((pallete) => {
              return (
                <li className="label-notes" key={pallete.id}>
                  <button
                    className="avatar avatar-xs"
                    style={{
                      backgroundColor: pallete.bgColor,
                    }}
                    onClick={() =>
                      setBackgroundColor(
                        pallete.bgColor === backColor
                          ? "white"
                          : pallete.bgColor
                      )
                    }
                  />
                </li>
              );
            })}

            <li className="label-notes" onClick={onClose}>
              <span className="material-icons">
                close
              </span>
            </li>
          </ul>
      </div>
    </div>
  );
};

export { ColorPalette };