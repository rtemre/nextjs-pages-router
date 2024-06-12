import Link from "next/link";
function HomePage(params) {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href={"/portfolio"}>Protfolio Page</Link>
        </li>
        <li>
          <Link href={"/blog/2024"}>Blog Post Page</Link>
        </li>
      </ul>
    </div>
  );
}
export default HomePage;
