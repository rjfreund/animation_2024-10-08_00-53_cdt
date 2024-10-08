// pages/index.js
import Link from 'next/link';

export default function Home()
{
  return (
    <div>
      <h1>Welcome to the Next.js Anime.js Animation!</h1>
      <Link href="/animated">
        Go to Animated Page
      </Link>
    </div>
  );
}
