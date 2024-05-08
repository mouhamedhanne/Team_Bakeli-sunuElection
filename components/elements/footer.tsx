import { Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" my-20 text-center">
      <div className=" mb-3">
        <p className="text-base text-neutral-600 flex items-center justify-center gap-1">
          Propulsé avec <Heart className="text-red-500 " />
          par
          <Link href="/">
            <u>@TeamSunuElection</u>
          </Link>
        </p>
      </div>
    </footer>
  );
}
