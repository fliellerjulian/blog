import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ResearchPaper } from '@/types/research';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const limit = parseInt(searchParams.get('limit') || '50');
    const skip = parseInt(searchParams.get('skip') || '0');

    const client = await clientPromise;
    const db = client.db('research_blog');
    const collection = db.collection<ResearchPaper>('papers');

    let query = {};
    
    if (search) {
      query = {
        $or: [
          { title: { $regex: search, $options: 'i' } },
          { abstract: { $regex: search, $options: 'i' } },
          { keywords: { $in: [new RegExp(search, 'i')] } },
          { authors: { $elemMatch: { $regex: search, $options: 'i' } } }
        ]
      };
    }

    const papers = await collection
      .find(query)
      .sort({ publishedDate: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    const total = await collection.countDocuments(query);

    return NextResponse.json({
      papers,
      total,
      hasMore: skip + limit < total
    });

  } catch (error) {
    console.error('Error fetching papers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch research papers' },
      { status: 500 }
    );
  }
}