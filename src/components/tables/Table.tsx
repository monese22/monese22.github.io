import TableRow, { TableRowData } from './TableRow';

interface TableProps {
  headers: string[];
  rowsData: TableRowData[];
}

export default function Table({ headers, rowsData }: TableProps) {
  return (
    <table className='border-mnWhite mt-2 w-full rounded-lg border border-collapse table-auto'>
      <thead className='text-lg font-semibold border-b'>
        <tr>
          {headers.map((header) => (
            <td className='px-6 py-3' key={header}>
              {' '}
              {header}{' '}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowsData.map((data) => (
          <TableRow key={JSON.stringify(data)} data={data} />
        ))}
      </tbody>
    </table>
  );
}
