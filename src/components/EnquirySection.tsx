// src/components/EnquirySection.tsx
import { useState } from 'react';
import { sendEnquiry } from '@/lib/emailjs';
import { Button } from '@/components/ui/button';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

const EnquirySection = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    phone_number: '',
    institution: '',
    property_name: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: '' });

    const result = await sendEnquiry(formData);

    if (result.success) {
      setStatus({
        type: 'success',
        message: '✅ Enquiry sent successfully! We will get back to you soon.',
      });
      // Reset form
      setFormData({
        full_name: '',
        phone_number: '',
        institution: '',
        property_name: '',
        message: '',
      });
    } else {
      setStatus({
        type: 'error',
        message: '❌ Failed to send enquiry. Please try again or contact us directly.',
      });
    }

    setIsLoading(false);

    // Clear status message after 5 seconds
    setTimeout(() => {
      setStatus({ type: null, message: '' });
    }, 5000);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Send Us an Enquiry
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our properties? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-card rounded-2xl shadow-xl border border-border/50 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="full_name" className="block text-sm font-medium mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone_number" className="block text-sm font-medium mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="+27 67 590 2019"
              />
            </div>

            {/* Institution */}
            <div>
              <label htmlFor="institution" className="block text-sm font-medium mb-2">
                Institution / University <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="institution"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="e.g., Nelson Mandela University"
              />
            </div>

            {/* Property Interested In */}
            <div>
              <label htmlFor="property_name" className="block text-sm font-medium mb-2">
                Property Interested In <span className="text-red-500">*</span>
              </label>
              <select
                id="property_name"
                name="property_name"
                value={formData.property_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                <option value="">Select a property...</option>
                <option value="Ralwin">Ralwin - 4 Western Road, Central</option>
                <option value="Highlands">Highlands - 2 Western Road, Central</option>
                <option value="303 Govan Mbeki">303 Govan Mbeki Road</option>
                <option value="Not sure / All properties">Not sure / All properties</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your requirements, preferred move-in date, budget, etc..."
              />
            </div>

            {/* Status Message */}
            {status.type && (
              <div
                className={`p-4 rounded-lg flex items-center gap-3 ${
                  status.type === 'success'
                    ? 'bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800'
                    : 'bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800'
                }`}
              >
                {status.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Enquiry
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Alternative Contact Info */}
        <div className="text-center mt-8 text-muted-foreground">
          <p className="text-sm">
            Prefer to call? Reach us at{' '}
            <a href="tel:+27675902019" className="text-primary hover:underline">
              +27 67 590 2019
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;