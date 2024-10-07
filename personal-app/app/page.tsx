import {pathwayGothic, roboto} from "@/app/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <header className="flex h-[60px] w-full px-[16px] z-10">
        <table className="table-auto">
          <thead>
          <tr>
            <th className="align-middle">
              <div className="w-[45px] h-[45px] p-[4px] ">
                <Image src="/menu_icon.png" width={40} height={40} alt="Menu"/>
              </div>
            </th>
            <th className="flex flex-row grow justify-start h-[60px] align-middle">
              <div className="flex px-[14px] py-[18px] ${pathwayGothic.className}">
                <Image src="/Mytube_logo.png" width={36} height={25} alt="MyTube Logo"/>
                <p className="text-[30px] font-medium tracking-[-0.08em] leading-[25px]">
                  MyTube
                </p>
              </div>
            </th>
          </tr>
          </thead>
        </table>
      </header>
      <main className="flex flex-col">
        <div className="fixed left-0 bottom-0 top-[60px] w-[72px]">
        </div>
        <div className="flex flex-col">
          <div className="px-[100px]">
            <div className="rounded-[16px] overflow-hidden">
              <Image src="/example_banner.png" width={1707} height={284} alt="Banner"/>
            </div>
          </div>
          <div className="flex flex-row px-[100px] pt-[16px]">
            <div className="rounded-[50%] overflow-hidden mr-[16px] w-[160px] h-[160px]">
              <Image src="/channel_image.jpg" width={160} height={160} alt="Channel Picture"/>
            </div>
            <div>
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <h1 className="flex text-[36px]/[50px] ${roboto.className} font-bold">
                    Aidan Griffith
                  </h1>
                  <div className="flex ml-[8px] items-center">
                    <div className="w-[14px] h-[14px]">
                      <Image src="/Verified_Checkmark.png" width={14} height={14} alt=""/>
                    </div>
                  </div>
                </div>
                <div className="text-[#aaa]">
                  godlyegg12@gmail.com • 420k subscribers • No projects
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>

        </div>
      </main>
    </div>
  );
}
