import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export default defineEventHandler(async (event) => {
  const email = event.req.url?.split("=")[1];
  console.log(email);
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "jansentim9@gmail.com",
      subject: "Hello world",
      html: `<strong>Hoi ik wil dat je contact met mij opneemt mijn email is ${email}</strong>`,
    });

    return data;
  } catch (error) {
    return { error };
  }
});
