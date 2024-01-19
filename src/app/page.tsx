import { Rhf } from "./components/rhf";
import { RhfWithZod } from "./components/rhf-with-zod";
import { SimpleForm } from "./components/simple";
import { WithAction } from "./components/with-action";

export default function Home() {
  return (
    <main className="p-24">
      <div className="container flex flex-col justify-center items-center mx-auto">
        <h1 className="mb-16 text-2xl font-medium">React Hook Form</h1>
        {/* <SimpleForm /> */}
        {/* <Rhf /> */}
        {/* <RhfWithZod /> */}
        <WithAction />
      </div>
    </main>
  );
}
