import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import axios from "axios";

export async function GET(request: Request) {
  try {
    const data = await prisma.iP.findMany();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const ip = await axios.get("https://api64.ipify.org?format=json");
    const ipData = await prisma.iP.findUnique({
      where: {
        address: ip.data.ip,
      },
    });

    if (!ipData) {
      const location = await axios.get(
        `https://ipinfo.io/json?token=${process.env.IPINFO_TOKEN}`
      );

      const data = await prisma.iP.create({
        data: {
          address: ip.data.ip,
          city: location.data.city,
          region: location.data.region,
          country: location.data.country,
        },
      });
      return NextResponse.json(data, { status: 200 });
    } else {
      return NextResponse.json("IP already exists", {
        status: 200,
      });
    }
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

//Update the updatedAt field
export async function PATCH(request: Request) {
  try {
    const ip = await axios.get("https://api64.ipify.org?format=json");
    const ipData = await prisma.iP.findUnique({
      where: {
        address: ip.data.ip,
      },
    });

    if (ipData) {
      const data = await prisma.iP.update({
        where: {
          address: ip.data.ip,
        },
        data: {
          updatedAt: new Date(),
          views: ipData.views + 1,
        },
      });
      return NextResponse.json(data, { status: 200 });
    } else {
      return NextResponse.json("IP not found", { status: 404 });
    }
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
