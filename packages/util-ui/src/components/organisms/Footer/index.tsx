import { Navigate, Newsletter } from "../../molecules";
import { Icon } from "../../atoms";
import {
  Container,
  Content,
  WrapperSocialLinks,
  Column,
  WrapperNewsletter,
  WrapperLink,
  Paragraph,
} from "./styles";
import Linkedin from "../../../assets/icons/linkedin.svg";
import Facebook from "../../../assets/icons/facebook.svg";
import Instagram from "../../../assets/icons/instagram.svg";
import Twitter from "../../../assets/icons/twitter.svg";

export const Footer = () => {
  return (
    <Container>
      <Content>
        <Column>
          <WrapperLink>
            <Navigate path="/" children="CONTACT" />
            <Navigate path="/" children="TERMS OF SERVICES" />
            <Navigate path="/" children="SHIPPING AND RETURNS" />
          </WrapperLink>

          <Paragraph>
            © 2021 Shelly. <a href="/">Terms of Use</a> and{" "}
            <a href="/">Privacy Policy</a>.
          </Paragraph>
        </Column>

        <Column>
          <WrapperNewsletter>
            <Newsletter placeholder="Give an e-mail, get the newsletter." />
          </WrapperNewsletter>

          <WrapperSocialLinks>
            <Icon children={<img src={Linkedin} alt="LinkedIn" />} />
            <Icon children={<img src={Facebook} alt="Facebook" />} />
            <Icon children={<img src={Instagram} alt="Instagram" />} />
            <Icon children={<img src={Twitter} alt="Twitter" />} />
          </WrapperSocialLinks>
        </Column>
      </Content>
    </Container>
  );
};
