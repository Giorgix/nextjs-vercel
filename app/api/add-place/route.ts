import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const placeName = searchParams.get('placeName');
  const userName = searchParams.get('userName');

  try {
    if (!placeName || !userName) throw new Error('Pet and owner names required');
    await sql`INSERT INTO Places (Name, UserName) VALUES (${placeName}, ${userName});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const places = await sql`SELECT * FROM Places;`;
  return NextResponse.json({ places }, { status: 200 });
}