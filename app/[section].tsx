import { useRouter } from "next/router";

export default function DetailsPage() {
  const router = useRouter();
  const { section } = router.query;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">More about {section}</h1>
      <p>This is the detailed content about {section}...</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={() => router.back()}>
        Go Back
      </button>
    </div>
  );
}
