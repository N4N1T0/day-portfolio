import { prisma } from "@/prisma/client";
import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const email: string = body.email;

  if (!email) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Email is required, if you want to subscribe!",
      }),
      { status: 400 },
    );
  }

  // Verifiy if the email is already subscribed
  const existingSubscriber = await prisma.subscriber.findFirst({
    where: {
      email: email,
    },
  });

  if (existingSubscriber) {
    return new Response(
      JSON.stringify({
        success: false,
        message:
          "Email already subscribed, dont worry you will be updated soon!",
      }),
      { status: 409 },
    );
  }

  // Create a new subscriber
  const response = await prisma.subscriber.create({
    data: {
      email: email,
    },
  });

  if (!response) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error creating subscriber, try again!",
      }),
      { status: 500 },
    );
  }

  return new Response(
    JSON.stringify({
      success: true,
      message: "Subscriber created, dont worry you will be updated soon!",
    }),
    { status: 201 },
  );
};
