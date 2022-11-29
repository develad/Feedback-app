import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

// import PropTypes from "prop-types";

function Feedbackitem({ item }) {
  //   const [rating, setRating] = useState(7);
  //   const [text, setText] = useState("This is an example of a feedback item");

  const { handleDelete } = useContext(FeedbackContext);
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

// Feedbackitem.propTypes = {
//   item: PropTypes.object.isRequired,
// };

export default Feedbackitem;
