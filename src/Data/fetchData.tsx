import { client } from "../../sanity/lib/client";

const getHeroImages = async () => {
  const query = `*[_type == "heroImage"][0]`;
  const data = await client.fetch(query);
  return data;
};

const getProducts = async () => {
  const query =`*[_type == "product"] | order(_createdAt desc){
        _id,
        price,
        name,
        "slug":slug.current,
        "categoryName":category->name,
      "images":images[0].asset->url,
      }`;
  const data = await client.fetch(query);
  return data;
};

const getSingleProduct = async (slug: string) => {
  try {
    const query = `*[_type == "product" && slug.current == "${slug}"][0]{
        _id,
        price,
        price_id,
        images,
        name,
        description,
        "slug": slug.current,
        "categoryName": category->name,
    }`;

    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error; // Rethrow the error to be handled elsewhere
  }
};


const categoryItems = async(category:string)=>{
  const query = `*[_type == "product" && category->name =="${category}"]{
  _id,
  price,
  name,
  "slug":slug.current,
  "categoryName":category->name,
  "images":images[0].asset->url,
  }`;
  
  const data = await client.fetch(query);
    return data;
  
};

const categoryAllItems = async(category:string)=>{
  const query = `*[_type == "product"]{
  _id,
  price,
  name,
  "slug":slug.current,
  "categoryName":category->name,
  "images":images[0].asset->url,
  }`;
  
  const data = await client.fetch(query);
    return data;
  
};
 

export { getProducts, getHeroImages ,getSingleProduct ,categoryItems,categoryAllItems};
 

