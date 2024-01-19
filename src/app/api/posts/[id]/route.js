//import next request and response
import { NextResponse } from 'next/server';

// import prisma client
import prisma from "../../../../../prisma/client";

export async function GET(request, { params }) {
    // get params id
    const id = parseFloat(params.id);

    // get detail post
    const post = await prisma.post.findUnique({
        where: {
            id
        }
    });

    if (!post) {
        //return response JSON
        return NextResponse.json(
            {
                sucess: true,
                message: "Detail Data Post Not Found!",
                data: null,
            },
            {
                status: 404,
            }
        );
    }

    //return response JSON
    return NextResponse.json(
        {
            sucess: true,
            message: "Detail Data Post",
            data: post,
        },
        {
            status: 200,
        }
    );
}