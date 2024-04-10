import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  //await sql`DROP TABLE Places;`;
  try {
    const result =
      await sql`CREATE TABLE Places ( Name varchar(255), UserName varchar(255) );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}