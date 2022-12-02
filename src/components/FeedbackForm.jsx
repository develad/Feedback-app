import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");
  // const [rating, setSelected] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMassage] = useState("");

  const {
    addFeedback: handleAdd,
    feedbackEdit,
    selected,
    setSelected,
  } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setSelected(feedbackEdit.item.rating);
    }
  }, [feedbackEdit, setSelected]);

  const handleTextChange = ({ target: { value } }) => {
    // console.log(value);
    if (value === "") {
      setBtnDisabled(true);
      setMassage(null);
    } else if (value !== "" && value.trim().length <= 10) {
      setMassage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMassage(null);
      setBtnDisabled(false);
    }
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating: selected,
      };
      handleAdd(newFeedback);
      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button
            type="submit"
            isDisabled={btnDisabled}
          >
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
