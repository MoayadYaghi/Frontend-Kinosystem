import React from "react";
import styled from "styled-components";
// import "./Footer.css";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4>Kontakt</h4>
              <ul className="list-unstyled">
                <li>68159 Mannheim</li>
                <li>Coblitzallee 1-9</li>
                <li>Mail: theaterhaus-mannheim@kinoreservierung99.com</li>
                <li>Telefon: +49 157 45854321</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">dolor set amet</a>
                </li>
                <li>
                  <a href="/">consetetur sadipscing</a>
                </li>
                <li>
                  <a href="/">sed diam</a>
                </li>
                <li>
                  <a href="/">nonumy eirmod</a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
              <h4>tempor invidunt</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">ut labore</a>
                </li>
                <li>
                  <a href="/">et dolore</a>
                </li>
                <li>
                  <a href="/">magna aliquyam</a>
                </li>
                <li>
                  <a href="/">erat sed</a>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="col-md-3 col-sm-6">
              <h4>diam voluptua</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">At vero</a>
                </li>
                <li>
                  <a href="/">eos et accusam</a>
                </li>
                <li>
                  <a href="/">et justo duo</a>
                </li>
                <li>
                  <a href="/">dolores et ea </a>
                </li>
              </ul>
            </div>
          </div>
          {/*Footer Bottom*/}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Kinoreservierung 99 - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;


const FooterContainer = styled.footer`
.footer-middle {
  list-style: none;
  background: var(--mainDark);
  padding-top: 3rem;
  color: var(--mainWhite);
}

.footer-bottom {
  padding-top: 3rem;
  padding-bottom: 2rem;
}

ul li a {
  color: var(--mainGrey);
}

ul li a:hover {
  color: var(--mainLightGrey);
}`
;
