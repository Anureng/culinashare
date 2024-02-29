"use client"
import { Instagram, Linkedin, ShoppingCart, Twitter } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'
import { signIn, signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
// import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, UserCircle, UserCog } from "lucide-react";
import Link from 'next/link'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Navbar = () => {
    const { data } = useSession()
    const [countData, setCountData] = useState(0)

    const { toast } = useToast()

    const [nameData, setNameData] = useState("")
    const [emailData, setEmailData] = useState("")
    const [passwordData, setPasswordData] = useState("")
    const [roleData, setRoleData] = useState("user")
    const handleLoginData = async () => {
        const res = await signIn("credentials", {
            redirect: false,
            email: emailData,
            password: passwordData,
        });
        if (res?.error) {
            toast({
                title: "Error",
                description: "Invalid Credentials",
            })
        }
        if (res?.ok) {
            console.log(res.ok);
            () => {
                toast({
                    description: "Your message has been sent.",
                })
            }
        }
    }

    console.log(data?.user);









    const handleClickaddData = async () => {
        const res = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({
                email: emailData,
                name: nameData,
                password: passwordData,
                role: roleData
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (res.status === 500) {
            console.log(res.statusText);
        }
        if (res.status === 200) {
            console.log("Registering succesfully login with your credentianls");
            window.location.reload()
        }
    }
    const router = useRouter()
    return (
        <div>

            <div className='bg-gray-200 flex items-center justify-evenly p-3'>
                <div className='text-red-600 font-bold text-xl '>
                    <Link href="/">
                        CulinaShare
                    </Link>
                </div>
                <div className='flex space-x-3'>
                    <Twitter />
                    <Instagram />
                    <Linkedin />
                </div>


                {
                    data?.user.name ? (
                        <div className='flex items-center space-x-4'>


                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar className=" cursor-pointer">
                                        <AvatarImage src={""} alt="@shadcn" />
                                        <AvatarFallback className="text-primary hover:bg-primary hover:text-white  transition-all">
                                            <UserCog className="h-5" />
                                        </AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="mr-6 bg-white">
                                    <DropdownMenuLabel>
                                        <div className="pr-20 pl-4">
                                            <h1 className="font-semibold text-md ">Signed in as</h1>
                                            <h1 className="font-semibold text-md">{data?.user.email}</h1>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <div
                                        onClick={() => {
                                            signOut()
                                        }}
                                    >
                                        <DropdownMenuItem className="hover:!bg-red-500 cursor-pointer hover:!text-white">
                                            <LogOut className="mr-2 h-4 w-4" />
                                            <span>Log out</span>
                                        </DropdownMenuItem>
                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <p>
                                <Link href="/About">
                                    About
                                </Link>
                            </p>
                        </div>
                    ) : (
                        <div className='flex items-center space-x-4'>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline">Log In</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Create Username</DialogTitle>
                                        <DialogDescription>
                                            Make changes to your profile here. Click save when youre done.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        {/* <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="name" className="text-right">
                                                Name
                                            </Label>
                                            <Input type="text" placeholder="name" className="col-span-3" value={nameData} onChange={(e) => setNameData(e.target.value)} />
                                        </div> */}
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="username" className="text-right">
                                                Email
                                            </Label>
                                            {/* <Input id="username" value="@peduarte" /> */}
                                            <Input id="name" value={emailData} className="col-span-3" onChange={(e) => setEmailData(e.target.value)} placeholder="Enter the email" />
                                        </div>

                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="username" className="text-right">
                                                Password
                                            </Label>
                                            {/* <Input id="username" value="@peduarte" /> */}
                                            <Input id="name" value={passwordData} className="col-span-3" onChange={(e) => setPasswordData(e.target.value)} placeholder="Enter the password" />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button onClick={handleLoginData}>Log In</Button>
                                    </DialogFooter>

                                    <DialogFooter className='text-red-600'>
                                        Demo Email :- abc@gmail.com <br />
                                        Demo Password :- 123456
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline">Sign In</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Create Username</DialogTitle>
                                        <DialogDescription>
                                            Make changes to your profile here. Click save when youre done.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="name" className="text-right">
                                                Name
                                            </Label>
                                            <Input type="text" placeholder="name" className="col-span-3" value={nameData} onChange={(e) => setNameData(e.target.value)} />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="username" className="text-right">
                                                Email
                                            </Label>
                                            {/* <Input id="username" value="@peduarte" /> */}
                                            <Input type="email" className="col-span-3" placeholder="email" value={emailData} onChange={(e) => setEmailData(e.target.value)} />
                                        </div>

                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="username" className="text-right">
                                                Password
                                            </Label>
                                            {/* <Input id="username" value="@peduarte" /> */}
                                            <Input className="col-span-3" type="password" placeholder="password" value={passwordData} onChange={(e) => setPasswordData(e.target.value)} />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button onClick={handleClickaddData}>Sign In</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                            {/* <input type="text" placeholder="name" value={nameData} onChange={(e) => setNameData(e.target.value)} />
                            <input type="email" placeholder="email" value={emailData} onChange={(e) => setEmailData(e.target.value)} />
                            <input type="password" placeholder="password" value={passwordData} onChange={(e) => setPasswordData(e.target.value)} />
                            <button onClick={handleClickaddData}>click to add data</button> */}
                            <p>
                                <Link href="/About">
                                    About
                                </Link>
                            </p>
                        </div>
                    )
                }


            </div>
        </div>
    )
}

export default Navbar