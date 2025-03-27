import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('Received form data:', body) // Add logging
    
    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.phone || !body.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Send email
    // Temporary testing version - use this until domain is verified
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',  // Use Resend's test domain
      to: 'isaacchukwuka67@gmail.com',  // Your verified email
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `
    })

    if (error) {
      console.error('Resend API error:', error)
      return NextResponse.json(
        { error: 'Failed to send email: ' + error.message },
        { status: 500 }
      )
    }

    console.log('Email sent successfully:', data)
    return NextResponse.json(data)

  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    )
  }
}