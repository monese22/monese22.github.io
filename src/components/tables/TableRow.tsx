import TableData from './TableData';

export interface TableRowData {
  server: string;
  quality: string;
  size: string;
  link: string;
}

interface tableRowProps {
  data: TableRowData;
}

export default function TableRow({ data }: tableRowProps) {
  return (
    <tr>
      {Object.entries(data).map((entry) => (
        <TableData
          key={JSON.stringify(entry)}
          type={entry[0]}
          entry={entry[1]}
        />
      ))}
    </tr>
  );
}
