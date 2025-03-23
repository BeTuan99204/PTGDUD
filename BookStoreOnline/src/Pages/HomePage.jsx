import { useEffect, useState } from "react";
import data from "../data/data";
import { Row, Card, Button } from "react-bootstrap";
import { useCart } from "../Provider/CartContext";
import { Link } from "react-router-dom";
const HomePage = () => {
  const { addToCart } = useCart();
  const [books, setBook] = useState([]);

  useEffect(() => setBook(data), []);

  return (
    <div className="" style={{ width: "100%" }}>
      <div className="mx-auto mt-3" style={{ width: "70%" }}>
        <Row className="col-12 ">
          {books.map((book) => (
            <Card className="p-2 col-3 text-decoration-none" key={book.id}>
              <Card.Img
                src={book.image}
                style={{ width: "200px" }}
                className="mx-auto"
              ></Card.Img>
              <Card.Title>{book.name}</Card.Title>
              <Card.Text>{book.price} VND</Card.Text>
              <Button
                as={Link}
                to={`/book/${book.id}`}
                onClick={() => addToCart(book)}
              >
                Xem chi tiết
              </Button>
            </Card>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
