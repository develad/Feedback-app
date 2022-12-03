import spinner from "../../asset/loadingCat.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loading..."
      style={{
        width: "100px",
        margin: "2rem auto",
        display: "block",
        borderRadius: "50%",
      }}
    />
  );
}

export default Spinner;
