"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const ShoppingCartModal = () => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout
  } = useShoppingCart();

  async function handleCheckoutClick(event: any) {
    event.preventDefault();
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log("result");
      }
    } catch (error) {
      console.log(error);
    }
  }
 

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <span className="flex flex-col justify-center items-center gap-4 py-10">
                  <ShoppingBag size={50} />
                  <h1 className="font-bold text-2xl text-gray-600 ">
                    Shopping Cart Empty
                  </h1>
                </span>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6 ">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md  border-gray-200">
                        <Image
                          src={entry.image as string}
                          alt="Product Image"
                          height={100}
                          width={100}
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3> {entry.name}</h3>
                            <p className="ml-4">${entry.price}</p>
                          </div>
                          <p className="text-sm font-gray-500 mt-1  line-clamp-2">
                            {entry.description}
                          </p>
                        </div>
                        <div className=" flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">QTY: {entry.quantity}</p>
                          <div className="flex ">
                            <button
                              type="button"
                              className="font-medium text-primary hover:text-primary/80"
                              onClick={() => removeItem(entry.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          <div className="border-t border-gray-200  py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>$ {totalPrice}</p>
            </div>
            <p className="mt-0 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout
            </p>
            <div className="mt-6 ">
              <Button className="w-full " onClick={handleCheckoutClick} > Checkout </Button>
            </div>
            <div className="mt-6 flex justify-center items-center text-sm text-gray-500">
              <p>
                OR{" "}
                <button
                  type="button"
                  className="font-medium text-primary hover:text-primary/80"
                  onClick={() => handleCartClick()}
                >
                  Continue Shopping
                </button>{" "}
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartModal;
