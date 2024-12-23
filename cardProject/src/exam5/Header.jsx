import Container from "react-bootstrap/Container";
import React from "react";
import Form from "react-bootstrap/Form";
import { RiSearchLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
const Headercomponent = () => {
  return (
    <>
      <Container>
        <header className="navbar navbar-expand-lg  navbar-light bg-Primary py-3">
          <div className="d-flex justify-content-between items-center w-100">
            <div className="logo">
              <a href="#" className="navbar-brand fw-bold">
                <img
                  src="../images/logo.png"
                  alt="1"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </a>
            </div>
            <div className="d-flex">
              <Form style={{ position: "relative" }}>
                <input
                  type="text"
                  placeholder="Search For items..."
                  style={{
                    width: "600px",
                    height: "45px",
                    border: "1px solid #64b496",
                    borderRadius: "5px",
                    outline: "0",
                    padding: "0 15px 0 ",
                  }}
                />
                <Form.Select
                  aria-label="Default select example"
                  style={{
                    width: "130px",
                    height: "calc(100% - 1px)",
                    border: "1px solid #64b496",
                    borderRadius: "0",
                    position: "absolute",
                    top: "0px",
                    right: "16px",
                    fontSize: "13px",
                  }}
                >
                  <option>All Categories</option>
                  <option value="1">Mens</option>
                  <option value="2">Woomens</option>
                  <option value="3">Electronics</option>
                </Form.Select>
                <a
                  href="#"
                  style={{
                    width: "45px",
                    backgroundColor: "#64b496",
                    position: "absolute",
                    right: "-28px",
                    top: "0",
                    bottom: "1px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    borderRadius: "0 5px 5px 0",
                  }}
                >
                  <RiSearchLine size={20} style={{ marginRight: "8px" }} />
                </a>
              </Form>
            </div>
            <div className="d-flex ">
              <Dropdown
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Dropdown.Toggle id="dropdown-basic">
                  {" "}
                  <AiOutlineUser size={20} style={{ marginRight: "8px" }} />
                  <a
                    href="#"
                    style={{
                      fontSize: "15px",
                      color: "#000",
                      letterSpacing: "1px",
                    }}
                  >
                    Account
                  </a>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Register</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Checkout</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Login</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <a
                href="#"
                className="nav-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#000",
                  fontSize: "15px",
                  letterSpacing: "1px",
                  fontWeight: "600",
                  marginLeft: "20px",
                }}
              >
                <FaRegHeart size={20} style={{ marginRight: "8px" }} />
                Wishlist
              </a>
              <a
                href="#"
                className="nav-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#000",
                  fontSize: "15px",
                  letterSpacing: "1px",
                  fontWeight: "600",
                  marginLeft: "20px",
                }}
              >
                <FiShoppingCart size={20} style={{ marginRight: "8px" }} />
                Cart
              </a>
            </div>
          </div>
        </header>
        <hr />
      </Container>
    </>
  );
};
export default Headercomponent;
