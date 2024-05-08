import Container from "@/components/elements/container";
import Navigations from "@/components/elements/navigations";
import Header from "@/components/elements/Header";
import Features from "@/components/elements/features";
import Footer from "@/components/elements/footer";

export default function Home() {
  return (
    <Container>
      <Navigations />
      <Header />
      <Features />
      <Footer />
    </Container>
  );
}
