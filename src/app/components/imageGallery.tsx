"use client"
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { useState } from "react";

interface iAppProps {
  images: any;
}

const ImageGallery = ({ images }: iAppProps) => {
  const [bigImage, setBigImage] = useState(images[0]);

 const handleSmallImageClick=(image:any)=>{
    setBigImage(image);
 }
  return (
    <div className="grid gap-4 lg:grid-cols-5">
       <div className="  order-last  gap-4 flex lg:order-none lg:flex-col">
        {images.map((image: any, idx: any) => (
          <div key={idx} className=" overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlForImage(image).url()}
              alt="Photo"
              width={200}
              height={200}
              className="w-full h-full object-cover cursor-pointer object-center"
              onClick={()=>handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>
      <div className="col-span-4 relative overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={urlForImage(bigImage).url()}
          alt="Photo"
          width={500}
          height={500}
          className="w-full h-full object-cover cursor-pointer object-center"
          
        />
        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">sale</span>
      </div>
    </div>
  );
};

export default ImageGallery;
