import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { schema } = body;

  console.log("Received schema:", schema);

  const generatedQuery = `query GetUser {
    user(id: "123") {
      id
      name
      email
      posts {
        id
        title
        content
      }
    }
  }`;

  return NextResponse.json({ query: generatedQuery });
}
