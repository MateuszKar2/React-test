import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <>
      <h1>
        Products page
      </h1>
      <nav>
        <Link to="/products/details">Product details</Link>
      </nav>
    </>
  );
};