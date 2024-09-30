import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  console.log(body);
  return new Response(
    JSON.stringify({
      greeting: "Hello",
    }),
  );
};
