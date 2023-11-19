
// import { CustomBtn } from '@/components/customBtn';
import { Button } from '@/components/ui/button';
import { LucideShoppingCart } from 'lucide-react';
import React from 'react';

const ECommerceHeader = () => {
  return (
    <section className='flex justify-around max-lg:flex-col container z-10 -mt-48 max-md:t-9 rounded-xl p-16 max-lg:p-8 padding-xl shadow-2xl shadow-black w-full h-full bg-gray-200 border-t-8 border-blue-500'>
      <div className='space-y-2 flex flex-col justify-center lg:p-4'>
        <p className='text-sm font-bold text-red-500'>DISCOVER OUR PRODUCTS</p>
        <h1 className='text-4xl max-md:text-xl w-full font-bold text-[#006887]'>
          Explore Our Amazing Selection
        </h1>
        <p className='text-xl max-md:text-sm text-[#6798a7] w-full'>
          Find high-quality products that suit your needs and lifestyle. <br/> Shop with confidence and enjoy the best shopping experience.
        </p>
      </div>
      <div className='flex justify-end items-center  pt-1 '>
        <Button className='rounded-none border-r-8 border-gray-700'><LucideShoppingCart className='mx-1'/> Shop Now</Button>
      </div>
    </section>
  );
}

export default ECommerceHeader;
