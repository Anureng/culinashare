import client from "@/libs/prismadb";
import { NextResponse } from "next/server";



export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {

        // Fetching the main entity (e.g., User) by its ID and including related data
        const entity = await client.product.findUnique({
            where: {
                id: params.id // Find the entity by its ID
            },
            include: {
                // Include related models (e.g., orders, details, etc.) as needed

                reviews: true,
            }
        });

        if (!entity) {
            return new NextResponse("Entity not found", { status: 404 });
        }

        return NextResponse.json(entity, { status: 200 });
    } catch (error) {
        console.error("Error fetching entity data:", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}