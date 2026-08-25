// export default function ProductDetails() {
//     return <h1>Product Details</h1>;
// }

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return <h1>Details about product {productId}</h1>;
}
