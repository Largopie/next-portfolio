import Layout from "@/components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config"

export default function Projects({ projects }) {

  return (
    <Layout>
      <Head>
        <title>송재석 포트폴리오</title>
        <meta name="description" content="First Next.js Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>총 프로젝트 : { projects.results.length }</h1>

      {projects.results.map((aProject) => (
        <h1>{aProject.properties.ProjectName.title[0].plain_text}</h1>
      ))}
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

  const projectNames = projects.results.map((aProject) => (
    aProject.properties.ProjectName.title[0].plain_text
  ))

  console.log(`projectNames: ${projectNames}`)

  return {
    props: {projects},
  }
}