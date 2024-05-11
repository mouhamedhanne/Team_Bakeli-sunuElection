import Container from "@/components/elements/container";
import Link from "next/link";
import { Logo } from "@/components/logo/logo";
import Image from "next/image";
import Candidat1 from "@/public/images/bassirou-diomay-faye.svg";
import { ChevronLeft } from "lucide-react";
import Candidats from "@/data/Candidats.json";
import { ExternalLink } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button
                    className="text-white bg-color_secondary px-4 py-2 rounded-lg font-bold 
              hover:bg-color_secondary/90 "
                  >
                    Voter
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Êtes-vous sûr de votre choix ?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Une fois confirmé, votre vote sera enregistré et vous ne
                      pourrez pas revenir en arrière ou changer votre choix.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-red-700 text-white">
                      Annuler
                    </AlertDialogCancel>
                    <AlertDialogAction className="bg-color_secondary">
                      Confirmer
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
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
            <p className="font-bold text-[20px] text-color_secondary underline">
              Profil
            </p>
            <Link
              href="https://www.ipar.sn/IMG/pdf/programme_bassirou_diomaye_faye_vf.pdf"
              target="_blank"
              className="text-[20px] flex gap-2"
            >
              Programme <ExternalLink />
            </Link>
          </div>
        </div>

        <div>
          {Candidats.map((candidat, index) => (
            <div key={index} className="mt-10">
              <p>{candidat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
