import {pathwayGothic, roboto} from "@/app/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <header className="flex flex-row h-[48px] sm:h-[60px] w-full px-[16px] z-10">
        <div className="flex items-center">
          <div className="w-[45px] h-[45px] p-[4px]">
            <Image src="/menu_icon.png" width={40} height={40} alt="Menu"/>
          </div>
        </div>
        <div className="flex flex-row grow justify-start align-middle items-center">
          <div className="flex px-[14px] ${pathwayGothic.className} pointer-events-none">
            <div className="w-[36px] h-[25px]">
              <Image src="/Mytube_logo.png" width={640} height={443} alt="MyTube Logo"/>
            </div>
            <div className="text-[30px] font-medium tracking-[-0.08em] leading-[25px]">
              MyTube
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col">
        <div className="fixed left-0 bottom-0 top-[60px] w-[72px]">
        </div>
        <div className="flex flex-col p-[16px] sm:p-0">
          <div className="sm:px-[100px] mb-[16px]">
            <div className="rounded-[8px] sm:rounded-[16px] overflow-hidden">
              <Image src="/example_banner.png" width={1707} height={284} alt="Banner"/>
            </div>
          </div>
          <div className="flex flex-row sm:px-[100px]">
            <div className="flex mr-[16px]">
              <div className="rounded-[50%] overflow-hidden w-[72px] h-[72px] sm:w-[160px] sm:h-[160px]">
                <Image src="/channel_profile.jpg" width={160} height={160} alt="Channel Picture"/>
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <div className="flex text-[24px]/[32px] sm:text-[36px]/[50px] ${roboto.className} font-bold">
                    Aidan Griffith
                  </div>
                  <div className="flex ml-[8px] items-center">
                    <div className="w-[14px] h-[14px] pointer-events-none">
                      <Image src="/Verified_Checkmark.png" width={24} height={24} alt=""/>
                    </div>
                  </div>
                </div>
                <div className="block sm:flex text-[#aaa] text-nowrap">
                  <div className="mt-[2px]">
                    godlyegg12@gmail.com
                    <div className="hidden sm:inline">
                      &nbsp;•&nbsp;
                    </div>
                  </div>
                  <div className="mt-[2px]">
                    420k subscribers • No projects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-[10px] px-[16px] sm:px-[100px] h-[48px] ${roboto.className} font-medium text-[20px]/[22px] text-[#aaa] underline-offset-[16px]">
          <button className="flex mr-[24px] items-center hover:underline active:text-[#fff]">
            Home
          </button>
          <button className="flex mr-[24px] items-center hover:underline active:text-[#fff]">
            Projects
          </button>
          <button className="flex mr-[24px] items-center hover:underline active:text-[#fff]">
            About
          </button>
        </div>
        <div className="flex border-b-[1px] sm:mx-[25px] border-[#fff]/[0.2]"></div>
      </main>
    </div>
  );
}