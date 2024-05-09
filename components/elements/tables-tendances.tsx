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
    ID: "INV001",
    Prenom: "Paid",
    Nom: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    ID: "INV002",
    Prenom: "Pending",
    Nom: "$150.00",
    Partie: "PayPal",
  },
  {
    ID: "INV003",
    Prenom: "Unpaid",
    Nom: "$350.00",
    Partie: "Bank Transfer",
  },
  {
    ID: "INV004",
    Prenom: "Paid",
    totalAmount: "$450.00",
    Partie: "Credit Card",
  },
  {
    ID: "INV005",
    Prenom: "Paid",
    Nom: "$550.00",
    Partie: "PayPal",
  },
  {
    ID: "INV006",
    Prenom: "Pending",
    Nom: "$200.00",
    Partie: "Bank Transfer",
  },
  {
    ID: "INV007",
    Prenom: "Unpaid",
    Nom: "$300.00",
    Partie: "Credit Card",
  },
];

export default function TableTendance() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
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
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
