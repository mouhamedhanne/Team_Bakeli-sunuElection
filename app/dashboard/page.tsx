import Container from "@/components/elements/container";
import { Logo } from "@/components/logo/logo";
import Link from "next/link";
import { SearchBar } from "@/components/elements/search";
import Image from "next/image";
import Candidats from "@/data/Candidats.json";
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
              <button
                className="text-white bg-color_secondary px-4 py-2 rounded-lg font-bold 
              hover:bg-color_secondary/90 "
              >
                <Link href="/dashboard/tendance">Voir les Tendances</Link>
              </button>
            </div>
          </div>
        </nav>

        <SearchBar />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
          {Candidats.map((candidat, index) => (
            <div
              key={index}
              className="flex justify-center items-center space-x-3  card_shadow p-3 rounded-[1.5rem]"
            >
              <div>
                <p className="font-bold text-color_primary">{candidat.name}</p>
                <p className="text-[15px] text-gray-400">{candidat.fonction}</p>
                <div className="mt-4">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button className="block px-5 py-1 bg-color_primary text-white rounded-full font-bold">
                        Voter
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Êtes-vous sûr de votre choix ?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Une fois confirmé, votre vote sera enregistré et vous
                          ne pourrez pas revenir en arrière ou changer votre
                          choix.
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

                  <button className="mt-2 px-6 py-1 border border-color_primary text-color_primary rounded-full font-bold">
                    Programme
                  </button>
                </div>
              </div>
              <div>
                <Image
                  src={candidat.image}
                  alt={candidat.name}
                  width={120}
                  height={40}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
