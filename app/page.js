import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-16 row-start-2 items-center justify-center">
        <div className={'flex flex-col items-center max-w-[770px] justify-center sm:items-start sm:flex-row gap-10'}>
          <Image src={'/sam.jpg'} width={250} height={250} alt={'photo of sam'} className={'rounded-xl'}/>
            <div className="flex flex-col md:w-[500px] gap-4">
                <h1 className={'text-2xl'}>Hi, I am Sam (Weng Haishi)</h1>
                <h1 className={'text-sm text-cyan-700'}>Software engineer @ the Economic Development Board of Singapore</h1>
                <p>I enjoy solving problems and turning ideas into reality. Some of my tools are:</p>
                <div className={'flex flex-row gap-4 flex-wrap'}>
                    <Image src={'/ts.svg'} height={30} width={30} alt={'ts icon'}/>
                    <Image src={'/go.svg'} height={30} width={30} alt={'go icon'}/>
                    <Image src={'/java.svg'} height={30} width={30} alt={'java icon'}/>
                    <Image src={'/python.svg'} height={30} width={30} alt={'python icon'}/>
                    <Image src={'/nextjs.svg'} height={30} width={30} alt={'nextjs icon'}/>
                    <Image src={'/react.svg'} height={30} width={30} alt={'react icon'}/>
                    <Image src={'/node.svg'} height={30} width={30} alt={'node icon'}/>
                    <Image src={'/postgresql.svg'} height={30} width={30} alt={'postgresql icon'}/>
                    <Image src={'/mongo.svg'} height={30} width={30} alt={'mongo icon'}/>
                    <Image src={'/tailwind.svg'} height={30} width={30} alt={'tailwind icon'}/>
                </div>
            </div>
        </div>

          <div className={'w-full text-start max-w-[770px]'}>
              <h1 className={'text-xl mb-6 text-start w-full'}>Portfolio</h1>
              <div className={'flex flex-col gap-3'}>
                  <h2 className={'text-cyan-700'}>
                      Nav
                  </h2>
                  <div>
                      An information hub for companies looking to expand in Singapore. Notable features: AI search and recommendation engine, Webform for companies to submit connections requests and informational articles.
                  </div>
                  <a href={'https://invest.edb.gov.sg'} className={'text-cyan-700'}   target="_blank"
                     rel="noopener noreferrer">
                      https://invest.edb.gov.sg
                  </a>
                  <div className={'flex flex-row gap-4'}>
                      <Image src={'/ts.svg'} height={30} width={30} alt={'ts icon'}/>
                      <Image src={'/postgresql.svg'} height={30} width={30} alt={'postgresql icon'}/>
                      <Image src={'/nextjs.svg'} height={30} width={30} alt={'nextjs icon'}/>
                  </div>

                  <div className="w-full h-[1px] bg-gradient-to-r my-12 from-transparent via-gray-500 to-transparent"></div>

                  <h2 className={'text-cyan-700'}>
                      HySights dashboard
                  </h2>
                  <div>
                      A dashboard to visualise data from different renewable energy projects. Notable features: Table dashboard with sorting, filter and hide-column features. Chart dashboard with multiple chart types and data aggregation.
                  </div>
                  <a href={'https://dashboard-app-pi-ivory.vercel.app/en'} className={'text-cyan-700'}   target="_blank"
                     rel="noopener noreferrer">
                      https://dashboard-app-pi-ivory.vercel.app/en
                  </a>
                  <div className={'flex flex-row gap-4'}>
                      <Image src={'/ts.svg'} height={30} width={30} alt={'ts icon'}/>
                      <Image src={'/nextjs.svg'} height={30} width={30} alt={'nextjs icon'}/>
                      <Image src={'/tailwind.svg'} height={30} width={30} alt={'tailwind icon'}/>
                  </div>

                  <div className="w-full h-[1px] bg-gradient-to-r my-12 from-transparent via-gray-500 to-transparent"></div>

                  <h2 className={'text-cyan-700'}>
                      Js-4-all
                  </h2>
                  <div>
                      A LeetCode clone with a focus on JavaScript. Notable features: LeetCode problems with in-browser code editor and test cases. Flashcards to test users on important concepts. Short refresher lessons on javascript.
                  </div>
                  <a href={'https://js-4-all.vercel.app/'} className={'text-cyan-700'}   target="_blank"
                     rel="noopener noreferrer">
                      https://js-4-all.vercel.app/
                  </a>
                  <div className={'flex flex-row gap-4'}>
                      <Image src={'/ts.svg'} height={30} width={30} alt={'ts icon'}/>
                      <Image src={'/nextjs.svg'} height={30} width={30} alt={'nextjs icon'}/>
                      <Image src={'/tailwind.svg'} height={30} width={30} alt={'tailwind icon'}/>
                      <Image src={'/mongo.svg'} height={30} width={30} alt={'mongo icon'}/>

                  </div>

                  <div className="w-full h-[1px] bg-gradient-to-r my-12 from-transparent via-gray-500 to-transparent"></div>

                  <h2 className={'text-cyan-700'}>
                      Trello clone with ChatGPT integration
                  </h2>
                  <div>
                      A Trello clone to help users manage tasks. Notable features: Drag and drop tasks, ChatGPT integration to summarise tasks.
                  </div>
                  <a href={'https://trello-clone-next-js-plum.vercel.app/'} className={'text-cyan-700'}   target="_blank"
                     rel="noopener noreferrer">
                      https://trello-clone-next-js-plum.vercel.app/
                  </a>
                  <div className={'flex flex-row gap-4'}>
                      <Image src={'/ts.svg'} height={30} width={30} alt={'ts icon'}/>
                      <Image src={'/nextjs.svg'} height={30} width={30} alt={'nextjs icon'}/>
                      <Image src={'/tailwind.svg'} height={30} width={30} alt={'tailwind icon'}/>
                  </div>
              </div>

          </div>
      </main>
    </div>
  );
}
