import React from "react";
import styled from "styled-components";
// import "./Footer.css";
import { Link } from "react-router-dom";

const ProgrammAktuellLink = "/Programm/Aktuell";
const ProgrammDemnächstLink = "/Programm/Demnächst";
const InformationsLink = "/Information";
const KontaktLink = "/Kontakt";
const SnacksLink = "/Shop/Snacks";
const BekleidungLink = "/Shop/Bekleidung";
const GutscheineLink = "/Shop/Geschenke";
const ImpressumLink = "/Impressum";
const WunschlisteLink = "/Wunschliste";

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
                <li>Mail: info@KG42</li>
                <li>Telefon: +49 157 45854321</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
              <h4>Programm</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to={ProgrammAktuellLink}>Aktuelles</Link>
                </li>
                <li>
                  <Link to={ProgrammDemnächstLink}>Demnächst</Link>
                </li>
                <li>
                  <Link to={WunschlisteLink}>Wunschliste</Link>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
              <h4 key="1" href="/Shop">
                Shop
              </h4>
              <ul className="list-unstyled">
                <li>
                  <Link to={BekleidungLink}>Bekleidung</Link>
                </li>
                <li>
                  <Link to={SnacksLink}>Snacks</Link>
                </li>
                <li>
                  <Link to={GutscheineLink}>Gutscheine</Link>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="col-md-3 col-sm-6">
              <h4>Informationen</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to={KontaktLink}>Kontakt</Link>
                </li>
                <li>
                  <Link to={InformationsLink}>Online Ticketverkauf</Link>
                </li>
                <li>
                  <Link to={ImpressumLink}>Impressum</Link>
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
  }
`;
