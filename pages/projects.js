import Layout from "@/components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config"
import ProjectItem from "@/components/projects/project-item";

export default function Projects({ projects }) {

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-6 mb-10">
        <Head>
          <title>송재석 포트폴리오</title>
          <meta name="description" content="First Next.js Project" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="text-4xl font-bold sm:text-6xl">
          총 프로젝트 : 
          <span className="pl-4 text-blue-500">{projects.results.length}</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8">
          {projects.results.map((aProject) => (
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {

  const options = {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      'authorization': `Bearer ${TOKEN}`
    },
    body: JSON.stringify({
      sorts: [
        {
          "property": "ProjectName",
          "direction": "ascending"
        }
      ],
      page_size: 100
    })
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
  const projects = await res.json()

  return {
    props: { projects },
  }
}