type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `https://fakestoreapi.com/products/${id}`
  );

  const product: Product = await response.json();

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
        
        <img
          src={product.image}
          alt={product.title}
          className="h-64 mx-auto object-contain"
        />

        <h1 className="text-3xl font-bold text-black mt-6">
          {product.title}
        </h1>

        <p className="text-green-700 text-2xl font-bold mt-4">
          ${product.price}
        </p>

        <p className="text-black mt-4">
          {product.description}
        </p>

        <p className="text-blue-700 font-bold mt-4">
          Product ID: {product.id}
        </p>

      </div>
    </div>
  );
}