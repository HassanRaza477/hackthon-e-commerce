import Link from "next/link";
import { client } from "@/sanity/lib/client";
type Product = {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

async function getProducts(category: string) {
  const query = `*[_type == "product" && category match $category]{
    _id,
    name,
    price,
    "image": image.asset->url,
    category
  }`;

  const products: Product[] = await client.fetch(query, { category });

  console.log(`Fetched Products for ${category}:`, products);

  return products;
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const products = await getProducts(params.category);

  if (products.length === 0) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">{params.category}</h1>
        <p className="text-red-500">No products found in {params.category} category.</p>
        <Link href="/" className="text-blue-500 mt-4 block">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 capitalize">{params.category}</h1>
      <ul className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <li key={product._id} className="border p-4 rounded-lg shadow">
            <img src={product.image} alt={product.name} width={200} />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
          </li>
        ))}
      </ul>
      <Link href="/" className="text-blue-500 mt-4 block">Go Back Home</Link>
    </div>
  );
}
