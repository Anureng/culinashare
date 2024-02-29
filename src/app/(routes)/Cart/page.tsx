import Navbar from '@/app/components/Navbar'
import AddCart from "@/app/components/AddCart"
import React from 'react'
import Footer from '@/app/components/Footer';

export interface IParams {
    id: string;
}

const page = async ({ params }: { params: IParams }) => {
    return (
        <div>
            <Navbar />
            <AddCart />
            <Footer />
        </div>
    )
}

export default page