import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const Products = (data:any) => {
  // Got object as the parameter, converted in the array and stored it in the displayedProducts
    const displayedProducts = Object.values(data);
  
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Most Popular products
          </h2>

          <Link
            className="text-primary flex items-center gap-x-1 "
            href={"/allProducts"}
          >
            See All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {
          displayedProducts.map((product:any, index:any)=>(
            <div key={index} className="group relative">
             <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
              <Image src={product.images} alt="Product Image" className="w-full h-full object-cover object-center lg:h-full lg:w-full" width={300} height={300}/>
             </div>
             <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-600  ">
                  <Link href={`/product/${product.slug}`}>
                  {product.name}
                  </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.categoryName}</p>
              </div>
              <p className="text-sm font-semibold text-gray-900">${product.price}</p>

             </div>
            </div>
          ))
        }

        </div>
      </div>
    </div>
  );
};

export default Products;
