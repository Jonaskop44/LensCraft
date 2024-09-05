import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

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
    const { name, address, phone, email, postcode, city, message } = body;
    const mailData = await transporter.sendMail({
      from: '""' + name + "<>" + name + "@codeflexx.com",
      to: "jonas@codeflexx.com",
      subject: `${name} - Drohne`,
      html: `
      <div style="background-color: #f5f5f5; padding: 20px;">
        <div style="background-color: #fff; padding: 20px; border-radius: 10px;">
          <h1 style="font-size: 24px; font-weight: 400; margin-bottom: 20px;">Kontaktanfrage von ${name}</h1>
          <p style="font-size: 16px; font-weight: 400; margin-bottom: 20px;">Name: ${name}</p>
          <p style="font-size: 16px; font-weight: 400; margin-bottom: 20px;">Adresse: ${address}</p>
          <p style="font-size: 16px; font-weight: 400; margin-bottom: 20px;">Postleizahl: ${postcode}</p>
          <p style="font-size: 16px; font-weight: 400; margin-bottom: 20px;">Wohnort: ${city}</p>
          <p style="font-size: 16px; font-weight: 400; margin-bottom: 20px;">Telefon: ${phone}</p>
          <p style="font-size: 16px; font-weight: 400; margin-bottom: 20px;">Email: ${email}</p>
          <p style="font-size: 16px; font-weight: 400; margin-bottom: 20px;">Nachricht: ${message}</p>
          </div>
          </div>
          `,
    });
    return NextResponse.json(mailData);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
