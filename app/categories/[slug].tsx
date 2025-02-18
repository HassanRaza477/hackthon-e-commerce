import { GetServerSideProps } from "next";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

type Product = {
    name: string;
    price: number;
    imageUrl: string;
    slug: { current: string };
};

type CategoryPageProps = {
    categoryName: string;
    products: Product[];
};

export default function CategoryPage({ categoryName, products }: CategoryPageProps) {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">{categoryName}</h1>
            <ul className="grid grid-cols-3 gap-6">
                {products.map((product) => (
                    <li key={product.slug.current} className="border p-4 rounded-lg shadow">
                        <img src={product.imageUrl} alt={product.name} width={200} />
                        <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                        <p className="text-gray-600">${product.price}</p>
                    </li>
                ))}
            </ul>
            <Link href="/" className="text-blue-500 mt-4 block">Go Back Home</Link>
        </div>
    );
}

// Fetch category products dynamically
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const categorySlug = params?.slug as string;

    // Fetch category details
    const categoryQuery = `*[_type == "category" && slug.current == $slug][0]`;
    const category = await client.fetch(categoryQuery, { slug: categorySlug });

    if (!category) {
        return { notFound: true };
    }

    // Fetch products in this category
    const productQuery = `*[_type == "product" && category._ref == $categoryId]{
        name, price, "imageUrl": image.asset._ref, slug
    }`;
    const products = await client.fetch(productQuery, { categoryId: category._id });

    return {
        props: { categoryName: category.name, products },
    };
};
