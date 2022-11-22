// import { useState } from "react";

import PropTypes from "prop-types";

import Card from "./shared/Card";

function Feedbackitem({ item }) {
  //   const [rating, setRating] = useState(7);
  //   const [text, setText] = useState("This is an example of a feedback item");
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

Feedbackitem.prototype = {
  item: PropTypes.object.isRequired,
};

export default Feedbackitem;
