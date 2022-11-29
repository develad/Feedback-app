// import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import PropTypes from "prop-types";

import Card from "./shared/Card";

function Feedbackitem({ item, handleDelete }) {
  //   const [rating, setRating] = useState(7);
  //   const [text, setText] = useState("This is an example of a feedback item");
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button
        className="close"
        onClick={() => handleDelete(item.id)}
      >
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

Feedbackitem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Feedbackitem;
