import path from "path";
import fs from "fs/promises";
import { useEffect } from "react";
function ProductDetailsPage({ loadedProduct }) {
  useEffect(() => {}, []);

  // if fallback value is "blocking" then no need to use this loading
  if (!loadedProduct) {
    return <div>Loadiing...</div>;
  }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const fileData = await fs.readFile(filePath);
  const jsonData = JSON.parse(fileData);
  return jsonData;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  const data = await getData();
  const product = data.products.find((product) => product.id === productId);

  // if fallback is true, it means we need to render the page rather than
  // the product id is not found so we need to show 404 (Not found) page.
  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths(params) {
  const data = await getData();
  const pathWithParams = data.products.map((product) => ({
    params: { pid: product.id },
  }));

  return {
    paths: pathWithParams,
    // paths: [
    //   { params: { pid: "p1" } },
    //   { params: { pid: "p2" } },
    //   { params: { pid: "p3" } },
    // ],
    // if { fallback: false } means other routes should 404.
    fallback: true, // false | true | 'blocking'
  };
}

export default ProductDetailsPage;
