import React from "react";
import { FaGithub, FaConnectdevelop, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo
              href="https://aliev.tech"
              target="_blank"
              aria-label="Developer"
              rel="noopener noreferrer"
            >
              by: www.aliev.tech
            </SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href="https://github.com/mukhammed3"
                target="_blank"
                aria-label="GitHub"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                aria-label="Linkedin"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://aliev.tech"
                target="_blank"
                aria-label="Developer"
                rel="noopener noreferrer"
              >
                <FaConnectdevelop />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
