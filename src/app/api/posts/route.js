//import next request and response
import { NextResponse } from 'next/server';

// import prisma client
import prisma from '../../../../prisma/client';

export async function GET() {
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

export async function POST(request) {
    //get all request
    const { title, content } = await request.json();

    //create data post
    const post = await prisma.post.create({
        data: {
            title: title,
            content: content,
        },
    });

    //return response JSON
    return NextResponse.json({
        success: true,
        message: "Post Created Successfully!",
        data: post,
    }, {
        status: 201
    });
}

