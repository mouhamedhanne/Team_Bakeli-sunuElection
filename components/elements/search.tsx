import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="mt-10 relative">
      <div className="absolute top-2 left-12"></div>
      <Input className="rounded-full" placeholder="Rechercher" />
    </div>
  );
};
