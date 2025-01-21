import { NextResponse } from 'next/server';
import data from '@/data/food.json';

export async function GET() {
  return NextResponse.json(data);
}
