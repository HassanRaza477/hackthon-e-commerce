import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { product } from "@/types/products"
import { groq } from "next-sanity"
import Image from "next/image"
interface ProductPageProps {
    params: Promise<{ slug: string }>

}
async function getProduct(slug: string): Promise<product> {

    return client.fetch(
        groq`*[_type== "product" && slug.current == $slug][0]{
        _id,
        name,
        _type,
        image,
        price,
        description,
        quantity,
        features,
        tags,
        }`, { slug }
    )
}

export default async function newProduct({ params }: ProductPageProps) {

    const { slug } = await params;
    const product = await getProduct(slug)
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Image Section */}
                    <div className="aspect-square flex justify-center items-center">
                        {product.image && (
                            <Image
                                src={urlFor(product.image).url()}
                                alt={product.name}
                                width={500}
                                height={500}
                                className="rounded-lg shadow-md"
                            />
                        )}
                    </div>

                    {/* Product Details Section */}
                    <div className="flex flex-col gap-6 py-9">
                        <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
                        <p className="text-2xl font-semibold text-gray-700">Price: ${product.price}</p>
                        <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
                        <p className="text-lg text-gray-600">
                            <span className="font-semibold">Quantity:</span> {product.quantity}
                        </p>
                        <p className="text-lg text-gray-600">
                            <span className="font-semibold">Features:</span> {product.features}
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}