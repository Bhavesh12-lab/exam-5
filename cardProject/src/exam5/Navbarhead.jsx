import { RiMenu2Line } from "react-icons/ri";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LuPhoneCall } from "react-icons/lu";
import Dropdown from "react-bootstrap/Dropdown";
const Navheader = () => {
  return (
    <>
      <Container>
        <Navbar
          expand="lg"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="itemZ">
            <Navbar.Brand
              href="#"
              style={{
                border: "1px solid #e9e9e9",
                borderRadius: "10px",
                padding: "5px 10px",
              }}
            >
              <RiMenu2Line size={20} />
            </Navbar.Brand>
            <div className="d-flex item-A">
              <ul className="list-unstyled mb-0" style={{ padding: "0 0 0 0" }}>
                <li>
                  <a href="#" className="item-1 active">
                    Dairy & Bakery
                  </a>
                </li>
                <li>
                  <a href="#" className="item-1">
                    Fruits & Vegetable
                  </a>
                </li>
                <li>
                  <a href="#" className="item-1">
                    Snack & Spice
                  </a>
                </li>
                <li>
                  <a href="#" className="item-1">
                    Juice & Drinks
                  </a>
                </li>
                <li>
                  <a href="#" className="item-1">
                    View All
                  </a>
                </li>
              </ul>
              <ul className="list-unstyled" style={{ margin: "0 20px 0 20px" }}>
                <li>
                  <a href="#" className="mega-title">
                    Dairy
                  </a>
                </li>
                <li>
                  <a href="#" className="mega-item">
                    Milk
                  </a>
                </li>
                <li>
                  <a href="#" className="mega-item">
                    Ice-Cream
                  </a>
                </li>
                <li>
                  <a href="#" className="mega-item">
                    Cheese
                  </a>
                </li>
                <li>
                  <a href="#" className="mega-item">
                    Frozen Custard
                  </a>
                </li>
                <li>
                  <a href="#" className="mega-item">
                    Frozen Yogurt
                  </a>
                </li>
              </ul>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="mega-title">
                    Bakery
                  </a>
                </li>
                <li>
                  <a href="#" className="mega-item">
                    Cake And Pastry
                  </a>
                </li>
                <li>
                  <a href="#" className="mega-item">
                    Rusk Toast
                  </a>
                </li>
                <li>
                  <a href="#" className="mega-item">
                    Bread & Buns
                  </a>
                </li>
                <li>
                  <a href="#" className="mega-item">
                    Chocolate Brownie
                  </a>
                </li>
                <li>
                  <a href="#" className="mega-item">
                    Cream Roll
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Nav>
            <Nav.Link
              href="#features"
              style={{
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <a href="#" className="navLinner">
                Home
              </a>
            </Nav.Link>
            <Nav.Link href="#pricing">
              {" "}
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{ color: "#000", fontWeight: "500", fontSize: "14px" }}
                >
                  <a href="#" className="navLinner">
                    Category
                  </a>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  style={{
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                  }}
                >
                  <Dropdown.Item
                    href="#/action-1"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Shop Left Sidebar
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Shop Right Sidebar
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Full Width
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
            <Nav.Link href="#pricing">
              {" "}
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{ color: "#000", fontWeight: "500", fontSize: "14px" }}
                >
                  <a href="#" className="navLinner">
                    Products
                  </a>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  style={{
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                  }}
                >
                  <Dropdown.Item
                    href="#/action-1"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Product Left Sidebar
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Product Right Sidebar
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Product Full Width
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
            <Nav.Link href="#pricing">
              {" "}
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{ color: "#000", fontWeight: "500", fontSize: "14px" }}
                >
                  <a href="#" className="navLinner">
                    Pages
                  </a>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  style={{
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                  }}
                >
                  <Dropdown.Item
                    href="#/action-1"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    About Us
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Contact Us
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Cart
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Checkout
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Track Order
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Wishlist
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Faq
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Login
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Register
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Policy
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
            <Nav.Link href="#pricing">
              {" "}
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{ color: "#000", fontWeight: "500", fontSize: "14px" }}
                >
                  <a href="#" className="navLinner">
                    Blog
                  </a>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  style={{
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                  }}
                >
                  <Dropdown.Item
                    href="#/action-1"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Left Sidebar
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Right Sidebar
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Full Width
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Detail Left Sidebar
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Detail Right Sidebar
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Detail Full Width
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
            <Nav.Link href="#pricing">
              {" "}
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{ color: "#000", fontWeight: "500", fontSize: "14px" }}
                >
                  <a href="#" className="navLinner">
                    Elements
                  </a>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  style={{
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                  }}
                >
                  <Dropdown.Item
                    href="#/action-1"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Products
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Typography
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    style={{ fontSize: "13px", color: "#777" }}
                  >
                    Buttons
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
          </Nav>
          <div>
            <LuPhoneCall size={20} style={{ marginRight: "10px" }} />
            <a href="#" style={{ color: "#000", fontWeight: "600" }}>
              +123 ( 456 ) ( 7890 )
            </a>
          </div>
        </Navbar>
      </Container>
    </>
  );
};
export default Navheader;
