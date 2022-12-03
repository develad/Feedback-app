import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext({
  feedback: [],
  addFeedback: null,
  deleteFeedback: null,
  editFeedback: null,
  feedbackEdit: {},
  updateFeedback: {},
  isLoading: null,
});

const FeedbackProvider = ({ children }) => {
  const [selected, setSelected] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const res = await fetch(
      "http://localhost:5000/feedback?_sort=id&_order=desc"
    );
    const data = await res.json();

    setFeedback(data);
    setIsLoading(false);
  };
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Add Feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    // creating new id field in newFeedback. same as: { id: uuidv4(), ...newFeedback }
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
    console.log(feedback);
  };

  // Delete Feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Edit Feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Update feedback

  const updateFeedback = (id, updItem) => {
    // console.log(id, updItem);
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        selected,
        isLoading,
        addFeedback,
        deleteFeedback,
        editFeedback,
        setSelected,
        updateFeedback,
        setFeedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
export { FeedbackProvider };
