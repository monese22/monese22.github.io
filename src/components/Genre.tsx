export default function Genre({
  genre,
  className,
}: {
  genre: string;
  className?: string;
}) {
  return (
    <div className={`border text-xs w-28 text-center ${className}`}>
      {genre}
    </div>
  );
}
