import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useCart } from "../Provider/CartContext";
const Header = () => {
    const {totalItems} = useCart();
  return (
    <div className="bg-dark">
      <div className="mx-auto d-flex justify-content-between py-2" style={{width: "70%"}}>
        <Link className="text-decoration-none text-white text-center fw-bold" style={{fontSize: "25px"}} to="/">Trang chủ</Link>
        <Link to="/cart">
          <Button as={Link} to="/cart">Giỏ hàng ({totalItems})</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
