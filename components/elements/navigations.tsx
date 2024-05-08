import Container from "@/components/elements/container";
import { Logo } from "@/components/logo/logo";
import Link from "next/link";

export default function Navigations() {
  return (
    <Container>
      <nav>
        <div className="flex justify-between items-center px-4 lg:px-0 ">
          <div>
            <Logo width="120" />
          </div>
          <div>
            <h3 className="font-extrabold text-5xl text-color_primary hidden lg:block">
              SunuElection
            </h3>
          </div>
          <div>
            <button
              className="text-white bg-color_secondary px-4 py-2 rounded-lg font-bold 
              hover:bg-color_secondary/90 "
            >
              <Link href="/login">Connexion</Link>
            </button>
          </div>
        </div>
      </nav>
    </Container>
  );
}
