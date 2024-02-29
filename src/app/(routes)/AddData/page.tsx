"use client"
import React, { ChangeEvent, useState } from 'react'
import { CldUploadButton, CloudinaryUploadWidgetResults } from 'next-cloudinary';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
const CreateProduct = () => {

    const [imageUrl, setImageUrl] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const [description, setDescription] = useState<string>("")
    const [type, setType] = useState<string>("")


    const handleUploadImage = (result: CloudinaryUploadWidgetResults) => {
        const info = result.info as object;
        if ("public_id" in info && "secure_url" in info) {
            setImageUrl(info.secure_url as string)
        }
    }

    const handleAddData = async () => {
        try {
            const res = await fetch("/api/Product/CreateProduct", {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    category: category,
                    image: imageUrl,
                    price: price,
                    description: description,
                    video: type,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(res.json());
        } catch (error) {
            console.log(error);
        }
    }

    const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value; // Get the input value as a string
        const parsedValue = parseFloat(value); // Convert the string to a number
        setPrice(parsedValue)
    };


    return (
        <div className='flex lg:items-center lg:justify-center'>
            {/* <Input type="text" placeholder='enter name' value={name} onChange={(e) => setName(e.target.value)} />
            <Input type="text" placeholder='enter category' value={category} onChange={(e) => setCategory(e.target.value)} />
            <CldUploadButton uploadPreset="qlvvng0p" onUpload={handleUploadImage} >
                Click to upload
            </CldUploadButton>
            <Input type="number" placeholder='enter price' value={price} onChange={handlePriceChange} />
            <Input type="text" placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)} />
            <Input type="text" placeholder='type' value={type} onChange={(e) => setType(e.target.value)} />
            <Button onClick={handleAddData}>click to add data</Button> */}

            <Card className="p-4 border  lg:w-2/5">
                <CardHeader>
                    <CardTitle>Product Information</CardTitle>
                    <CardDescription>Enter the details of your product below</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label className="text-sm" htmlFor="name">
                            Name
                        </Label>
                        <Input type="text" placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="grid gap-2">

                        <div className="grid gap-2">
                            <Label className="text-sm" htmlFor="price">
                                Category
                            </Label>
                            <Input type="text" placeholder='Enter category' value={category} onChange={(e) => setCategory(e.target.value)} />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label className="text-sm" htmlFor="price">
                            Price
                        </Label>
                        <Input type="number" placeholder='enter price' value={price} onChange={handlePriceChange} />
                    </div>
                    <div className="grid gap-2">
                        <Label className="text-sm" htmlFor="images">
                            Images
                        </Label>
                        <CldUploadButton uploadPreset="qlvvng0p" onUpload={handleUploadImage} >
                            <Input accept="image/*" className="h-10" id="images" multiple type="file" />
                        </CldUploadButton>
                    </div>
                    <div className="grid gap-2">
                        <Label className="text-sm" htmlFor="tags">
                            Video
                        </Label>
                        <Input type="text" placeholder='Enter URL' value={type} onChange={(e) => setType(e.target.value)} />
                    </div>
                    <div className="grid gap-2">
                        <Label className="text-sm" htmlFor="notes">
                            Description
                        </Label>
                        <Textarea placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="ml-auto" onClick={handleAddData}>Add Data</Button>
                </CardFooter>
            </Card>

            {/* <div className="hidden lg:block">
                <img className=" h-screen" src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D' alt='Loading...' />
            </div> */}
        </div>
    )
}

export default CreateProduct