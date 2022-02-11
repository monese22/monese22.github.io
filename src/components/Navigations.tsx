import UnstyledLink from './links/UnstyledLink';

// TODO
// this is dummy data for navigation bar, and it must be redesign
const navItems = [
  'Movies',
  'Series',
  'Shorts',
  'Genres',
  'Years',
  'How to Download',
];

export default function Navigations() {
  return (
    <nav className='text-mnWhite/80 text-semibold space-x-6'>
      {navItems.map((nav) => (
        <UnstyledLink
          href={`/${nav.toLowerCase().replace(/ /g, '-')}`}
          key={nav}
          className='font-semibold transition hover:text-white'
        >
          {nav}
        </UnstyledLink>
      ))}
    </nav>
  );
}
