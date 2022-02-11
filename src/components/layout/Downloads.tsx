import Table from '../tables/Table';

import { DownloadsType } from '@/types';

const tableHeader = ['server', 'quality', 'size', 'link'];

export default function Downloads({
  downloads,
}: {
  downloads: DownloadsType[];
}) {
  return (
    <div>
      <h4>Download:</h4>
      <Table headers={tableHeader} rowsData={downloads} />
    </div>
  );
}
