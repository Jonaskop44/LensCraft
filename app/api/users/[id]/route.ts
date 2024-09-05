import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function PATCH(
  request: Request,
  params: { params: { id: string } }
) {
  try {
    const id = params.params.id;

    const currentUser = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!currentUser) {
      return new NextResponse("User not found", { status: 404 });
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        active: !currentUser.active,
      },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  params: { params: { id: string } }
) {
  try {
    const id = params.params.id;

    const deletedUser = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(deletedUser, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

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
      return new NextResponse("User not found", { status: 404 });
    }

    return NextResponse.json(String(user.id), { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
