import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>page</h1>
      <Link to="/page1/detailA">detailA</Link>
      <Link to="/page1/detailB">detailB</Link>
    </div>
  );
};
