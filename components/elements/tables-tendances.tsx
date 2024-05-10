import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    ID: "E58293852",
    Prenom: "Bassirou Diomaye",
    Nom: "Faye",
    Partie: "PASTEF",
  },
  {
    ID: "E58293852",
    Prenom: "Amadou",
    Nom: "Ba",
    Partie: "DORKATT",
  },
  {
    ID: "E58293852",
    Prenom: "Aliou Mamadou",
    Nom: "Dia",
    Partie: "ASC Dahira bi",
  },
  {
    ID: "E58293852",
    Prenom: "Anta Babacar",
    Nom: "Ngom",
    Partie: "BEUG POULET",
  },
  {
    ID: "E58293852",
    Prenom: "Nouha",
    Nom: "Marega",
    Partie: "BAKELI",
  },
];

export default function TableTendance() {
  return (
    <Table>
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Prenom</TableHead>
          <TableHead>Nom</TableHead>
          <TableHead className="text-right">Partie politique</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.ID}>
            <TableCell className="font-medium">{invoice.ID}</TableCell>
            <TableCell>{invoice.Prenom}</TableCell>
            <TableCell>{invoice.Nom}</TableCell>
            <TableCell className="text-right">{invoice.Partie}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow></TableRow>
      </TableFooter>
    </Table>
  );
}
