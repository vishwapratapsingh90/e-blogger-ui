import { comments } from "../data";

export async function GET(
  _request: Request, // _request is unused, but we need to include it to match the function signature
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const commentId = parseInt(id, 10);
  const comment = comments.find((c) => c.id === commentId);

  if (!comment) {
    return new Response(JSON.stringify({ error: "Comment not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify(comment), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function PATCH(
  request: Request, // request is used to get the body of the request, so no "_" prefix is needed
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params; // destructure id from params
  const body = await request.json();
  const { text } = body; // destructure text from body

  const index = comments.findIndex((c) => c.id === parseInt(id, 10));
  comments[index].text = text;

  return Response.json(comments[index]);
}

export async function DELETE(
  _request: Request, // _request is unused, but we need to include it to match the function signature
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const commentId = parseInt(id, 10);
  const index = comments.findIndex((c) => c.id === commentId);

  if (index === -1) {
    return new Response(JSON.stringify({ error: "Comment not found" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  comments.splice(index, 1);

  return new Response(null, { status: 204 });
}
