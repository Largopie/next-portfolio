import Image from 'next/image';
import Loading from '../loading';
import { useEffect, useState } from 'react';

export default function ProjectItem({ data }) {
  const [loadState, setLoadState] = useState(true);
  const title = data.properties.ProjectName.title[0].plain_text;
  const description = data.properties.Description.rich_text[0].plain_text;
  const github = data.properties.GitHub.url;
  const imgSrc = data.cover.file?.url;
  const tags = data.properties.Tags.multi_select;

  const onLoadHandler = (e) => {
    if (e.target.complete) setLoadState(false);
  };

  useEffect(() => {}, [loadState]);

  return (
    <div className='project-card'>
      <div className='w-full h-auto'>
        {loadState ? (
          <div className='absolute w-[96px] h-[96px] -translate-x-1/2 -translate-y-1/2 mt-[-48px] top-[30%] ml-[-48px] left-[50%]'>
            <Loading />
          </div>
        ) : null}
        <Image
          onLoad={onLoadHandler}
          className='rounded-t-xl'
          src={imgSrc}
          alt='cover image'
          priority
          width={800}
          height={450}
          style={{ objectFit: 'cover', layout: 'responsive' }}
          quality={100}
        />
      </div>
      <div className='flex flex-col p-4'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <h1 className='mt-4 text-xl'>{description}</h1>
        <a href={github}>깃허브 바로가기</a>
        <div className='flex items-start mt-2'>
          {tags.map((aTag) => (
            <h1
              className='px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30'
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
