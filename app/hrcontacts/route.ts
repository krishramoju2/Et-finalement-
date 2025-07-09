// Simulated HR contacts (in place of live scraping for now)
const hrContacts = [
  { name: 'Anjali Rao', company: 'Infosys', email: 'anjali.rao@infosys.com' },
  { name: 'Rahul Sharma', company: 'TCS', email: 'rahul.sharma@tcs.com' },
  { name: 'Meera Kapoor', company: 'Wipro', email: 'meera.kapoor@wipro.com' },
  { name: 'Sanjay Gupta', company: 'Google', email: 'sanjay.gupta@google.com' },
];

export async function GET() {
  return new Response(JSON.stringify(hrContacts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
