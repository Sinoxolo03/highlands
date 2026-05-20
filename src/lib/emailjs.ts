// src/lib/emailjs.ts

export const sendEnquiry = async (formData: {
  full_name: string;
  phone_number: string;
  institution: string;
  property_name: string;
  message: string;
}) => {
  try {
    const response = await fetch(
      'https://api.web3forms.com/submit',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
body: JSON.stringify({
  access_key: "0d6a8af5-b473-49eb-a019-2a31835bea0b",

  subject: `New Enquiry - ${formData.property_name}`,

  name: formData.full_name,
  phone: formData.phone_number,
  institution: formData.institution,
  property: formData.property_name,
  message: formData.message,
}),
      }
    );

    const result = await response.json();

    if (result.success) {
      return { success: true };
    } else {
      return { success: false, error: result };
    }
  } catch (error) {
    console.error('Web3Forms Error:', error);
    return { success: false, error };
  }
};