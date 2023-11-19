import React from "react";
// import Image from "next/image";
// import footer_logo from "../../public/images/footer_logo.png";
// import { CustomBtn } from "@/components/customBtn";
import { Phone } from "lucide-react";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Service from "@/app/components/services";

const Footer = () => {
  return (
<>
    <main className=" flex flex-col gap-6 bg-gray-700  px-6 pt-12 max-md:py-8">
< Service />

    <section className="max-container flex max-lg:flex-col gap-10  pt-10 ">
      <div className="flex flex-col  justify-start w-full gap-4">
      <Link href={"/"}>
          {" "}
          <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-green-800">
  EverGleam <span className="text-primary">Market</span>{" "}
          </h1>{" "}
        </Link>

        <p className="text-white font-normal">
          For over 15 years our focus on elevating the nextCommerce experience has
          allowed our clients to receive all levels of medical care from the
          comfort of home, while providing peace of mind to clients and their
          loved ones.
        </p>
      </div>
      <div className="flex w-full gap-6 justify-center">
        <ul className="text-white gap-3 cursor-pointer space-y-5">
          <li className="font-bold">Services</li>
          <li className="hover:text-primary">Private Duty Nursing</li>
          <li className="hover:text-primary">Home Health Aides</li>
          <li className="hover:text-primary">Chronic Care</li>
          <li className="hover:text-primary">Senior Care</li>
          <li className="hover:text-primary">Pediatric Care</li>
        </ul>

        <ul className="text-white cursor-pointer gap-3 space-y-5">
          <li className="font-bold">COMPANY</li>
          <li className="hover:text-primary" >Blog</li>
          <li className="hover:text-primary">Press</li>
          <li className="hover:text-primary">Careers HIRING!</li>
          <li className="hover:text-primary">Locations</li>
          <li className="hover:text-primary">Contact Us</li>
        </ul>
      </div>
      <div className="w-full   space-y-6">
        <span className="flex gap-2  justify-center">
          {/* <CustomBtn name="REQUEST CARE" /> */}
          <Button variant={"secondary"} >
            REQUEST ORDER
          </Button>
          <Button variant={"destructive"} >
            Complain
          </Button>
          
          
        </span>
        <span className="flex gap-4 justify-center">
          <div className="h-16 w-16 bg-primary hover:bg-primary/80 text-white flex items-center justify-center rounded-xl">
            {<Facebook />}
          </div>
          <div className="h-16 w-16 bg-primary hover:bg-primary/80 text-white flex items-center justify-center rounded-xl">
            {<Instagram />}
          </div>
          <div className="h-16 w-16 bg-primary hover:bg-primary/80 text-white flex items-center justify-center rounded-xl">
            {<Linkedin />}
          </div>
          <div className="h-16 w-16 bg-primary hover:bg-primary/80 text-white flex items-center justify-center rounded-xl">
            {<Youtube />}
          </div>
        </span>
      </div>

    </section>
    <section>

      <hr  className="h-1 w-full my-8 bg-rose-100 " />
      <p className=" w-full flex justify-center text-white items-center padding-x text-center text-sm    ">
      EverGleam Market  is a fully licensed home care services agency (LHCSA) servicing Pakistan, Kings,  Queens, Bronx, Richmond, Nassau,<br /> Suffolk, Westchester and Rockland counties.
        
      </p>
      <p className="w-full flex justify-center text-white items-center  text-center text-sm  my-4">
      © 2023  EverGleam Market. All Rights Reserved. Privacy Policy
      </p>
    </section>
    </main>
   </>
  );
};

export default Footer;