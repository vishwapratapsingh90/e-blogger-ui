import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
}

export async function POST(request: Request) {
  let comment: unknown;

  try {
    comment = await request.json();
  } catch {
    return Response.json({ error: "Request body must be valid JSON" }, { status: 400 });
  }

  if (
    typeof comment !== "object" ||
    comment === null ||
    !("text" in comment) ||
    typeof comment.text !== "string"
  ) {
    return Response.json({ error: "Request body must include a text string" }, { status: 400 });
  }

  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
