import SpinnerGif from "assets/image/loading.gif";

import "./index.scss";

export default function Spinner() {
  return (
    <figure className="spinner">
      <img src={SpinnerGif} alt="Spinner" className="img-cover" />
    </figure>
  );
}
