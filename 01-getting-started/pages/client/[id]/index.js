import { useRouter } from "next/router";
function SelectedClientPage(params) {
  const router = useRouter();

  console.log(router.query); // {id: 'raman'}

  const navigateToUrl = () => {
    // router.push('/client/max')
    router.push({
      pathname: "/client/[id]/[clientProjectId]",
      query: { id: "max", clientProjectId: "maxProjects" },
    });
  };
  return (
    <div>
      <h1>This page for selected client</h1>
      <button onClick={navigateToUrl}>Navigate to client Project</button>
    </div>
  );
}

export default SelectedClientPage;
