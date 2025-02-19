import { Link } from "react-router-dom";

const posts = [
  { slug: "switching-to-web3-security", title: "Switching to Web3 Security" },
  { slug: "biggest-smart-contract-hacks", title: "Biggest Smart Contract Hacks" },
];

function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
