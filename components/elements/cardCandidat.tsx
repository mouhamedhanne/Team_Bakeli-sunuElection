import { FilePen, Vote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


interface Candidat {
    nom: string,
    porf: string,
    pProfil : string,
    id: number
}

const candidatData : Candidat[] = [
   { 
        nom : "Bachir Diomay Faye",
        porf : "inspecteur des impots",
        pProfil : '',
        id : 1
    },
   { 
        nom : "Habib Sy",
        porf : "inspecteur des impots",
        pProfil : '',
        id : 2
    },
    {
        nom : "Anta Babacar Ngome",
        porf : "DG SEDIMA ",
        pProfil : '',
        id : 3,
    },
    {
        nom : "Khalifa Ababacar Sall",
        porf : "professeur d'histoire et de geographie",
        pProfil : '',
        id : 4,
    },
    {
        nom : "Dethié Fall",
        porf : "Ingenieur Polytechnicien",
        pProfil : '',
        id : 4
    },
    {
        nom : "Cheikh Tidiane Dieye",
        porf : "Docteur en sociologie",
        pProfil : '',
        id : 5,
    },
    {
        nom : "Boubacar Camara",
        porf : "douanier / avocat",
        pProfil : '',
        id : 6
    },
    {
        nom : "Daouda Ndiaye",
        porf : "proffesseur titulaire des universités",
        pProfil : '',
        id : 7
    },

]


export default function CardCandidat() {
    return (<div className=" py-5 mb-20 grid grid-cols-3 max-md:grid-cols-1 justify-center items-center gap-3 gap-y-4 ">
       {candidatData.map((nom) => (
         <div className="max-w-md px-3 h-full rounded-lg mt-10 flex justify-between gap-5 items-center shadow-sm border"
          key={nom.id}>
         <div className="flex flex-col gap-5">{/* nom et profession */}
         <div className="flex flex-col">
             <span className="text-md font-bold  ">{nom.nom} </span>
             <span className="text-sm text-text_muted">{nom.porf} </span>
         </div>
         <div className="flex flex-col gap-1 justify-center items-center">
             <button > 
                <Link href={'/'} className=" px-4 py-1 rounded-xl font-semibold bg-color_secondary text-white flex justify-center items-center gap-1 " >
                    <Vote className="w-4" /> Voter
                </Link>
             </button>
             <button >
                <Link href={'/'} className="border text-color_secondary border-color_secondary px-4 py-1 rounded-xl font-semibold flex justify-center items-center gap-1">
                    <FilePen className="w-4" /> Programme
                </Link>
            </button>
         </div>
     </div>

     <div>
         <Image 
         width={150} height={150} src='/image/imageEmpreinte.svg' alt='' className="border rounded-full"/>
     </div>
    </div>
       )) }
    </div>)
  }