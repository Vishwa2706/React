// src/app/posts/[id]/page.tsx

interface PostPageProps {
    params: {
      id: string; // Dynamic route parameter
    };
  }
  
  const Post = ({ params }: PostPageProps) => {
    const { id } = params; // Extract the dynamic `id` parameter
  
    return (
      <div>
        <h1>Post {id}</h1>
        <p>This is the post page for the post with ID: {id}</p>
        {/* Use `id` to fetch or display post-specific data */}
      </div>
    );
  };
  
  export default Post;
  