'use server'

import { z } from 'zod';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const ContactFormSchema = z.object({
  name: z.string().min(3).max(35),
  email: z.email(),
  message: z.string().min(3)
});

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string | null;
};

export async function sendEmail(prevStat: State, formData: FormData) {
    const validatedFields = ContactFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to get in contact.',
        };
    }

    const { name, email, message } = validatedFields.data;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_ADDRESS,
            pass: process.env.GMAIL_PASSWORD,
        },
    });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_ADDRESS,
      to: process.env.GMAIL_ADDRESS,
      subject: `Message from ${name} (${email})`,
      text: message,
    });

    return { message: 'Message sent successfully!' };
  } catch (err) {
    return { message: 'Failed to send message.' };
  }
}