import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiShoppingBag } from "react-icons/bi";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa6";
import { LuStar } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaEye } from "react-icons/fa";

const Cardproject = () => {
  const design = {
    p_color: {
      color: "#7f7f7f",
    },
    cardHOver: {
      transform: "translate(60px , 50px)",
    },
  };

  return (
    // style-1

    <div className="py">
      <Container>
        <div className="design text-center" style={{ margin: "0 0 30px 0" }}>
          <h1>Style 1</h1>
          <p style={design.p_color}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore lacus vel facilisis.
          </p>
        </div>
        <Row>
          {/* col-1 */}

          <Col xxl="3" xl="3" lg="3" md="6" sm="6" xs="12">
            <Card
              style={{
                padding: "12px",
                height: "100%",
                textAlign: "center",
              }}
            >
              <div className="item">
                <div className="itemHover1">
                  <a
                    href="#"
                    style={{
                      width: "35px",
                      height: "35px",
                      backgroundColor: "white",
                      border: "1px solid #e9e9e9",
                      borderRadius: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <IoMdHeartEmpty style={{ color: "black", zIndex: "1" }} />
                  </a>
                </div>
                <div className="itemHover2">
                  <a
                    href="#"
                    style={{
                      width: "35px",
                      height: "35px",
                      backgroundColor: "white",
                      border: "1px solid #e9e9e9",
                      borderRadius: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <FaEye style={{ color: "black" }} />
                  </a>
                </div>

                <div className="position-relative">
                  <img
                    src="../images/9.jpg"
                    alt="9"
                    style={{
                      width: "100%",
                      border: "1px solid #e9e9e9 ",
                      borderRadius: "5px",
                    }}
                  />
                  <a
                    href="#"
                    className="position-absolute top-100 start-50 translate-middle"
                    style={{
                      width: "35px",
                      height: "35px",
                      backgroundColor: "#f7f7f8",
                      border: "1px solid #e9e9e9",
                      borderRadius: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <BiShoppingBag style={{ color: "#64b496" }} />
                  </a>
                </div>
                <Card.Body style={{ padding: "10px 0px" }}>
                  <Card.Title>
                    <a
                      href="#"
                      style={{
                        fontSize: "13px",
                        color: "#777",
                        margin: "20px 0 0 0",
                      }}
                    >
                      Snacks
                    </a>
                  </Card.Title>
                  <Card.Text>
                    <div>
                      <FaStar style={{ color: "#f5885f", fontSize: "15px" }} />
                      <FaStar style={{ color: "#f5885f", fontSize: "15px" }} />
                      <FaStar style={{ color: "#f5885f", fontSize: "15px" }} />
                      <FaStar style={{ color: "#f5885f", fontSize: "15px" }} />
                      <FaStar style={{ color: "#f5885f", fontSize: "15px" }} />
                      <span
                        style={{
                          fontSize: "13px",
                          margin: "0 5px",
                          color: "#999",
                        }}
                      >
                        (5.0)
                      </span>
                    </div>

                    <a
                      href="#"
                      style={{
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "#2b2b2b",
                        margin: "10px 0",
                      }}
                    >
                      Best snakes with hazel nut pack 200gm
                    </a>
                    <span
                      style={{
                        color: "#64b496",
                        fontWeight: "700",
                        margin: "0 10px",
                      }}
                    >
                      $145
                    </span>
                    <span style={{ fontSize: "13px", color: "#7A7A7A" }}>
                      <del>$150</del>
                    </span>
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>

          {/* col-2 */}

          <Col xxl="3" xl="3" lg="3" md="6" sm="6" xs="12">
            <Card
              style={{ padding: "12px", height: "100%", textAlign: "center" }}
            >
              <div className="item">
                <div className="itemHover1">
                  <a
                    href="#"
                    style={{
                      width: "35px",
                      height: "35px",
                      backgroundColor: "white",
                      border: "1px solid #e9e9e9",
                      borderRadius: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <IoMdHeartEmpty style={{ color: "black", zIndex: "1" }} />
                  </a>
                </div>
                <div className="itemHover2">
                  <a
                    href="#"
                    style={{
                      width: "35px",
                      height: "35px",
                      backgroundColor: "white",
                      border: "1px solid #e9e9e9",
                      borderRadius: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <FaEye style={{ color: "black" }} />
                  </a>
                </div>
                <div className="position-relative">
                  <img
                    src="../images/2.jpg"
                    alt="2"
                    style={{
                      width: "100%",
                      border: "1px solid #e9e9e9 ",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <Card.Body style={{ padding: "10px 0px" }}>
                  <Card.Title>
                    <a
                      href="#"
                      style={{
                        fontSize: "13px",
                        color: "#777",
                        margin: "20px 0 0 0",
                      }}
                    >
                      Fruits
                    </a>
                  </Card.Title>
                  <Card.Text>
                    <div>
                      <FaStar style={{ color: "#f5885f" }} />
                      <FaStar style={{ color: "#f5885f" }} />
                      <FaStar style={{ color: "#f5885f" }} />
                      <FaStar style={{ color: "#f5885f" }} />
                      <LuStar style={{ color: "#f5885f" }} />
                      <span
                        style={{
                          fontSize: "13px",
                          margin: "0 5px",
                          color: "#999",
                        }}
                      >
                        (4.5)
                      </span>
                    </div>

                    <a
                      href="#"
                      style={{
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "#2b2b2b",
                        margin: "10px 0",
                      }}
                    >
                      Fresh organic apple 1kg simla marming
                    </a>
                    <span
                      style={{
                        color: "#64b496",
                        fontWeight: "700",
                        margin: "0 10px",
                      }}
                    >
                      $120.25
                    </span>
                    <span style={{ fontSize: "13px", color: "#7A7A7A" }}>
                      <del>$123.25</del>
                    </span>
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>

          {/* col-3 */}

          <Col xxl="3" xl="3" lg="3" md="6" sm="6" xs="12">
            <Card
              style={{ padding: "12px", height: "100%", textAlign: "center" }}
            >
              <div className="item">
                <div className="itemHover1">
                  <a
                    href="#"
                    style={{
                      width: "35px",
                      height: "35px",
                      backgroundColor: "white",
                      border: "1px solid #e9e9e9",
                      borderRadius: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <IoMdHeartEmpty style={{ color: "black", zIndex: "1" }} />
                  </a>
                </div>
                <div className="itemHover2">
                  <a
                    href="#"
                    style={{
                      width: "35px",
                      height: "35px",
                      backgroundColor: "white",
                      border: "1px solid #e9e9e9",
                      borderRadius: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <FaEye style={{ color: "black" }} />
                  </a>
                </div>
                <div className="position-relative">
                  <img
                    src="../images/3.jpg"
                    alt="9"
                    style={{
                      width: "100%",
                      border: "1px solid #e9e9e9 ",
                      borderRadius: "5px",
                    }}
                  />
                  <a
                    href="#"
                    className="position-absolute top-100 start-50 translate-middle"
                    style={{
                      width: "35px",
                      height: "35px",
                      backgroundColor: "#f7f7f8",
                      border: "1px solid #e9e9e9",
                      borderRadius: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <BiShoppingBag style={{ color: "#64b496" }} />
                  </a>
                </div>
                <Card.Body style={{ padding: "10px 0px" }}>
                  <Card.Title>
                    <a
                      href="#"
                      style={{
                        fontSize: "13px",
                        color: "#777",
                        margin: "20px 0 0 0",
                      }}
                    >
                      Fruits
                    </a>
                  </Card.Title>
                  <Card.Text>
                    <div>
                      <FaStar style={{ color: "#f5885f" }} />
                      <FaStar style={{ color: "#f5885f" }} />
                      <FaStar style={{ color: "#f5885f" }} />
                      <LuStar style={{ color: "#f5885f" }} />
                      <LuStar style={{ color: "#f5885f" }} />
                      <span
                        style={{
                          fontSize: "13px",
                          margin: "0 5px",
                          color: "#999",
                        }}
                      >
                        (3.2)
                      </span>
                    </div>

                    <a
                      href="#"
                      style={{
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "#2b2b2b",
                        margin: "10px 0",
                      }}
                    >
                      Organic fresh venila farm watermelon 5kg
                    </a>
                    <span
                      style={{
                        color: "#64b496",
                        fontWeight: "700",
                        margin: "0 10px",
                      }}
                    >
                      $50.30
                    </span>
                    <span style={{ fontSize: "13px", color: "#7A7A7A" }}>
                      <del>$72.60</del>
                    </span>
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>

          {/* col-4 */}

          <Col xxl="3" xl="3" lg="3" md="6" sm="6" xs="12">
            <Card
              style={{ padding: "12px", height: "100%", textAlign: "center" }}
            >
              <div className="item">
                <div className="itemHover1">
                  <a
                    href="#"
                    style={{
                      width: "35px",
                      height: "35px",
                      backgroundColor: "white",
                      border: "1px solid #e9e9e9",
                      borderRadius: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <IoMdHeartEmpty style={{ color: "black", zIndex: "1" }} />
                  </a>
                </div>
                <div className="itemHover2">
                  <a
                    href="#"
                    style={{
                      width: "35px",
                      height: "35px",
                      backgroundColor: "white",
                      border: "1px solid #e9e9e9",
                      borderRadius: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <FaEye style={{ color: "black" }} />
                  </a>
                </div>
                <div className="position-relative">
                  <img
                    src="../images/10.jpg"
                    alt="9"
                    style={{
                      width: "100%",
                      border: "1px solid #e9e9e9 ",
                      borderRadius: "5px",
                    }}
                  />
                  <a
                    href="#"
                    className="position-absolute top-100 start-50 translate-middle"
                    style={{
                      width: "35px",
                      height: "35px",
                      backgroundColor: "#f7f7f8",
                      border: "1px solid #e9e9e9",
                      borderRadius: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <BiShoppingBag style={{ color: "#64b496" }} />
                  </a>
                </div>
                <Card.Body style={{ padding: "10px 0px" }}>
                  <Card.Title>
                    <a
                      href="#"
                      style={{
                        fontSize: "13px",
                        color: "#777",
                        margin: "20px 0 0 0",
                      }}
                    >
                      Snacks
                    </a>
                  </Card.Title>
                  <Card.Text>
                    <div>
                      <FaStar style={{ color: "#f5885f" }} />
                      <FaStar style={{ color: "#f5885f" }} />
                      <FaStar style={{ color: "#f5885f" }} />
                      <FaStar style={{ color: "#f5885f" }} />
                      <FaStar style={{ color: "#f5885f" }} />
                      <span
                        style={{
                          fontSize: "13px",
                          margin: "0 5px",
                          color: "#999",
                        }}
                      >
                        (5.0)
                      </span>
                    </div>

                    <a
                      href="#"
                      style={{
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "#2b2b2b",
                        margin: "10px 0",
                      }}
                    >
                      Sweet crunchy nut mix 250gm pack
                    </a>
                    <span
                      style={{
                        color: "#64b496",
                        fontWeight: "700",
                        margin: "0 10px 0 0px",
                      }}
                    >
                      $120.25
                    </span>
                    <span style={{ fontSize: "13px", color: "#7A7A7A" }}>
                      <del>$123.25</del>
                    </span>
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Cardproject;
