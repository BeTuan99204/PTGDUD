import data from "../data/data";
import { Image, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useCart } from "../Provider/CartContext";
const BookDetail = () => {
  const { id } = useParams();
    const {addToCart} = useCart();
  const book = data.find((b) => b.id === parseInt(id));
  if (!book) {
    return <h2>Not found</h2>;
  }

  return (
    <div className="" style={{ width: "100%" }}>
      <div className="mx-auto mt-3" style={{ width: "70%", height: "100vh" }}>
        <Row>
          <Image src={book.image} style={{width: "300px"}}/>
          <Col>
            <h3>{book.name}</h3>
            <p className="fw-bold">{book.price} VND</p>
            <p className="fw-bold">Author: {book.author}</p>
            <p className="fw-bold">Mô tả:</p>
            <p className="mx-2">{book.description}</p>
            <Button onClick={() => addToCart(book)}>Thêm vào giỏ hàng</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default BookDetail;
