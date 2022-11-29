import { AnimatePresence, motion } from "framer-motion";
import Feedbackitem from "./Feedbackitem";

import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList({ handleDelete }) {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet!</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence initial={false}>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{
              ease: "anticipate",
              duration: 0.4,
              repeatType: "reverse",
              repeat: 2,
            }}
          >
            <Feedbackitem
              key={item.id}
              item={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <Feedbackitem
  //         key={item.id}
  //         item={item}
  //         handleDelete={handleDelete}
  //       />
  //     ))}
  //   </div>
  // );
}

export default FeedbackList;
