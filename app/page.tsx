import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome Home!</h1>
      <div role="navigation">
        <Link href="/blog">Blog</Link>
        <Link href="/products">Products</Link>
        <Link href="/articles/breaking-news-123?lang=en">English Article</Link>
        <Link href="/articles/breaking-news-123?lang=fr">French Article</Link>
      </div>
    </>
  );
}
