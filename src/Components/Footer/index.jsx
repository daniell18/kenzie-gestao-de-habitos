import React from "react";
import { animateScroll as scroll } from "react-scroll";
import Logo from "../../Images/logo.svg";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Linkedin </FooterLinkTitle>
              <SocialIconLink href="/" target="_blank" aria-label="Eric">
                Daniel Francisco
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Gustavo">
                Ivan Rowlands
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/smilly-delmondes-307927207/"
                target="_blank"
                aria-label="smilly"
              >
                Smilly Aguilar
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Rodrigo">
                Willian Gustavo
              </SocialIconLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Contate-Nos </FooterLinkTitle>
              <FooterLink to="/">Contato</FooterLink>
              <FooterLink to="/">Suport</FooterLink>
              <FooterLink to="/">Endereço</FooterLink>
              <FooterLink to="/">Patrocínios</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Videos </FooterLinkTitle>
              <FooterLink to="/">Enviar Video</FooterLink>
              <FooterLink to="/">Embaixadores</FooterLink>
              <FooterLink to="/">Agencia</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Media Sócial </FooterLinkTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              <img src={Logo} alt="logo" />
            </SocialLogo>
            <WebsiteRights>
              Kenzie Habit © {new Date().getFullYear()} Todos os direitos
              reservados.
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
