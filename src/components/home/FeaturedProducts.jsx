import React, { Component, Fragment } from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";

export class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>FEATURED PRODUCT</h2>
          </div>
          <p>Some Of Our Exclusive Collection, Your May Like</p>
          <Row>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://static-01.daraz.com.np/p/bc1fd4987c05a650c2625dae022cb4ba.png"
                  alt=""
                  srcset=""
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    OnePlus Nord 2T 5G | MediaTek Dimensity 1300 | 50MP Camera|
                    6.4
                  </p>
                  <p className="product-price-on-card">Price: 89,000/-</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://static-01.daraz.com.np/p/bc1fd4987c05a650c2625dae022cb4ba.png"
                  alt=""
                  srcset=""
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    OnePlus Nord 2T 5G | MediaTek Dimensity 1300 | 50MP Camera|
                    6.4
                  </p>
                  <p className="product-price-on-card">Price: 89,000/-</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://static-01.daraz.com.np/p/a8b27f56531582d298e9721b8ce479b3.png"
                  alt=""
                  srcset=""
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    OnePlus Nord 2T 5G | MediaTek Dimensity 1300 | 50MP Camera|
                    6.4
                  </p>
                  <p className="product-price-on-card">Price: 89,000/-</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://static-01.daraz.com.np/p/1276e48a3faff6ca4ab86cb025b3485f.png"
                  alt=""
                  srcset=""
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    OnePlus Nord 2T 5G | MediaTek Dimensity 1300 | 50MP Camera|
                    6.4
                  </p>
                  <p className="product-price-on-card">Price: 89,000/-</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://static-01.daraz.com.np/p/bc1fd4987c05a650c2625dae022cb4ba.png"
                  alt=""
                  srcset=""
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    OnePlus Nord 2T 5G | MediaTek Dimensity 1300 | 50MP Camera|
                    6.4
                  </p>
                  <p className="product-price-on-card">Price: 89,000/-</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img
                  className="center"
                  src="https://static-01.daraz.com.np/p/bc1fd4987c05a650c2625dae022cb4ba.png"
                  alt=""
                  srcset=""
                />
                <Card.Body>
                  <p className="product-name-on-card">
                    OnePlus Nord 2T 5G | MediaTek Dimensity 1300 | 50MP Camera|
                    6.4
                  </p>
                  <p className="product-price-on-card">Price: 89,000/-</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default FeaturedProducts;
