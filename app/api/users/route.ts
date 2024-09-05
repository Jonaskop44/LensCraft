import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "w01dce97.kasserver.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, subject } = body;
    const users = await prisma.user.findMany();

    if (users) {
      users.map(async (user) => {
        if (user.active === true) {
          await transporter.sendMail({
            from: '"Codeflexx" <noreply@codeflexx.com>',
            to: user.email,
            subject: subject,
            html: `
          <div style="background-color: #f5f5f5; padding: 20px;">
            <div style="background-color: #fff; padding: 20px; border-radius: 10px;">
              <h1 style="font-size: 24px; font-weight: 400; margin-bottom: 20px;"> ${
                user.email.split("@")[0] +
                " du hast eine neue Nachricht erhalten!"
              }</h1>
              <p style="font-size: 16px; font-weight: 400; margin-bottom: 20px;">${message}</p>
              </div>
              </div>
              `,
          });
        }
      });
    }

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
