"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Nav2 from "@/components/Nav2";
import { use } from "react"; // Import React's `use` function

// Type for the product data
type Product = {
  name: string;
  price: number;
  imageUrl: string;
  originalPrice?: number;
  slug: string;
  description: string;
};

// Fetch product based on slug
async function getProduct(slug: string): Promise<Product | null> {
  const query = `*[_type == "food" && slug.current == $slug][0] {
    name,
    price,
    description,
    "imageUrl": image.asset->url,
    originalPrice,
    "slug": slug.current
  }`;
  const product = await client.fetch(query, { slug });
  return product;
}

// Component Props interface
interface Props {
  params: Promise<{ slug: string }>; // Note: `params` is now a Promise
}

const ProductPage: React.FC<Props> = ({ params }) => {
  const [product, setProduct] = useState<Product | null>(null);

  // Unwrap `params` using `use`
  const unwrappedParams = use(params);

  useEffect(() => {
    if (unwrappedParams?.slug) {
      const fetchProduct = async () => {
        const productData = await getProduct(unwrappedParams.slug);
        setProduct(productData);
      };

      fetchProduct();
    }
  }, [unwrappedParams]); // Re-run effect when `unwrappedParams` changes

  if (!product) {
    return <div>Product not found</div>; // Handle the case where no product is found
  }

  return (
    <>
      <Nav2 />
      <div className="max-w-4xl mx-auto p-6 my-10 bg-white text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image Section */}
          <div>
            <div className="grid grid-cols-4 gap-2">
              {[product.imageUrl, product.imageUrl, product.imageUrl, product.imageUrl].map(
                (img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                )
              )}
            </div>
            <div className="mt-4">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Product Details Section */}
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <div className="text-lg font-bold mt-4">
              <span className="text-green-600">${product.price}</span>
              {product.originalPrice && (
                <span className="line-through text-gray-500 ml-2">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <p className="text-yellow-500 mt-2">★★★★★ 5 rating | 22 Reviews</p>

            <p className="mt-4 text-gray-600">
              <strong>Category:</strong> Pizza <br />
              <strong>Tag:</strong> Our Shop
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
