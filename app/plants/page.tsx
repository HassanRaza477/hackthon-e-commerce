import Link from "next/link";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string | null;
};

async function getProducts() {
  const res = await fetch("https://hackathon-apis.vercel.app/api/products", {
    cache: "no-store", // Ensures fresh data every time
  });
  const allProducts: Product[] = await res.json();

  console.log("Fetched Products:", allProducts); // Debugging: Check API response

  return allProducts.filter(
    (product) =>
      typeof product.category === "string" &&
      product.category.toLowerCase().includes("cutlery") // Using includes() instead of ===
  );
}

export default async function CutleryPage() {
  const products = await getProducts();

  if (products.length === 0) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Cutlery</h1>
        <p className="text-red-500">No cutlery items available.</p>
        <Link href="/" className="text-blue-500 mt-4 block">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Cutlery</h1>
      <ul className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded-lg shadow">
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
