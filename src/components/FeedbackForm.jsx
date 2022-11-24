import { useState } from "react";
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMassage] = useState("");

  const handleTextChange = ({ target: { value } }) => {
    console.log(value);
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
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* todo - rating select component */}
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
