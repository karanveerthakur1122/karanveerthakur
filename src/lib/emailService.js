import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const CONTACT_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID;
const HIRE_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_HIRE_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export async function sendContactEmail({ name, email, subject, message }) {
  return emailjs.send(SERVICE_ID, CONTACT_TEMPLATE_ID, {
    from_name: name,
    from_email: email,
    subject,
    message,
  }, PUBLIC_KEY);
}

export async function sendHireEmail({ name, email, company, type, duration, startDate, description }) {
  return emailjs.send(SERVICE_ID, HIRE_TEMPLATE_ID, {
    from_name: name,
    from_email: email,
    company: company || 'Not specified',
    type,
    duration,
    start_date: startDate,
    description,
  }, PUBLIC_KEY);
}
