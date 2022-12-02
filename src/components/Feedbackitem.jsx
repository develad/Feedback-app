import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";

function Feedbackitem({ item }) {
  const {
    deleteFeedback: handleDelete,
    editFeedback,
    feedbackEdit,
  } = useContext(FeedbackContext);

  const checkEdit = () => {
    return feedbackEdit.edit === true && feedbackEdit.item.id === item.id;
  };
  return (
    <Card reverse={checkEdit()}>
      <div className={`num-display ${checkEdit() ? "edit-item-num" : ""}`}>
        {item.rating}
      </div>
      <button
        className="close"
        onClick={() => handleDelete(item.id)}
      >
        <FaTimes color={checkEdit() ? "white" : "purple"} />
      </button>

      <button
        className="edit"
        onClick={() => editFeedback(item)}
      >
        <FaEdit color={checkEdit() ? "white" : "purple"} />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default Feedbackitem;
