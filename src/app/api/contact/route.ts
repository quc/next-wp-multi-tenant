import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 30;

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateContactData(data: ContactFormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.firstName || data.firstName.trim().length === 0) {
    errors.push("First name is required");
  } else if (data.firstName.trim().length < 2) {
    errors.push("First name must be at least 2 characters long");
  }

  if (!data.lastName || data.lastName.trim().length === 0) {
    errors.push("Last name is required");
  } else if (data.lastName.trim().length < 2) {
    errors.push("Last name must be at least 2 characters long");
  }

  if (!data.email || data.email.trim().length === 0) {
    errors.push("Email is required");
  } else if (!validateEmail(data.email.trim())) {
    errors.push("Please provide a valid email address");
  }

  if (!data.message || data.message.trim().length === 0) {
    errors.push("Message is required");
  } else if (data.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters long");
  } else if (data.message.trim().length > 1000) {
    errors.push("Message must be no more than 1000 characters long");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();
    
    const { firstName, lastName, email, message } = requestBody;
    
    const contactData: ContactFormData = {
      firstName: firstName?.trim() || "",
      lastName: lastName?.trim() || "",
      email: email?.trim() || "",
      message: message?.trim() || ""
    };

    const validation = validateContactData(contactData);
    
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: validation.errors
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! We'll get back to you soon.",
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your request",
        error: (error as Error).message,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      success: false,
      message: "Method not allowed. Use POST to submit contact form."
    },
    { status: 405 }
  );
}
