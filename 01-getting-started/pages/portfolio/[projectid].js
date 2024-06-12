import { useRouter } from "next/router";
function PortfolioPorjectPage(params) {
  const router = useRouter();
  //   console.log(router.pathname);
  //   console.log(router.query);
  return (
    <div>
      <h1>Portfolio Project Page</h1>
      <p>Route Path: {router.pathname}</p>
      <p>Query: {router.query}</p>
    </div>
  );
}
export default PortfolioPorjectPage;
