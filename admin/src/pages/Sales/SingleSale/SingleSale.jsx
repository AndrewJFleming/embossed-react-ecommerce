import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Button, Container, Form, Card, ListGroup } from "react-bootstrap";
import { userRequest } from "../../../requestMethods";
import PercentInput from "../../../shared/components/PercentInput/PercentInput";
import ImagePlaceholder from "../../../shared/components/ImagePlaceholder/ImagePlaceholder";

const SingleSale = () => {
  const location = useLocation();
  const saleId = location.pathname.split("/")[2];
  const [sale, setSale] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    percentOff: 0,
    productId: "",
    isActive: false,
    isFeatured: false,
    img: "",
  });
  const [allProducts, setAllProducts] = useState([]);
  const [reminder, setReminder] = useState(false);

  //Get products to populate select dropdown.
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await userRequest.get("products");
        setAllProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  useEffect(() => {
    const getSale = async () => {
      const res = await userRequest.get("/sales/find/" + saleId);
      setSale(res.data);
      setFormData({
        title: res.data.title,
        desc: res.data.desc,
        percentOff: res.data.percentOff,
        productId: res.data.productId,
        isActive: res.data.isActive,
        isFeatured: res.data.isFeatured,
        img: res.data.img,
      });
    };
    getSale();
  }, [saleId]);

  useEffect(() => {
    const foundProduct = allProducts.find((p) => p._id === sale.productId);
    setSale({
      ...sale,
      productTitle: foundProduct?.title,
    });
  }, [formData]);

  const handleUpdate = async () => {
    try {
      await userRequest.put(`/sales/${saleId}`, formData);
      window.location.replace("/sale/" + saleId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mb-5">
      <Container className="mt-3">
        <Link to="/sales">
          <i class="fas fa-arrow-left">
            &nbsp;<span className="back-link-text">BACK</span>
          </i>
        </Link>
        <div className="mt-3 mb-2 d-flex justify-content-between align-items-center">
          <h1>Sale</h1>
          <Link to="/new-sale">
            <Button variant="success">Create New</Button>
          </Link>
        </div>
      </Container>
      <Container className="d-flex mb-3">
        {sale.img ? (
          <img className="cardImg" src={sale.img} alt={`${sale.title}-sale`} />
        ) : (
          <ImagePlaceholder />
        )}

        <Card className="w-100 ml-3">
          <Card.Body>
            <Card.Title>{sale.title}</Card.Title>
            <Card.Text>{sale.desc}</Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <span className="listGroupLabel">Sale ID:&nbsp;</span>
              {saleId}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">Discounted Product:&nbsp;</span>
              <Link to={`/product/${sale.productId}`}>{sale.productTitle}</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">Percent Off:&nbsp;</span>
              {sale.percentOff * 100}%
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">Is Active:&nbsp;</span>
              {sale.isActive ? "Yes" : "No"}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="listGroupLabel">Is Featured:&nbsp;</span>
              {sale.isFeatured ? "Yes" : "No"}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
      <Container>
        <h2>Update Sale</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={formData.title}
              name="title"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={formData.desc}
              name="desc"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Select
              onChange={(e) => {
                setFormData({
                  ...formData,
                  productId: e.target.value,
                });
              }}
            >
              <option>Select Product</option>
              {allProducts?.map((p) => (
                <option value={p._id}>{p.title}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <PercentInput
            formData={formData}
            setFormData={setFormData}
            reminder={reminder}
            setReminder={setReminder}
          />

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Is Active"
              checked={formData.isActive}
              onClick={(e) => {
                setFormData({
                  ...formData,
                  isActive: !formData.isActive,
                });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Is Featured"
              checked={formData.isFeatured}
              onClick={(e) => {
                setFormData({
                  ...formData,
                  isFeatured: !formData.isFeatured,
                });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Sale Banner Image</Form.Label>
            <Form.Control
              type="text"
              placeholder={formData.img}
              value={formData.img}
              name="img"
              onChange={handleChange}
            />
            <Form.Text muted>
              BG Image that will be featured on sale banner.
            </Form.Text>
          </Form.Group>

          <Button onClick={handleUpdate}>Update</Button>
        </Form>
      </Container>
    </div>
  );
};

export default SingleSale;
