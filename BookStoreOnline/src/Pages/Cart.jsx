import { Row, Col, Image, Button } from "react-bootstrap";
import { useCart } from "../Provider/CartContext";
const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  return (
    <div className="" style={{ width: "100%" }}>
      <div className="mx-auto mt-3" style={{ width: "70%", height: "100vh" }}>
        {cart.map((book) => (
          <Row className="border rounded p-2">
            <Col>
              <Image src={book.image} width={150} />
            </Col>
            <Col className="d-flex">
              <Button
                onClick={() => updateQuantity(book.id, book.quantity - 1)}
                style={{ height: "30px" }}
              >
                -
              </Button>
              <p>Số lượng: {book.quantity}</p>
              <Button
                onClick={() => updateQuantity(book.id, book.quantity + 1)}
                style={{ height: "30px" }}
              >
                +
              </Button>
            </Col>
            <Col>
              <Col>
                <h2>{book.name}</h2>
              </Col>
              <Col>
                <Button
                  className="bg-danger border-0"
                  onClick={() => removeFromCart(book.id)}
                >
                  Xóa
                </Button>
              </Col>
            </Col>
          </Row>
        ))}
        <div>
            <h3>Tổng tiền: {totalPrice} VND</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
