import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function POST(request) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json();
const response = await resend.emails.send({
  from: 'Contact Form <contact@dormaisignsltd.com>',
  to: ['contact@dormaisignsltd.com', 'dormaisigns@gmail.com'], // Array of emails
  replyTo: email,
  subject: `New message from ${firstName} ${lastName}`,
  text: `
    Name: ${firstName} ${lastName}
    Email: ${email}
    Phone: ${phone || 'Not provided'}
    Message: ${message}
  `,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `,
});
    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed to send' }, { status: 500 });
  }
}