import MyHobby from "./pages/MyHobby";
import Autumn from "./pages/Autumn";
import Spring from "./pages/Spring";
import Summer from "./pages/Summer";
import Winter from "./pages/Winter";
import { Routes, Route } from "react-router-dom";


const App = () => {
    return (
        <>
            <div>
                <MyHobby/>
                <Routes>
                    <Route path="/" element={<MyHobby/>}/>
                    <Route path="/autumn" element={<Autumn/>}/>
                    <Route path="/spring" element={<Spring/>}/>
                    <Route path="/summer" element={<Summer/>}/>
                    <Route path="/winter" element={<Winter/>}/>
                </Routes>
            </div>
        </>
    )
};


export default App;