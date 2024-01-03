import { useReactTable } from "@tanstack/react-table";
import data from "../assets/MOCK_DATA.json";

function simpleTable() {
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Lastname",
      accessorKey: "lastname",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Country",
      accessorKey: "country",
    },
    {
      header: "Day of Birth",
      accessorKey: "dayOfBirth",
    },
  ];

  const table = useReactTable({ data, columns });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>{header.column.columnDef.header}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          <tr>
            <td>1</td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td>id</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default simpleTable;
