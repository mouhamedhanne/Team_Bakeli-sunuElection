import Link from "next/link";

export default function Features() {
  return (
    <div>
      <div className="flex h-full gap-6 pb-8 pt-6 mt-8 max-lg:mt-0 text-white max-lg:flex-col max-lg:px-5 md:py-10 ">
        <div className="rounded-lg bg-color_primary border-2 border-blue-500 shadow-sm h-full flex-1">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              1. Etre inscris sur la liste electorale
            </h3>
            <p className="text-sm text-gray-400">
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page,
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-color_primary border-2 border-blue-500 shadow-sm h-full flex-1">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              2. Entrez vos information personnels
            </h3>
            <p className="text-sm text-gray-400">
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page,
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-color_primary border-2 border-blue-500 shadow-sm h-full flex-1">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3
              className="text-2xl font-semibold leading-none
                        tracking-tight"
            >
              3. Choisissez votre candidat
            </h3>
            <p className="text-sm text-gray-400">
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page,
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-color_primary border-2 border-blue-500 shadow-sm h-full flex-1">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              4. Votez en toute transparence
            </h3>
            <p className="text-sm text-gray-400">
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page,
            </p>
          </div>
        </div>
      </div>
      <div className="flex h-full flex-col items-center gap-6 pb-8 pt-6 lg:py-10">
        <h2
          className="scroll-m-20 text-4xl text-color_primary font-extrabold tracking-tight lg:text-4xl 
          max-lg:text-center custom_shadow"
        >
          Procedez au vote maintenant!
        </h2>
        <Link
          href="/login"
          className="inline-flex items-center justify-center
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-offset-2 disabled:opacity-50 
            disabled:pointer-events-none h-11 rounded-md px-8 py-6
            text-lg font-bold bg-color_secondary hover:bg-color_secondary/90
            transition duration-300 ease-in-out transform text-white"
        >
          Voter Maintenant
        </Link>
      </div>
    </div>
  );
}
