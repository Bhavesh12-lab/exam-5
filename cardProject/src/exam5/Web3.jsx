import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiShoppingBag } from "react-icons/bi";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa6";
import { LuStar } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaEye } from "react-icons/fa";

const Cardproject3 = () => {
  const design = {
    p_color: {
      color: "#7f7f7f",
    },
  };

  return (
    // style-3

    <div className="py">
      <Container>
        <div className="design text-center" style={{ margin: "0 0 30px 0" }}>
          <h1>Style 3</h1>
          <p style={design.p_color}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore lacus vel facilisis.
          </p>
        </div>
        <Row>
          {/* col-1 */}

          <Col xxl="3" xl="4" lg="6" md="6" sm="12" xs="12">
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
                    src="../images/6.webp"
                    alt="1"
                    style={{
                      width: "100%",
                      border: "1px solid #e9e9e9 ",
                      borderRadius: "5px",
                      objectFit: "cover",
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
                      Organic Lime fruit
                    </a>
                  </Card.Title>
                  <Card.Text>
                    <p style={{ color: "#7f7f7f", margin: "0 0 5px 0" }}>
                      A lime is a citrus fruit, which is typically round, green
                      in color, 3–6 centimetres (1.2–2.4 in) in diameter, and
                      contains acidic juice vesicles.[1]
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
                      <LuStar
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
                      $225.25
                    </span>
                    <span style={{ fontSize: "13px", color: "#7A7A7A" }}>
                      <del>$240.25</del>
                    </span>
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>

          {/* col-2 */}

          <Col xxl="3" xl="4" lg="6" md="6" sm="12" xs="12">
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
                    src="../images/8.jpg"
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
                      Organic Black grapes juice
                    </a>
                  </Card.Title>
                  <Card.Text>
                    <p style={{ color: "#7f7f7f", margin: "0 0 5px 0" }}>
                      Black grapes are a sweet, small fruit that are high in
                      antioxidants and have many potential health benefits
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
                      <LuStar
                        style={{
                          color: "#f5885f",
                          fontSize: "15px",
                          margin: "0 5px 0 0",
                        }}
                      />
                      <LuStar
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
                      $150.50
                    </span>
                    <span style={{ fontSize: "13px", color: "#7A7A7A" }}>
                      <del>$200.25</del>
                    </span>
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>

          {/* col-3 */}

          <Col xxl="3" xl="4" lg="6" md="6" sm="12" xs="12">
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
                    src="../images/7.jpg"
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
                      Organic fresh Cherry juice
                    </a>
                  </Card.Title>
                  <Card.Text>
                    <p style={{ color: "#7f7f7f", margin: "0 0 5px 0" }}>
                      A cherry is the fruit of many plants of the genus Prunus,
                      and is a fleshy drupe (stone fruit).
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
                      $250.50
                    </span>
                    <span style={{ fontSize: "13px", color: "#7A7A7A" }}>
                      <del>$275.75</del>
                    </span>
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>

          {/* col-4 */}

          <Col xxl="3" xl="4" lg="6" md="6" sm="12" xs="12">
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
                    src="../images/11.jpg"
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
                      Organic fresh Raspberry fruit
                    </a>
                  </Card.Title>
                  <Card.Text>
                    <p style={{ color: "#7f7f7f", margin: "0 0 5px 0" }}>
                      The raspberry is the edible fruit of several plant species
                      in the genus Rubus of the rose family, most of which are
                      in the subgenus Idaeobatus.
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
                      $280.75
                    </span>
                    <span style={{ fontSize: "13px", color: "#7A7A7A" }}>
                      <del>$300.50</del>
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
export default Cardproject3;
