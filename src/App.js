import { useState } from "react";
import Feedbackitem from "./components/Feedbackitem";
import Header from "./components/Header";
import { feedbackData } from "./data/feedbackData";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  return (
    <>
      <Header
      // bgColor="lime" textColor="white"
      />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
