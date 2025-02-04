'use client';
import { addCart } from "@/app/action/actions";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProducts } from "@/sanity/lib/queries";
import { product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Newcard() {
  const [products, setProducts] = useState<product[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: product[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  const handleCart = (e: React.MouseEvent, product: product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1000,
      background: "#1a1a1a",
      color: "#fff",
    });
    addCart(product);
  };

  const toggleShowAll = () => setShowAll(!showAll);
  const displayedProducts = showAll ? products : products.slice(0, 4);

  return (
    <div className="w-full py-12 font-sans px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Discover Our Collection</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our premium selection of products crafted with perfection
        </p>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8">
        {displayedProducts.map((product) => (
          <div
            key={product._id}
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden transform hover:-translate-y-2"
          >
            <div className="relative aspect-square overflow-hidden">
              <Link href={`/newproduct/${product.slug.current}`} className="block">
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name || "Product image"}
                    width={600}
                    height={600}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </Link>
              
              {/* Sale Badge */}
              {product.onSale && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  SALE
                </div>
              )}

              <button
                onClick={(e) => handleCart(e, product)}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/90 text-white px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black font-semibold text-sm uppercase tracking-wider shadow-xl"
              >
                Add to Cart
              </button>
            </div>

            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-bold text-gray-900 truncate">
                <Link 
                  href={`/newproduct/${product.slug.current}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {product.name}
                </Link>
              </h3>
              
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-blue-600">
                  ${product.price.toFixed(2)}
                </p>
                {product.originalPrice && (
                  <p className="text-gray-400 line-through text-lg">
                    ${product.originalPrice.toFixed(2)}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5" />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">(128 reviews)</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {products.length > 3 && (
        <div className="text-center mt-12">
          <button
            onClick={toggleShowAll}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            {showAll ? "Show Less" : "Explore More"}
          </button>
        </div>
      )}
    </div>
  );
}