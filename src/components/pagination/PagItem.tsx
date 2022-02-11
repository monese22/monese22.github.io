import { useRouter } from 'next/router';

type PagItemProps = {
  i: number;
  page: number;
};

export default function PageItem({ i, page }: PagItemProps) {
  const router = useRouter();

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push(String(i + 1));
  };

  return (
    <li>
      <button onClick={clickHandler}>{i + 1}</button>
    </li>
  );
}
