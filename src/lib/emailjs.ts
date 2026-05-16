// src/lib/emailjs.ts
import emailjs from '@emailjs/browser';

// Your EmailJS credentials (replace with your actual values)
const SERVICE_ID = 'service_dk7bgbx';     // e.g., 'service_dk7bgbx'
const TEMPLATE_ID = 'template_v6k9671';   // e.g., 'template_abc123'
const PUBLIC_KEY = 'L2eNVu0CSulfh0rxd';     // Your public key from EmailJS

// Both email addresses that will receive the enquiry
const TO_EMAILS = 'jje@ralwin.co.za, jwdevelopments9@ralwin.co.za';

export const sendEnquiry = async (formData: {
  full_name: string;
  phone_number: string;
  institution: string;
  property_name: string;
  message: string;
}) => {
  try {
    // Add the recipient emails to the template params
    const templateParams = {
      ...formData,
      to_email: TO_EMAILS,
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};