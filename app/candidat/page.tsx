import Container from "@/components/elements/container";
import Link from "next/link";
import { Logo } from "@/components/logo/logo";
import Image from "next/image";
import Candidat1 from "@/public/images/bassirou-diomay-faye.svg";
import { ChevronLeft } from "lucide-react";

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

            <div>
              <button
                className="text-white bg-color_secondary px-4 py-2 rounded-lg font-bold 
              hover:bg-color_secondary/90 "
              >
                Voter
              </button>
            </div>
          </div>
        </nav>

        <div className="mt-8 flex justify-center">
          <Image src={Candidat1} alt="Diomay" />
        </div>

        <div className="mt-5 flex items-center space-x-[25rem]">
          <div>
            <Link
              href="/dashboard"
              className="rounded-full px-2 gap-[2px] flex justify-center card_shadow"
            >
              <ChevronLeft /> Retour
            </Link>
          </div>
          <div className="flex justify-center items-center space-x-10 ">
            <Link href="/dashboard" className="">
              Retour
            </Link>
            <Link href="/dashboard" className="">
              Retour
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
