import { Routes, Route } from "react-router-dom";
import About from "./pages/About";

import Header from "./components/Header";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
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
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
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
