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
    const { email } = body;
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      const emailData = await prisma.user.create({
        data: {
          email: email,
          active: true,
        },
      });

      const name = email.split("@")[0];
      const link = emailData.id;

      await transporter.sendMail({
        from: '"Codeflexx" <noreply@codeflexx.com>',
        to: email,
        subject: "Newsletter abonniert",
        html: `
        <div style="background-color: #f5f5f5; padding: 20px;">
          <div style="background-color: #fff; padding: 20px; border-radius: 10px;">
            <h1 style="font-size: 24px; font-weight: 400; margin-bottom: 20px;">Willkommen ${name}</h1>
            <p style="font-size: 16px; font-weight: 400; margin-bottom: 20px;">Sie haben erfolgreich die Newsletter von NAME abonniert. Hab jetzt bekommen Sie alle Neuigkeiten rund um NAME direkt in Ihr Postfach. Wenn Sie den Newsletter nicht mehr erhalten möchten, können Sie sich jederzeit abmelden. Dazu klicken Sie einfach auf den Abmelden-Link in der Fußzeile der E-Mail.</p>
            <span style="font-size: 16px; font-weight: 400; margin-bottom: 20px;">Zum Kündigen der Newsletter hier <a href="http://localhost:3000/status/${link}">klicken</a></span>
            </div>
            </div>
            `,
      });

      return NextResponse.json(emailData, { status: 200 });
    } else if (user.active) {
      return new NextResponse("User is already registered", {
        status: 202,
      });
    } else {
      const emailData = await prisma.user.update({
        where: {
          email: email,
        },
        data: {
          active: true,
        },
      });

      await transporter.sendMail({
        from: '"Codeflexx" <noreply@codeflexx.com>',
        to: email,
        subject: "Email Adresse aktivieren",
        text: "",
      });

      return NextResponse.json(emailData, { status: 200 });
    }
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
