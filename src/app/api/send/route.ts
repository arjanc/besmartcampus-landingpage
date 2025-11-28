import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '@/components/emailTemplate'; // Example template import

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, organization, subject, message } = body;

    const response = await resend.emails.send({
      from: 'contact-besmart@resend.dev', // Use your domain or Resend default
      to: 'dennis.rot@besmartcampus.nl', // Send to any address submitted from the form
      subject: subject || 'Contact formulier ingevuld',
      react: EmailTemplate({ name, organization, email, message }), // Custom template
    });

    return NextResponse.json({ message: 'Email sent', response }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error sending email', detail: error }, { status: 500 });
  }
}
