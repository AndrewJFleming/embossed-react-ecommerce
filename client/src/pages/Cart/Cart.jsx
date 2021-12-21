import { Container } from "react-bootstrap";

const Cart = () => {
  return (
    <Container className="mb-5">
      <div>
        <h2>YOUR BAG</h2>
        <div className="top">
          <button className="topButton">CONTINUE SHOPPING</button>
          <div className="topText">
            <h5>Shopping Bag(2)</h5>
            <h5>Your Wishlist (0)</h5>
          </div>
          <button className="topButton">CHECKOUT NOW</button>
        </div>
        <div className="bottom">
          <div className="info">
            <div className="product">
              <div className="productDetail">
                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <div className="details">
                  <h4>
                    <b>Product:</b> DUMMY PRODUCT SHOES
                  </h4>
                  <p>
                    <b>ID:</b> 93813718293
                  </p>
                  <p>
                    <b>Color:</b> black
                  </p>
                  <p>
                    <b>Size:</b> 37.5
                  </p>
                </div>
              </div>
              <div className="priceDetail">
                <div className="productAmountContainer">
                  <i class="fas fa-plus"></i>
                  <p className="productAmount">2</p>
                  <i class="fas fa-minus"></i>
                </div>
                <p className="productPrice">$ 30</p>
              </div>
            </div>
            <hr />
            <div className="product">
              <div className="productDetail">
                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <div className="details">
                  <h4>
                    <b>Product:</b> DUMMY PRODUCT SHOES
                  </h4>
                  <p>
                    <b>ID:</b> 93813718293
                  </p>
                  <p>
                    <b>Color:</b> black
                  </p>
                  <p>
                    <b>Size:</b> 37.5
                  </p>
                </div>
              </div>
              <div className="priceDetail">
                <div className="productAmountContainer">
                  <i class="fas fa-plus"></i>
                  <p className="productAmount">2</p>
                  <i class="fas fa-minus"></i>
                </div>
                <p className="productPrice">$ 30</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="summary">
            <h2 className="summaryTitle">ORDER SUMMARY</h2>
            <div className="summaryItem">
              <h5>Subtotal</h5>
              <p>$ 80</p>
            </div>
            <div className="summaryItem">
              <h5>Subtotal</h5>
              <p>$ 80</p>
            </div>
            <div className="summaryItem">
              <h5>Subtotal</h5>
              <p>$ 80</p>
            </div>
            <div className="summaryItem">
              <h5>TOTAL</h5>
              <p>$ 240</p>
            </div>
            <button>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
