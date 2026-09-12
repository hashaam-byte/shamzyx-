import HomeClient from "@/components/HomeClient";
import HomeTeaser from "@/components/HomeTeaser";
import { getProjects } from "@/lib/queries";

export const revalidate = 60;

export default async function Home() {
  const projects = await getProjects();

  return (
    <HomeClient>
      <HomeTeaser projects={projects} />
    </HomeClient>
  );
}
