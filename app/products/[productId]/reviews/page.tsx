export default async function Reviews({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return <h1>Product {productId} reviews</h1>;
}
