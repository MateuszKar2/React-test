import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { ProductDetails } from "../pages/ProductDetails";
import { Products } from "../pages/Products";
import { Mission } from "./Mission";
import { Team } from "./Team";
import { Reviews } from "./Reviews";
import { Routes, Route} from "react-router-dom";
import { SharedLayout } from "./SharedLayout";


export const App9 = () => {
    return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    );
  };