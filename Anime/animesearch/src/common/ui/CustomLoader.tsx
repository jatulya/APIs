import { RingLoader } from "react-spinners";

function CustomLoader() {
  return (
    <div className="centered">
      <RingLoader color="black" size={120} />
    </div>
  );
}

export default CustomLoader;
