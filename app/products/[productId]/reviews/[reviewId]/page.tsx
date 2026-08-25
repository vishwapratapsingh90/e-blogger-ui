import { notFound, redirect } from "next/navigation";

export default async function ReviewDetail({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  //   const productId = (await params).productId;
  //   const reviewId = (await params).reviewId;
  // Or,
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    // return notFound();
    return redirect("/");
  }

  return (
    <h1>
      Review {reviewId} for Product {productId}
    </h1>
  );
}
