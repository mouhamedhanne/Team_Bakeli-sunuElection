import Container from "@/components/elements/container";
import { Logo } from "@/components/logo/logo";
import { Link } from "lucide-react";
import { SearchBar } from "@/components/elements/search";
import Image from "next/image";
import Candidat1 from "@/public/images/bassirou-diomay-faye.svg";

export default function page() {
  return (
    <Container>
      <div>
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
          </div>
        </nav>

        <SearchBar />

        <div>
          <div>
            <div>
              <p>Bassirou D. Faye</p>
              <span>Inspecteur Impot/Domaine</span>
              <button>Voter</button>
              <button>Programme</button>
            </div>
            <div>
              <Image src={Candidat1} alt="Diomaye" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
