import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../pages/HeroSection/HeroSection";
import Cart from "../pages/Cart/Cart";
import HeadphonesCatalog from "../pages/ProductsCatalogs/HeadphonesCatalog/HeadphonesCatalog";
import KeyboardsCatalog from "../pages/ProductsCatalogs/KeyboardsCatalog/KeyboardsCatalog";
import MiceCatalog from "../pages/ProductsCatalogs/MiceCatalog/MiceCatalog";
import ProductCard from "../components/ProductCard/ProductCard";

function App() {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios
            .get("../../assets/data.json")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="font-deafult flex flex-col min-h-screen text-white">
            <Navbar />
            <Routes>
                <Route index path="" element={<HeroSection />} />
                <Route path="/headphones" element={<HeadphonesCatalog data={data} />} />
                <Route path="/headphones/:id" element={<ProductCard data={data} categoryName="headphones" setCart={setCart} />} />
                <Route path="/keyboards" element={<KeyboardsCatalog data={data} />} />
                <Route path="/keyboard/:id" element={<ProductCard data={data} categoryName="keyboard" setCart={setCart} />} />
                <Route path="/mice" element={<MiceCatalog data={data} />} />
                <Route path={'/mouse/:id'} element={<ProductCard data={data} categoryName='mouse' setCart={setCart} />} />
                <Route path="/cart" element={<Cart cart={cart} />} />
            </Routes>
        </div>
    );
}

export default App;