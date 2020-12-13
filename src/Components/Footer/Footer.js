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
              <h4>Programm</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Aktuelles</a>
                </li>
                <li>
                  <a href="/">Demnächst</a>
                </li>
                <li>
                  <a href="/">Wunschliste</a>
                </li>
                
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
              <h4>Shop</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Klamotten</a>
                </li>
                <li>
                  <a href="/">Snacks</a>
                </li>
                <li>
                  <a href="/">Gutscheine</a>
                </li>
                
              </ul>
            </div>
            {/* Column 4 */}
            <div className="col-md-3 col-sm-6">
              <h4>Informationen</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Offene Stellen</a>
                </li>
                <li>
                  <a href="/">Kontakt</a>
                </li>
                <li>
                  <a href="/">Online Ticketkauf</a>
                </li>
                <li>
                  <a href="/">Impressum </a>
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
