export interface TableDataProps {
  type?: string;
  entry: string;
}

export default function TableData({ type, entry }: TableDataProps) {
  return type === 'link' ? (
    <td className='px-6 py-3'>
      <a href={entry} className='text-blue-400'>
        Download
      </a>
    </td>
  ) : (
    <td className='px-6 py-3'>{entry}</td>
  );
}
