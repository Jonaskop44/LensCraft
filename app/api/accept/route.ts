import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import axios from "axios";

export async function PATCH(request: Request) {
  try {
    const ip = await axios.get("https://api64.ipify.org?format=json");
    const ipData = await prisma.iP.update({
      where: {
        address: ip.data.ip,
      },
      data: {
        accepted: true,
      },
    });

    return NextResponse.json(ipData, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

//Check if the user has access
export async function GET(request: Request) {
  try {
    const ip = await axios.get("https://api64.ipify.org?format=json");
    const ipData = await prisma.iP.findUnique({
      where: {
        address: ip.data.ip,
      },
    });

    if (ipData && ipData.accepted) {
      return NextResponse.json(ipData, { status: 200 });
    } else {
      return new NextResponse("Unauthorized", { status: 201 });
    }
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
