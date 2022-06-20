import "../../scss/main.scss";

import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Button, Container, Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import { FiUser, FiShoppingCart, FiSearch } from "react-icons/fi";

const NavBar = ({ setKeyword, keyword }) => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(true);
    setShow2(false);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const [show2, setShow2] = useState(false);
  const showDropdown2 = (e) => {
    setShow2(true);
    setShow(false);
  };
  const hideDropdown2 = (e) => {
    setShow2(false);
  };
  const hideAll = () => {
    setShow(false);
    setShow2(false);
  };

  const location = useLocation();

  const [KeywordChild, setKeywordChild] = useState("");
  const keyworkdHandler = (e) => {
    setKeywordChild(e.target.value);
  };
  const searchHandler = () => {
    setKeyword(KeywordChild);
  };

  const navigate = useNavigate();
  const PressEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      navigate("/search/");
      searchHandler();
    }
  };

  useEffect(() => {
    if (location.pathname !== "/search/") {
      setKeyword("");
    }
  }, [location.pathname]);

  useEffect(() => {
    setKeywordChild(keyword);
  }, [keyword]);

  return (
    <>
      <div className="navPC">
        <Navbar bg="light" expand="lg" fixed="top">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                <NavDropdown title="Shop" id="navbarScrollingDropdown" show={show} onMouseEnter={showDropdown}>
                  <div onMouseLeave={hideDropdown}>
                    <NavDropdown.Item href="#action3">New In</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Best-Sellers</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Kitchen + Dining</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">Living</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Art</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Prints</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">Sale</NavDropdown.Item>
                  </div>
                </NavDropdown>
                <NavDropdown title="Collection" id="navbarScrollingDropdown" show={show2} onMouseEnter={showDropdown2}>
                  <div onMouseLeave={hideDropdown2}>
                    <NavDropdown.Item href="#action3">Artist Series </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Porcelain Kinto</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Mizu-Mizu</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action3">Japanese Dinnerware</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action3">Drinkware</NavDropdown.Item>
                    <NavDropdown.Item href="#action3">Home Fragrance</NavDropdown.Item>
                  </div>
                </NavDropdown>
                <Nav.Link onMouseEnter={hideAll} href="#action1">
                  Blog
                </Nav.Link>
              </Nav>
              <Navbar.Brand href="#" className="w-30">
                <Link to="/">
                  <h1>mogutable.</h1>
                </Link>
              </Navbar.Brand>
              <Form className="navOutline d-flex w-30">
                <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" value={KeywordChild} onChange={keyworkdHandler} onKeyPress={PressEnter} />
                <Link className="" to={"/search/"}>
                  <Button variant="" onClick={searchHandler}>
                    <FiSearch />
                  </Button>
                </Link>
                <Link className="" to={"/cart/"}>
                  <Button variant="">
                    <FiShoppingCart />
                  </Button>
                </Link>
                <Button className="btnDisabled" variant="">
                  <FiUser />
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="navMobile">
        <Navbar bg="light" expand="lg" fixed="top">
          <Container fluid>
            <div className="d-center mbTop">
              <div>
                <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
              </div>
              <Navbar.Brand href="#" className="w-30">
                <Link to="/">
                  <h1>mogutable.</h1>
                </Link>
              </Navbar.Brand>
              <Form className="navOutline d-flex w-30">
                <Link className="" to={"/cart/"}>
                  <Button variant="">
                    <FiShoppingCart />
                  </Button>
                </Link>
                <Button variant="">
                  <FiUser />
                </Button>
              </Form>
            </div>
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                <Nav.Link onMouseEnter={hideAll} href="#action1">
                  Shop
                </Nav.Link>{" "}
                <Nav.Link onMouseEnter={hideAll} href="#action1">
                  Collections
                </Nav.Link>
                <Nav.Link onMouseEnter={hideAll} href="#action1">
                  Blog
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>{location.pathname === "/" ? <div></div> : <div style={{ height: "52px", width: "100%" }}></div>}</div>
    </>
  );
};
export default NavBar;
