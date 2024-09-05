import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function GET(
  request: Request,
  params: { params: { id: string } }
) {
  try {
    const id = params.params.id;
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      return NextResponse.json("User not found", { status: 404 });
    } else {
      return NextResponse.json(user, { status: 200 });
    }
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(
  request: Request,
  params: { params: { id: string } }
) {
  try {
    const id = params.params.id;
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (user?.active) {
      await prisma.user.update({
        where: {
          id: id,
        },
        data: {
          active: false,
          lastAction: new Date(),
        },
      });
    } else {
      await prisma.user.update({
        where: {
          id: id,
        },
        data: {
          active: true,
          lastAction: new Date(),
        },
      });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
