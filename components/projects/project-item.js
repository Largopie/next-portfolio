import Image from 'next/image'

export default function ProjectItem({ data }) {

  const title = data.properties.ProjectName.title[0].plain_text
  const description = data.properties.Description.rich_text[0].plain_text
  const github = data.properties.GitHub.url
  const imgSrc = data.cover.file?.url
  const tags = data.properties.Tags.multi_select

  return (
    <div className="project-card">
      <Image
        className="rounded-xl"
        src={imgSrc}
        alt="cover image"
        width="800"
        height="800"
        style={{objectFit: "cover", layout: "responsive"}}
        quality={100}
      />
      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h1 className="mt-4 text-xl">{description}</h1>
        <a href={github}>깃허브 바로가기</a>
        <div className="flex items-start mt-2">
          {tags.map((aTag) => (
            <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
          ))}
        </div>
      </div>
    </div>
  );
}