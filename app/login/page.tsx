"use client";

import Container from "@/components/elements/container";
import { Undo2 } from "lucide-react";
import Image from "next/image";
import IllustrationEmpreinte from "@/public/images/imageEmpreinte.svg";
import Link from "next/link";
import { useState } from "react";

export default function page() {
  const [valueTel, setvalueTel] = useState<string>("");
  const [valueElecteur, setvalueElecteur] = useState<string>("");
  const [valueCNI, setvalueCNI] = useState<string>("");

  return (
    <div>
      <Link
        href="/"
        className="flex flex-row gap-2 px-2 font-semibold rounded-md bg-gray-200 hover:bg-gray-100 transition-all m-10 max-sm:m-5 max-w-fit justify-center items-center"
      >
        <Undo2 className="w-4" /> Retour
      </Link>
      <Container>
        <form>
          <div className="flex max-md:flex-col justify-center max-md:items-center gap-10">
            <div>
              <Image
                width={500}
                height={500}
                className="max-md:hidden "
                src={IllustrationEmpreinte}
                alt="image empreinte digitale"
              />
            </div>
            <div className=" flex flex-col w-96 max-sm:w-80 p-2 pb-40  gap-10 justify-center">
              {/* <h1 className="font-bold text-2xl"> Votre avenir est entre vos main </h1> */}
              <h1 className="font-bold text-2xl max-md:xl">
                {" "}
                Entrez vos identifiants{" "}
              </h1>

              <div className="p-3 border rounded-md ">
                <span className="px-3 absolute font-semibold bg-white -translate-y-7 translate-x-3 text-gray-400">
                  Téléphone <span className="text-red-500">*</span>{" "}
                </span>
                <input
                  className="text-sm w-full border-2 border-#8C8A85 placeholder-text_muted font-semibold outline-none border-none focus:border-secondary"
                  value={valueTel}
                  onChange={(e) => setvalueTel(e.target.value)}
                  placeholder="Entrez votre numero de telephone"
                />
              </div>

              <div className="p-3 border rounded-md ">
                <span className="px-3 absolute font-semibold bg-white -translate-y-7 translate-x-3 text-gray-400">
                  Numero electeur <span className="text-red-500">*</span>
                </span>
                <input
                  className="text-sm w-full border-2 border-#8C8A85 placeholder-text_muted font-semibold outline-none border-none focus:border-secondary"
                  value={valueElecteur}
                  onChange={(e) => setvalueElecteur(e.target.value)}
                  placeholder="Entrez votre numero d'electeur"
                />
              </div>

              <div className="p-3 border rounded-md ">
                <span className="px-3 absolute font-semibold bg-white -translate-y-7 translate-x-3 text-gray-400">
                  Numero CNI <span className="text-red-500">*</span>
                </span>
                <input
                  className="text-sm w-full border-2 border-#8C8A85 placeholder-text_muted font-semibold outline-none border-none focus:border-secondary"
                  value={valueCNI}
                  onChange={(e) => setvalueCNI(e.target.value)}
                  placeholder="Entrez votre numero d'identité nationale"
                />
              </div>

              <button className="text-white bg-color_secondary hover:bg-color_secondary/90 px-4 py-2 rounded-lg font-semibold">
                <Link href="/login">Se connecter</Link>
              </button>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
}
