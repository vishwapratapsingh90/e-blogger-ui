import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default function blog() {
  return <h1>Blog</h1>;
}
