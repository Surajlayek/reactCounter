import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handelIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handelDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handelPrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };
  const handelAdd = () => {
    dispatch({ type: "ADD", payload: { num: inputElement.current.value } });
    inputElement.current.value = "";
  };
  const handelSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: { num: inputElement.current.value },
    });
    inputElement.current.value = "";
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handelIncrement}
        >
          + 1
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handelDecrement}
        >
          - 1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handelPrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center buttons-row ">
        <input
          type="text"
          className="boxDesign"
          placeholder="Enter Number"
          ref={inputElement}
        />

        <button type="button" className="btn btn-info" onClick={handelAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handelSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};
export default Controls;
