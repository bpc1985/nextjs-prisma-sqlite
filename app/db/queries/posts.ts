import type { Post } from "@prisma/client";
import { prisma } from "@/app/db/prisma";
import { notFound } from "next/navigation";

export async function fetchPosts(): Promise<Post[]> {
  return await prisma.post.findMany({
    orderBy: [
      {
        updatedAt: "desc",
      },
    ],
  });
}

export async function fetchPostById(id: string): Promise<Post | null> {
  const post = await prisma.post.findFirst({
    where: {
      id,
    },
  });

  if (!post) {
    // If the post is not found, a 404 error is thrown.
    notFound();
  }

  return post;
}
