
import client from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { name, category, image, price, description } = await request.json();

        // Check if the provided productId exists before creating the review

        const newReview = await client.product.create({
            data: {
                name, category, image, price, description
            }
        });

        return NextResponse.json(newReview, { status: 201 });
    } catch (error) {
        console.error("Error creating review:", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}

export async function GET(request: Request) {
    try {


        // Check if the provided productId exists before creating the review

        const newReview = await client.product.findMany()

        return NextResponse.json(newReview, { status: 201 })
    } catch (error) {
        console.error("Error creating review:", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}