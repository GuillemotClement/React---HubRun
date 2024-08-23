import ConvertForm from "./ConvertForm";

export default function Content() {
  return (
    <main className="flex flex-auto justify-center border-b bg-slate-200 py-12 shadow">
      <div className="container flex items-center justify-center rounded-lg bg-white shadow-md">
        <ConvertForm />
      </div>
    </main>
  );
}
