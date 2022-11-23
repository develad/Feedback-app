function FeedbackStats({ feedback }) {
  let avarage =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  avarage = avarage.toFixed(1).replace(/[,.]0$/, "");

  // console.log(avarage);

  // Match the end of the string?

  // $ means "Match the end of the string" (the position after the last character in the string). Both are called anchors and ensure that the entire string is matched instead of just a substring.

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Avarage Rating: {isNaN(avarage) ? "0" : avarage}</h4>
    </div>
  );
}

export default FeedbackStats;
