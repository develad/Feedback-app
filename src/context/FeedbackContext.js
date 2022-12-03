import { createContext, useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";

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
    const res = await fetch("/feedback?_sort=id&_order=desc");
    const data = await res.json();

    setFeedback(data);
    setIsLoading(false);
  };
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Add Feedback
  const addFeedback = async (newFeedback) => {
    //Removing uuid because json-server is generating automatically an id

    // newFeedback.id = uuidv4();

    // creating new id field in newFeedback. same as: { id: uuidv4(), ...newFeedback }
    // console.log(newFeedback);

    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    setFeedback([data, ...feedback]);
    // console.log(feedback);
  };

  // Delete Feedback
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`/feedback/${id}`, {
        method: "DELETE",
      });
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

  const updateFeedback = async (id, updItem) => {
    // console.log(id, updItem);

    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
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
