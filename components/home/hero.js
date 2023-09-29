import Animation from '@/components/home/animation'
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
        <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">예비 Frontend Engineer 송재석입니다!
          <br className="hidden lg:inline-block" />
        </h1>
        <p className="mb-8 leading-relaxed">
        서비스 이용자에게 보다 편리한 서비스를 제공해 매력적으로 끌어당기는 <br />🧲<strong>자석</strong>같은 개발자가 되기 위해 배움의 계단을 한칸한칸 밟아나가는 중입니다. <br/>
          매년 새로운 기술이 등장하고 발전하는 현대에서 끊임없이 성장하며 미래 산업의 중심에서 개발을 이어나가고 싶은 강한 열망을 품고 있는 개발자입니다.
          새로운 언어와 기술을 신속하게 습득하고 이를 실전에 빠르게 적용하는 능력을 갖추고자 합니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">
            프로젝트 보러가기
          </Link>
        </div>
      </div>
      <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
        <Animation />
      </div>
    </>
  );
}