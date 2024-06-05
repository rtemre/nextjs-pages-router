import path from "path";
import fs from "fs/promises";

import Link from "next/link";
function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products?.map((prod) => (
        <li key={prod.id}>
          <Link href={`/${prod.id}`}>{prod.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(params) {
  console.log("(Re-)Generating...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const fileData = await fs.readFile(filePath);
  const jsonData = JSON.parse(fileData);
  if (!jsonData) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }
  if (jsonData.products.length === 0) {
    return {
      notfound: true,
    };
  }
  return {
    props: {
      products: jsonData.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
