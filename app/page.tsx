import sanityClient from "@/sanity/config/client.config";
import { getProjects } from "@/sanity/sanity.utils";
import { groq } from "next-sanity";
import Image from "next/image";
import Cursor from "./components/Cursor";

const query = groq`*[_type == "projects"]`



export default async function Home() {
    const projects = await sanityClient.fetch(query)
  console.log("data:",projects)

  return <main>
      <Cursor />
    </main>;
}
