//import next request and response
import { NextResponse } from 'next/server';

// import prisma client
import prisma from '../../../../prisma/client';

export async function GET(){
    // get all posts
    const posts = await prisma.post.findMany();

    // return json
    return NextResponse.json({
        succes: true,
        message: "List data posts",
        data: posts
    }, {
        status: 200
    });
}