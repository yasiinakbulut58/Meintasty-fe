import foods from './db.json';

export async function GET(request: Request) {
  const data = JSON.stringify(foods);
  const headers = { 'Content-Type': 'application/json' };

  return new Response(data, { headers });
}
