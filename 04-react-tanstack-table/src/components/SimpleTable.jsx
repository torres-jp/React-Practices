import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import data from "../assets/MOCK_DATA.json";
import dayjs from "dayjs";

function simpleTable() {
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "My Id",
    },
    {
      header: 'Nombre y Apellido',
      accessorFn: 
    },
    // {
    //   header: "Name",
    //   accessorKey: "name",
    //   footer: "My Name",
    // },
    // {
    //   header: "Lastname",
    //   accessorKey: "lastname",
    //   footer: "My LastName",
    // },
    {
      header: "Email",
      accessorKey: "email",
      footer: "My Email",
    },
    {
      header: "Country",
      accessorKey: "country",
      footer: "My Country",
    },
    {
      header: "Day of Birth",
      accessorKey: "dateOfBirth",
      footer: "My Dayofbirth",
      cell: (info) => dayjs(info.getValue()).format("DD/MM/YYYY"), 
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((footer) => (
                <th key={footer.id}>
                  {flexRender(
                    footer.column.columnDef.footer,
                    footer.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}

export default simpleTable;
