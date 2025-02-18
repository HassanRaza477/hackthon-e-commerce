import { GetServerSideProps } from "next";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
type Category = {
    name: string;
    slug: { current: string };
};

type CategoriesPageProps = {
    categories: Category[];
};

export default function CategoriesPage({ categories }: CategoriesPageProps) {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Product Categories</h1>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <li key={category.slug.current} className="border p-4 rounded-lg shadow">
                        <Link href={`/categories/${category.slug.current}`} className="text-lg text-blue-500">
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Fetch all categories from Sanity
export const getServerSideProps: GetServerSideProps = async () => {
    const query = `*[_type == "category"]{name, slug}`;
    const categories = await client.fetch(query);

    return {
        props: { categories },
    };
};
