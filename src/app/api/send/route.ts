import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '@/components/emailTemplate'; // Example template import

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyTurnstileToken(token: string): Promise<boolean> {
  const secretKey = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
  
  if (!secretKey) {
    console.error('CLOUDFLARE_TURNSTILE_SECRET_KEY is not set');
    return false;
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
    });

    const result = await response.json();
    return result.success === true;
  } catch (error) {
    console.error('Error verifying Turnstile token:', error);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, organization, subject, message, turnstileToken } = body;

    // Verify Turnstile token
    if (!turnstileToken) {
      return NextResponse.json({ error: 'Turnstile token is required' }, { status: 400 });
    }

    const isValidToken = await verifyTurnstileToken(turnstileToken);
    if (!isValidToken) {
      return NextResponse.json({ error: 'Invalid Turnstile token' }, { status: 400 });
    }

    const response = await resend.emails.send({
      from: 'contact-besmart@resend.dev', // Use your domain or Resend default
      to: 'dennis.rot@besmartcampus.com', // Send to any address submitted from the form
      subject: subject || 'Contact formulier ingevuld',
      react: EmailTemplate({ name, organization, email, message }), // Custom template
    });

    return NextResponse.json({ message: 'Email sent', response }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error sending email', detail: error }, { status: 500 });
  }
}
