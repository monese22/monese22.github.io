import { DownloadsType } from '@/lib/posts';

import Table from '../tables/Table';

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
