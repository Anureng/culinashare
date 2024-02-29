"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,

    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Bird, BookMarked, DollarSign } from "lucide-react"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
interface ExampleData {
    // Define the structure of your fetched data
    // Modify this interface to match your actual data structure
    id: number;
    name: string;
    author: string,
    category: string,
    createdAt: string,
    description: string
    image: string,
    price: number
    type: string,
    // Add other properties as needed
}

interface Book {
    author: string;
    category: string;
    createdAt: string;
    description: string;
    id: number;
    image: string;
    name: string;
    price: number;
    reviews: any[]; // Assuming reviews will be an array of any type
    type: string;
    updatedAt: string;
}


interface ExamplePageProps {
    data?: ExampleData[]; // Modify this to match your fetched data structure
    error?: string;
}

const FilterProduct = () => {
    const [searchBook, setSearchBook] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [categories, setCategories] = useState<string[]>([]);
    const handleSearch = (input: string) => {
        setSearchBook(input);
    };

    const { data } = useSession()

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };
    console.log(searchBook);

    const [passedData, setPassedData] = useState<Book[]>()

    const handleData = async () => {
        const res = await fetch("api/Product/CreateProduct");
        const data = await res.json();
        setPassedData(data)
        console.log(data);
    }

    useEffect(() => {
        handleData()
    }, [])





    const filterProductsByNameAndCategory = (input: string, category: string): ExampleData[] => {
        const lowerCaseInput = input.toLowerCase().trim();
        const lowerCaseCategory = category.toLowerCase().trim();
        return passedData?.filter((product) =>
            (product.name.toLowerCase().includes(lowerCaseInput) ||
                product.category.toLowerCase().includes(lowerCaseInput)) &&
            product.category.toLowerCase().includes(lowerCaseCategory)
        ) || [];
    };

    const filteredProducts = filterProductsByNameAndCategory(searchBook, selectedCategory);



    return (
        <div>

            <div className=" flex justify-center item-center mt-6 mb-6">
                <Input onChange={(e) => handleSearch(e.target.value)} value={searchBook} type="email" className=" w-60 rounded-xl border-grey-700  " placeholder="Search..." />
                {
                    data?.user.email ? (
                        <div className="ml-4 flex items-center">
                            <p>Saved</p>
                            <div className="text-black flex  text-xl p-1 ">
                                <Link href={`/Cart`} className='flex'>
                                    <BookMarked />
                                </Link>
                            </div>
                        </div>
                    ) : (
                        ""
                    )
                }

            </div>

            <div className="flex flex-wrap gap-6">
                {
                    filteredProducts.length === 0 ? (
                        <div className="flex flex-col items-center justify-center  w-screen h-96 text-2xl">
                            <p ><Bird size={150} /></p>
                            <p>
                                No Recipe find...({searchBook})
                            </p>
                        </div>
                    ) : (
                        <div className=" flex flex-wrap gap-6">
                            {filteredProducts?.map((el, i) => (
                                <div key={el.id}>
                                    <Link href={`Detail/${el.id}`}>
                                        <Card className="w-[350px]">
                                            <CardHeader>
                                                <CardTitle>{el.name}</CardTitle>
                                                {/* <CardDescription>{el.description}</CardDescription> */}
                                            </CardHeader>
                                            <CardContent>
                                                <Image src={`${el.image}`} alt="Loading..." height={200} width={300} />
                                            </CardContent>
                                            <CardFooter className="flex justify-between">
                                                <Button variant="outline">{el.price}<DollarSign size={16} /></Button>
                                                <Button>Click</Button>
                                            </CardFooter>
                                        </Card>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )
                }

            </div>
        </div>
    )
}




export default FilterProduct