//@ts-ignore
import { Banner, CardProductList } from "@shoppe/util-ui";
import { Container } from "./styles";
import bannerHome from "./assets/images/banners/banner-home.jpg";

export default function Root() {
  return (
    <Container>
      <Banner
        children={
          <img
            src={bannerHome}
            alt="White woman's face in profile, with golden earrings and brown hair tied back"
          />
        }
      />

      <CardProductList />
    </Container>
  );
}
