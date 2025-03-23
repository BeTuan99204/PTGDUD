import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./Provider/CartContext";
import BookDetail from "./Pages/BookDetails";
import Cart from "./Pages/Cart";
function App() {
  return (
    <div>
      <CartProvider>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book/:id" element={<BookDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
