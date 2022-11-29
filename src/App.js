import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Routes, Route } from "react-router-dom";
import About from "./pages/About";

import Header from "./components/Header";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { feedbackData } from "./data/feedbackData";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    // creating new id field in newFeedback. same as: { id: uuidv4(), ...newFeedback }
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackProvider>
      <>
        <Header
        // bgColor="lime"
        // textColor="white"
        />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats />
                  <FeedbackList handleDelete={deleteFeedback} />
                </>
              }
            />
            <Route
              path="/about"
              element={<About />}
            />
          </Routes>
          <AboutIconLink />
        </div>
      </>
    </FeedbackProvider>
  );
}

export default App;
