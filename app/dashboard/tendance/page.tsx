import Container from "@/components/elements/container";
import { Logo } from "@/components/logo/logo";
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Nbr_inscrit from "@/public/icon/nbr_inscrit.svg";
import Nbr_votant from "@/public/icon/nbr_votant.svg";
import Nbr_candidat from "@/public/icon/nbr_candidat.svg";
import TableTendance from "@/components/elements/tables-tendances";
import SkeltonCard from "@/components/elements/skeltonCard";

export default function page() {
  return (
    <Container>
      <div className="mt-2">
        <div className="flex justify-between items-center relative">
          <div className="absolute bottom-0 left-[27rem] transform -translate-x-1/2 hidden lg:block">
            <div className="w-[55rem] h-[2px] bg-color_primary rounded-full hidden lg:block"></div>
          </div>
          <div className="flex items-center gap-3  lg:border-none border-b border-b-color_primary">
            <h1 className="font-extrabold text-3xl text-color_primary">
              Sunu Election
            </h1>
            <Logo width="50" />
          </div>

          <div className="flex items-center space-x-10 ">
            <div className="bg-gray-300 rounded-full p-1">
              <Bell className="hidden lg:block" />
            </div>
            <div className="flex items-center space-x-3">
              <div>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Nouha"
                  />
                  <AvatarFallback>NM</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <p className="text-[12px] font-bold text-color_primary">
                  Nouha M.
                </p>
                <p className="text-[12px] text-color_secondary">Electeur</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 block lg:flex items-center justify-center lg:justify-between">
          <div className="flex items-center space-x-3 p-4 static_shadow">
            <div>
              <p className="text-gray-400">Nombre d'inscrits</p>
              <span className="text-color_primary text-[20px] font-extrabold">
                1.2M
              </span>
            </div>
            <div>
              <Image src={Nbr_inscrit} alt="Nombre d'inscrit" />
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 static_shadow">
            <div>
              <p className="text-gray-400">Nombre de votant</p>
              <span className="text-color_primary text-[20px] font-extrabold">
                10K
              </span>
            </div>
            <div>
              <Image src={Nbr_votant} alt="Nombre d'inscrit" />
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 static_shadow">
            <div>
              <p className="text-gray-400">Nombre de candidtas</p>
              <span className="text-color_primary text-[20px] font-extrabold">
                09
              </span>
            </div>
            <div>
              <Image src={Nbr_candidat} alt="Nombre d'inscrit" />
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-between">
          <div>
            <TableTendance />
          </div>
          <div className="hidden lg:block">
            <SkeltonCard />
          </div>
        </div>
      </div>
    </Container>
  );
}
