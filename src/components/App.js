import MyHobby from "./pages/MyHobby";
import Autumn from "./pages/Autumn";
import Spring from "./pages/Spring";
import Summer from "./pages/Summer";
import Winter from "./pages/Winter";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";


const App = () => {
    return (
        <>
            <div>
                
                <Routes>
                    <Route path="/" element={<MyHobby/>} />
                    <Route path="/autumn" element={<Autumn/>} />
                    <Route path="/spring" element={<Spring/>} />
                    <Route path="/summer" element={<Summer/>} />
                    <Route path="/winter" element={<Winter/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </div>
        </>
    )
};


export default App;