// src/app/posts/page.tsx

import Link from "next/link";

const Posts = () => {
  const posts = [
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" },
    { id: 3, title: "Third Post" },
  ];

  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title} {/* Use the text or content directly */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
