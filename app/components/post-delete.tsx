"use client";

import { deletePost } from "@/app/actions/posts";

interface PostDeleteProps {
  id: string;
}

export default function PostDelete({ id }: PostDeleteProps) {
  // Define the action to perform when the form is submitted.
  // This is how we do it if we omit the bind from the server action
  const deleteAction = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the form from being submitted in the traditional way.
    deletePost(id); // Delete the post with the given ID.
  };

  return (
    <form onSubmit={deleteAction}>
      <button type="submit" className="link link-error">
        Delete
      </button>
    </form>
  );
}
