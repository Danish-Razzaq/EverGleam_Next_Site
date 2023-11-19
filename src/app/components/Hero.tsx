import Image from "next/image";
import Link from "next/link";


const Hero = (image:any) => {
 const images:any = Object.values(image);
// console.log(images)
  return (
    <section className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
      {/* Left side of Hero section */}
      <div className="mb-8 max-lg:flex-wrap flex justify-between md:mb-16">
        <div className="mb-6 w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/2 lg:pb-24 lg:pt-40">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:text-6xl">
            Top <span className=" bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-500">Fashion</span> for a top <span className=" bg-clip-text text-transparent bg-gradient-to-b from-primary to-green-500">price</span>!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            We sell only most exclusive and high quality products for you.We are
            the best so come and shop with us.
          </p>
        </div>
        <div className="mb-12 pt-7 max-md:pt-3 flex w-full md:mb-16 lg:2/3">
          <div className="relative top-12 left-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={images[0]}
              alt="Hero Photo"
              className="w-full h-full object-cover object-center"
              priority
              width={255}
              height={300}
            />
          </div>
          <div className=" overflow-hidden rounded-lg bg-gray-100 shadow-lg ">
            <Image
              src={images[1]}
              alt="Hero Photo"
              className="w-full h-full object-cover object-center"
              priority
              width={400}
              height={400}
            />
          </div>
        </div>
        </div>
    
         {/* Right side of Hero section */}
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
      <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
      <Link href="/Men" className="flex w-1/3 items-center justify-center text-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-slate-200">Men</Link>
      <Link href="/Women" className="flex w-1/3 items-center justify-center text-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-slate-200">Women</Link>
      <Link href="/Teens" className="flex w-1/3 items-center justify-center text-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-slate-200">Teens</Link>
      </div>
      </div>
    </section>
  );
};
export default Hero;
