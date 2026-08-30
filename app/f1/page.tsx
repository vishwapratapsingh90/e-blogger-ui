import Link from "next/link";

export default function F1() {
  return (
    <>
      <h1>F1 Page</h1>
      <div>
        <Link href={"/f1/f2"}>F2 Page</Link>
        <Link href={"/f3"}>F3 Page</Link>
      </div>
    </>
  );
}
