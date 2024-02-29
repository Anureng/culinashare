"use client"
import { getBooksFromLocalStorage } from '@/libs/localStorage';
import React, { useEffect, useState } from 'react'
import { signOut, useSession } from "next-auth/react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from 'next/image';
import { Bird } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
interface Book {
    author: string;
    category: string;
    createdAt: string;
    description: string;
    id: string;
    image: string;
    name: string;
    price: number;
    type: string;
    updatedAt: string;
}

interface DetailData {
    param: string;
}

const AddCart = () => {
    const { data: sessionData } = useSession()

    const [productData, setProductData] = useState<Book[]>([])

    const [checingData, setCheckingData] = useState("")

    const handleProductData = async () => {
        try {
            const data = await fetch('api/Product/AddToCart');
            const getData = await data.json();

            const updatedProducts = await Promise.all(
                getData.map(async (el: any) => {
                    // Check if userId matches the user's id from the session
                    if (el.userId === sessionData?.user.id) {
                        try {
                            const productResponse = await fetch(`api/Product/UpdateProduct/${el.productId}`);
                            const ProductData = await productResponse.json();
                            setCountData((prevCount) => prevCount + 1);

                            return ProductData; // Return the updated product details
                        } catch (error) {
                            console.error(`Error fetching product details: ${error}`);
                            // Handle the error as needed
                        }
                    } else {
                        console.log("No product in the cart for this user");
                        return null; // Skip this product in the mapping
                    }
                })
            );

            // Filter out null values (products not in the cart for this user)
            const filteredProducts = updatedProducts.filter((product) => product !== null);
            setProductData(filteredProducts); // Update state with the updated product data
        } catch (error) {
            console.error(`Error fetching cart data: ${error}`);
            // Handle the error as needed
        }
    };







    const [countData, setCountData] = useState(0)
    const addToCart = async () => {
        try {
            const fetchData = await fetch(`api/Product/AddToCart`)
            const dataFrom = await fetchData.json()
            console.log(dataFrom);

            if (sessionData?.user.id === dataFrom[0].userId) {
                // console.log(dataFrom);
                setCountData(dataFrom.length)
                // console.log(countData);
            }
            else {
                setCountData(0)
            }
        } catch (error) {
            console.log(error);

        }

    }

    console.log(countData);
    console.log(sessionData?.user);




    useEffect(() => {
        handleProductData()
        // addToCart()
    })

    return (
        <div className='p-4  rounded-xl'>

            {countData === 0 ? (
                <div className="flex flex-col items-center justify-center  w-screen h-96 text-2xl">
                    <p ><Bird size={150} /></p>
                    <p>
                        No Item in the Saved...
                    </p>
                </div>
            ) : (
                <div className='flex flex-wrap gap-6'>
                    {productData.map((el) => (
                        <div key={el?.id} className='flex '>
                            <Card className="w-[350px]">
                                <CardHeader>
                                    <CardTitle>Recipe Details</CardTitle>
                                    <CardDescription>{el?.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <img src={el?.image} />
                                    <form>
                                        <div className="grid w-full items-center gap-4">
                                            <div className="flex flex-col space-y-1.5">

                                                {el?.name}
                                            </div>
                                            <div className="flex flex-col space-y-1.5">
                                                <Label >{el?.category}</Label>
                                            </div>
                                        </div>
                                    </form>
                                </CardContent>
                                <CardFooter className="flex justify-between">

                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default AddCart