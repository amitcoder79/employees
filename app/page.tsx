import Image from "next/image";
import Form from "./form";
import Employees from './employees';

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="w-1/2 p-4 border-2">
        <Employees />
      </div>
      <div className="w-1/2 p-4 border-2">
        <Form />
      </div>
    </main>
  );
}
