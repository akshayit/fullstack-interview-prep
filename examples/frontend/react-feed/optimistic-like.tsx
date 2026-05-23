import { useState } from "react";

type Post = {
  id: string;
  author: string;
  caption: string;
  liked: boolean;
  likes: number;
};

type Props = {
  initialPosts: Post[];
  api: {
    likePost: (postId: string) => Promise<void>;
    unlikePost: (postId: string) => Promise<void>;
  };
};

export function Feed({ initialPosts, api }: Props) {
  const [posts, setPosts] = useState(initialPosts);

  async function toggleLike(postId: string) {
    const previous = posts;
    const post = posts.find((item) => item.id === postId);
    if (!post) return;

    setPosts((current) =>
      current.map((item) =>
        item.id === postId
          ? {
              ...item,
              liked: !item.liked,
              likes: item.liked ? item.likes - 1 : item.likes + 1
            }
          : item
      )
    );

    try {
      if (post.liked) await api.unlikePost(postId);
      else await api.likePost(postId);
    } catch {
      setPosts(previous);
    }
  }

  return (
    <main aria-label="Feed">
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.author}</h2>
          <p>{post.caption}</p>
          <button type="button" aria-pressed={post.liked} onClick={() => toggleLike(post.id)}>
            {post.liked ? "Liked" : "Like"} {post.likes}
          </button>
        </article>
      ))}
    </main>
  );
}

