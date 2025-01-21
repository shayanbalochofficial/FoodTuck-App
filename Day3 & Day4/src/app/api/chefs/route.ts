import { NextResponse } from 'next/server';
import data from '@/data/chef.json';

export async function GET() {
  return NextResponse.json(data);
}
