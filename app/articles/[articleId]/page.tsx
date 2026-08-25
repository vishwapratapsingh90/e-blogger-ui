"use client";

import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  //   const { articleId } = await params;
  //   const { lang = "en" } = await searchParams;
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);

  return (
    <>
      <div>
        <h1>News article {articleId}</h1>
        <p>Reading in language {lang}</p>
      </div>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </>
  );
}
