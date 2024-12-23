import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiShoppingBag } from "react-icons/bi";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaEye } from "react-icons/fa";

const Cardproject2 = () => {
  const design = {
    p_color: {
      color: "#7f7f7f",
    },
  };

  return (
    // style-2

    <div className="py">
      <Container>
        <div className="design text-center" style={{ margin: "0 0 30px 0" }}>
          <h1>Style 2</h1>
          <p style={design.p_color}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore lacus vel facilisis.
          </p>
        </div>
        <Row>
          {/* col-1 */}

          <Col xxl="4" xl="4" lg="4" md="6" sm="12" xs="12">
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
                    src="../images/1.jpg"
                    alt="1"
                    style={{
                      width: "100%",
                      border: "1px solid #e9e9e9 ",
                      borderRadius: "5px",
                    }}
                  />
                  <a
                    href="#"
                    className="position-absolute bottom-0 end-0 translate-middle"
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
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "#2b2b2b",
                        margin: "10px 0 0 0",
                      }}
                    >
                      Organic fresh lemon
                    </a>
                  </Card.Title>
                  <Card.Text>
                    <p style={{ color: "#7f7f7f", margin: "0 0 5px 0" }}>
                      Lorem ipsum dolor adipisicing elit.
                    </p>
                    <div style={{ margin: "0 0 10px 0" }}>
                      <FaStar
                        style={{
                          color: "#f5885f",
                          fontSize: "15px",
                          margin: "0 5px 0 0",
                        }}
                      />
                      <FaStar
                        style={{
                          color: "#f5885f",
                          fontSize: "15px",
                          margin: "0 5px 0 0",
                        }}
                      />
                      <FaStar
                        style={{
                          color: "#f5885f",
                          fontSize: "15px",
                          margin: "0 5px 0 0",
                        }}
                      />
                      <FaStar
                        style={{
                          color: "#f5885f",
                          fontSize: "15px",
                          margin: "0 5px 0 0",
                        }}
                      />
                      <FaStar
                        style={{
                          color: "#f5885f",
                          fontSize: "15px",
                          margin: "0 5px 0 0",
                        }}
                      />
                    </div>

                    <span
                      style={{
                        color: "#64b496",
                        fontWeight: "700",
                        margin: "0 10px 0 0",
                        fontSize: "17px",
                      }}
                    >
                      $115.25
                    </span>
                    <span style={{ fontSize: "13px", color: "#7A7A7A" }}>
                      <del>$135.25</del>
                    </span>
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>

          {/* col-2 */}

          <Col xxl="4" xl="4" lg="4" md="6" sm="12" xs="12">
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
                    alt="1"
                    style={{
                      width: "100%",
                      border: "1px solid #e9e9e9 ",
                      borderRadius: "5px",
                    }}
                  />
                  <a
                    href="#"
                    className="position-absolute bottom-0 end-0 translate-middle"
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
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "#2b2b2b",
                        margin: "10px 0 0 0",
                      }}
                    >
                      Organic fresh apple juice
                    </a>
                  </Card.Title>
                  <Card.Text>
                    <p style={{ color: "#7f7f7f", margin: "0 0 5px 0" }}>
                      Lorem ipsum dolor adipisicing elit.
                    </p>
                    <div style={{ margin: "0 0 10px 0" }}>
                      <FaStar
                        style={{
                          color: "#f5885f",
                          fontSize: "15px",
                          margin: "0 5px 0 0",
                        }}
                      />
                      <FaStar
                        style={{
                          color: "#f5885f",
                          fontSize: "15px",
                          margin: "0 5px 0 0",
                        }}
                      />
                      <FaStar
                        style={{
                          color: "#f5885f",
                          fontSize: "15px",
                          margin: "0 5px 0 0",
                        }}
                      />
                      <FaStar
                        style={{
                          color: "#f5885f",
                          fontSize: "15px",
                          margin: "0 5px 0 0",
                        }}
                      />
                      <FaStar
                        style={{
                          color: "#f5885f",
                          fontSize: "15px",
                          margin: "0 5px 0 0",
                        }}
                      />
                    </div>

                    <span
                      style={{
                        color: "#64b496",
                        fontWeight: "700",
                        margin: "0 10px",
                        fontSize: "17px",
                      }}
                    >
                      $180.50
                    </span>
                    <span style={{ fontSize: "13px", color: "#7A7A7A" }}>
                      <del>$200</del>
                    </span>
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>

          {/* col-3 */}

          <Col xxl="4" xl="4" lg="4" md="6" sm="12" xs="12">
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
                    alt="1"
                    style={{
                      width: "100%",
                      border: "1px solid #e9e9e9 ",
                      borderRadius: "5px",
                    }}
                  />
                  <a
                    href="#"
                    className="position-absolute bottom-0 end-0 translate-middle"
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
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "#2b2b2b",
                        margin: "10px 0 0 0",
                      }}
                    >
                      Organic fresh venila farm watermelon 5kg
                    </a>
                  </Card.Title>
                  <Card.Text>
                    <p style={{ color: "#7f7f7f", margin: "0 0 5px 0" }}>
                      Lorem ipsum dolor adipisicing elit.
                    </p>
                    <div style={{ margin: "0 0 10px 0" }}>
                      <FaStar
                        style={{
                          color: "#f5885f",
                          fontSize: "15px",
                          margin: "0 5px 0 0",
                        }}
                      />
                      <FaStar
                        style={{
                          color: "#f5885f",
                          fontSize: "15px",
                          margin: "0 5px 0 0",
                        }}
                      />
                      <FaStar
                        style={{
                          color: "#f5885f",
                          fontSize: "15px",
                          margin: "0 5px 0 0",
                        }}
                      />
                      <FaStar
                        style={{
                          color: "#f5885f",
                          fontSize: "15px",
                          margin: "0 5px 0 0",
                        }}
                      />
                      <FaStar
                        style={{
                          color: "#f5885f",
                          fontSize: "15px",
                          margin: "0 5px 0 0",
                        }}
                      />
                    </div>

                    <span
                      style={{
                        color: "#64b496",
                        fontWeight: "700",
                        margin: "0 10px",
                        fontSize: "17px",
                      }}
                    >
                      $220.50
                    </span>
                    <span style={{ fontSize: "13px", color: "#7A7A7A" }}>
                      <del>$250.75</del>
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
export default Cardproject2;
