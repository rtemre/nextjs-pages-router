import { useRouter } from "next/router";
function SelectedClientPage(params) {
  const router = useRouter();

  console.log(router.query); // {id: 'raman'}
  return (
    <div>
      <h1>This page for selected client</h1>
    </div>
  );
}

export default SelectedClientPage;
