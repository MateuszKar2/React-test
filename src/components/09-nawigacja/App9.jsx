import { About } from "./About";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { ProductDetails } from "./ProductDetails";
import { Products } from "./Products";
import { Mission } from "./Mission";
import { Team } from "./Team";
import { Reviews } from "./Reviews";
import { Routes, Route, Link } from "react-router-dom";


export const App9 = () => {
    return(
        <div>
            <header>
                <h2>My shop</h2>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/products">Products</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                    <Route path="mission" element={<Mission />} />
                    <Route path="team" element={<Team />} />
                    <Route path="reviews" element={<Reviews />} />
                </Route>
                <Route path="/products" element={<Products />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/products/details" element={<ProductDetails />} />
            </Routes>
        </div>
    )
}