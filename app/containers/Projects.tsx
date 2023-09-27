import ProjectCard from "../components/ProjectCard";
import sanityClient from "@/sanity/config/client.config";
import { groq } from "next-sanity";
const query = groq`*[_type == "projects"]`;

const Projects = async () => {
  const projects = await sanityClient.fetch(query);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 text-[#212121] m-12 gap-6">
      {projects.map((p: any) => (
        <ProjectCard
          title={p.name}
          desc={p.description}
          technologies={p.technologies}
          linkGit={p.githubLink}
          tags={p.tags}
          hostedLink={p.hostedLink}
          devfolioLink={p.devfolioLink}
        />
      ))}
    </div>
  );
};

export default Projects;
