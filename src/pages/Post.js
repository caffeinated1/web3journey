import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Post() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../content/${slug}.mdx`)
      .then((module) => setContent(module.default))
      .catch(() => setContent("Post not found"));
  }, [slug]);

  return (
    <div>
      <h1>{slug.replace("-", " ")}</h1>
      <div>{content}</div>
    </div>
  );
}

export default Post;
