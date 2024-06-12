import Link from "next/link";
function ClientPage(params) {
  const clients = [
    { id: "ram", name: "Raman" },
    { id: "kris", name: "Krish" },
  ];
  return (
    <div>
      <h1>This client Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/client/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientPage;
