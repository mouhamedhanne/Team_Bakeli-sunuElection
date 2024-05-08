import Image from "next/image";
import Gouvernement_senegal from "@/public/images/Gouvernement_SENEGAL.svg";
export const Logo = ({ width }: any) => {
  return (
    <Image
      src={Gouvernement_senegal}
      alt="Gouvernement du Senegal"
      width={width}
    />
  );
};
