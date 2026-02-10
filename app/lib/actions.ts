'use server'

import { z } from 'zod';
import nodemailer from 'nodemailer';

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


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_PASSWORD,
    },
});

export async function sendEmail(prevStat: State, formData: FormData) {
    if (!process.env.GMAIL_ADDRESS || !process.env.GMAIL_PASSWORD) {
      return { message: 'Email service not configured.' };
    }

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
    const htmlContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
    `;

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_ADDRESS,
      to: process.env.GMAIL_ADDRESS,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: message,
      html: htmlContent,
    });

    return { message: 'Message sent successfully!' };
  } catch (err) {
    console.error('Email send error:', err);

    return { message: 'Failed to send message. Please try again later.' };
  }
}