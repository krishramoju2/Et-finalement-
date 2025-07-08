import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  // Placeholder static HR contact data (since actual scraping isn't feasible for HR contacts)
  const hrContacts = [
    {
      name: 'Ritika Sharma',
      company: 'TCS',
      email: 'ritika.sharma@tcs.com',
      linkedin: 'https://linkedin.com/in/ritika-sharma-hr'
    },
    {
      name: 'Vikram Iyer',
      company: 'Infosys',
      email: 'vikram.iyer@infosys.com',
      linkedin: 'https://linkedin.com/in/vikram-iyer-hr'
    },
    {
      name: 'Aditi Mehra',
      company: 'Google',
      email: 'aditi.mehra@google.com',
      linkedin: 'https://linkedin.com/in/aditi-mehra-google'
    }
  ];

  return NextResponse.json(hrContacts);
}
