import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { SlLocationPin } from "react-icons/sl";
import { RiMailSendLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaDribbble } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-100 h-100 d-flex justify-content-center align-items-center">
      <Container>
        <Row>
          <Col xxl={4}>
            <div>
              <a href="#" className="navbar-brand fw-bold">
                <img
                  src="../images/logo.png"
                  alt="1"
                  style={{
                    width: "100%",
                    height: "100%",
                    padding: "0 0 15px 0",
                  }}
                />
              </a>
              <p style={{ color: "#7a7a7a", lineHeight: "1.75" }}>
                Carrot is the biggest market of grocery products. Get your daily
                needs from our store.
              </p>
              <ul className="list-unstyled">
                <li style={{ display: "flex", marginTop: "24px" }}>
                  <SlLocationPin
                    size={28}
                    style={{
                      color: "#64b496",
                      marginBottom: "10px",
                    }}
                  />
                  <p
                    style={{
                      color: "#777",
                      lineHeight: "26px",
                      marginLeft: "10px",
                    }}
                  >
                    51 Green St.Huntington ohaio beach ontario, NY 11746 KY
                    4783, USA.
                  </p>{" "}
                </li>
                <li style={{ display: "flex" }}>
                  <RiMailSendLine
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#64b496",
                    }}
                  />
                  <p
                    style={{
                      color: "#777",
                      lineHeight: "26px",
                      marginLeft: "10px",
                    }}
                  >
                    example@email.com
                  </p>
                </li>
                <li style={{ display: "flex" }}>
                  <IoCallOutline
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#64b496",
                    }}
                  />
                  <p
                    style={{
                      color: "#777",
                      lineHeight: "26px",
                      marginLeft: "10px",
                    }}
                  >
                    +91 123 4567890
                  </p>
                </li>
              </ul>
            </div>
          </Col>
          <Col xxl={2}>
            <ul className="list-unstyled">
              <li className="d-flex items-center">
                <a
                  href="#"
                  className="navbar-brand fw-bold"
                  style={{
                    fontSize: "18px",
                    color: "#000",
                    marginBottom: "15px",
                  }}
                >
                  Company
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#777", marginBottom: "10px" }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#777", marginBottom: "10px" }}>
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#777", marginBottom: "10px" }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#777", marginBottom: "10px" }}>
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#777", marginBottom: "10px" }}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#777", marginBottom: "10px" }}>
                  Support Center
                </a>
              </li>
            </ul>
          </Col>
          <Col xxl={2}>
            <ul className="list-unstyled">
              <li className="d-flex items-center">
                <a
                  href="#"
                  className="navbar-brand fw-bold"
                  style={{
                    fontSize: "18px",
                    color: "#000",
                    marginBottom: "15px",
                  }}
                >
                  Category
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#777", marginBottom: "10px" }}>
                  Dairy & Bakery
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#777", marginBottom: "10px" }}>
                  Fruits & Vegetable
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#777", marginBottom: "10px" }}>
                  Snack & Spice
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#777", marginBottom: "10px" }}>
                  Juice & Drinks
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#777", marginBottom: "10px" }}>
                  Chicken & Meat
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#777", marginBottom: "10px" }}>
                  Fast Food
                </a>
              </li>
            </ul>
          </Col>
          <Col xxl={4}>
            <a
              href="#"
              className="navbar-brand fw-bold"
              style={{
                fontSize: "18px",
                color: "#000",
                marginBottom: "15px",
              }}
            >
              Subscribe Our Newsletter
            </a>
            <div className="position-relative">
              <input
                type="text"
                placeholder="Search For items..."
                style={{
                  width: "100%",
                  height: "45px",
                  border: "1px solid #e9e9e9",
                  borderRadius: "5px",
                  outline: "0",
                  padding: "0 15px 0 ",
                }}
              />
              <RiSendPlaneFill
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "20px",
                  fontSize: "20px",
                  color: "#000",
                }}
              />
              <div className="flex" style={{ margin: "22px -2px" }}>
                <FaFacebookF
                  style={{
                    width: "35px",
                    height: "35px",
                    backgroundColor: "#fff",
                    border: "1px solid #e1dfdf",
                    borderRadius: "5px",
                    padding: "8px",
                  }}
                />
                <RiTwitterXLine
                  style={{
                    width: "35px",
                    height: "35px",
                    backgroundColor: "#fff",
                    border: "1px solid #e1dfdf",
                    borderRadius: "5px",
                    padding: "8px",
                    marginLeft: "5px",
                  }}
                />
                <FaDribbble
                  style={{
                    width: "35px",
                    height: "35px",
                    backgroundColor: "#fff",
                    border: "1px solid #e1dfdf",
                    borderRadius: "5px",
                    padding: "8px",
                    marginLeft: "5px",
                  }}
                />
                <FaInstagram
                  style={{
                    width: "35px",
                    height: "35px",
                    backgroundColor: "#fff",
                    border: "1px solid #e1dfdf",
                    borderRadius: "5px",
                    padding: "8px",
                    marginLeft: "5px",
                  }}
                />
              </div>
            </div>

            <div className="d-flex">
              <div
                className="footerBG"
                style={{
                  width: "85.6px",
                  height: "85.6px",
                  marginRight: "8px",
                  position: "relative",
                }}
              >
                <img
                  src="../images/21.jpg"
                  alt="9"
                  width={75}
                  height={75}
                  style={{
                    borderRadius: "5px",
                    zIndex: "1",
                  }}
                />
                <FaInstagram
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "20px",
                    color: "#fff",
                  }}
                />
              </div>

              <div
                className="footerBG"
                style={{
                  width: "85.6px",
                  height: "85.6px",
                  marginRight: "8px",
                }}
              >
                <img
                  src="../images/22.jpg"
                  alt="9"
                  width={75}
                  height={75}
                  style={{ borderRadius: "5px" }}
                />
                <FaInstagram
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "20px",
                    color: "#fff",
                  }}
                />
              </div>

              <div
                className="footerBG"
                style={{
                  width: "85.6px",
                  height: "85.6px",
                  marginRight: "8px",
                }}
              >
                <img
                  src="../images/23.jpg"
                  alt="9"
                  width={75}
                  height={75}
                  style={{ borderRadius: "5px" }}
                />
                <FaInstagram
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "20px",
                    color: "#fff",
                  }}
                />
              </div>

              <div
                className="footerBG"
                style={{
                  width: "85.6px",
                  height: "85.6px",
                  marginRight: "8px",
                }}
              >
                <img
                  src="../images/24.jpg"
                  alt="9"
                  width={75}
                  height={75}
                  style={{ borderRadius: "5px" }}
                />
                <FaInstagram
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "20px",
                    color: "#fff",
                  }}
                />
              </div>
              <div
                className="footerBG"
                style={{
                  width: "85.6px",
                  height: "85.6px",
                  marginRight: "8px",
                }}
              >
                <img
                  src="../images/25.jpg"
                  alt="9"
                  width={75}
                  height={75}
                  style={{ borderRadius: "5px" }}
                />
                <FaInstagram
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "20px",
                    color: "#fff",
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
