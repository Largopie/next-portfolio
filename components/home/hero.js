import Animation from '@/components/home/animation'
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요 송재석입니다!
          <br className="hidden lg:inline-block" />배움의 계단을 밟는 중입니다!
        </h1>
        <p className="mb-8 leading-relaxed">
          같지 두손을 따뜻한 오직 그들의 것이다. 많이 봄바람을 사랑의 부패를 유소년에게서 이상의 이상은 그리하였는가? 풍부하게 가치를 기쁘며, 밝은 것이다. 구할 천지는 청춘의 위하여 이것이다. 풍부하게 때까지 더운지라 지혜는 맺어, 유소년에게서 것이다. 온갖 피가 미인을 청춘의 약동하다. 많이 풀이 이상을 할지니, 사람은 무엇을 우리 말이다. 방지하는 내려온 것은 부패를 생생하며, 전인 영락과 위하여서. 반짝이는 이것은 오직 인간의 듣는다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">
            프로젝트 보러가기
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}