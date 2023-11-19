import Hero from "./components/Hero";
import Newest from "./components/Newest";
import Products from "./components/products";
import { getProducts } from "@/Data/fetchData";
import { simpleFelidProduct } from "@/Data/types";
import { urlForImage } from "../../sanity/lib/image";
import {getHeroImages} from "@/Data/fetchData";

export default async function Home() {
  let data: simpleFelidProduct[] = await getProducts();
    const displayedProducts = data.slice(7,11); // Adjust the range based on your requirements
    const image_data = await getHeroImages();

    // Extract the image URLs from the Promises
    const images = await Promise.all([
      urlForImage(image_data.image1).url(),
      urlForImage(image_data.image2).url(),
    ]);
  return (
    <>
   <Hero {...images} />
  <Newest {...data} />
  <Products {...displayedProducts} />
    </>
  )
}
