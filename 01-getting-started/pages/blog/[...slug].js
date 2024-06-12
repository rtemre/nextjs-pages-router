import { useRouter } from "next/router";
function BlogPage(params) {
  const router = useRouter();

  // Catch All routes >> /blog/2024/june/12
  console.log(router.query); //
  // slug: (3) ['2024', 'june', '12']

  return (
    <div>
      <h1>The Blog Page</h1>
    </div>
  );
}

export default BlogPage;
