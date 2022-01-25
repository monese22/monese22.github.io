export default function Genre({
  genre,
  className,
}: {
  genre: string;
  className?: string;
}) {
  return <div className={className}>{genre}</div>;
}
