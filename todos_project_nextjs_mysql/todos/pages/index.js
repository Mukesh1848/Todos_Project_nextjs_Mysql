import Image from "next/image";
import { Inter } from "next/font/google";
// import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="text-center text-3xl my-20  text-green-700 font-bold">
        <h1 className="mx-10">Welcome to Our Todos Project</h1>
        <h1>Home Page</h1>
      </div>
    </>
  );
}
