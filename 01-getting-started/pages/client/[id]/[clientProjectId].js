import { useRouter } from "next/router";
function SelectedClientProjectPage(params) {
  const router = useRouter();

  console.log(router.query);
  //   {
  //     "id": "raman",
  //     "clientProjectId": "project"
  //   }
  return (
    <div>
      <h1>This page for specific project for a selected client</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
