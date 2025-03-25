import Image from 'next/image'
import theSwe from 'public/the_swe.png'
import theCreative from 'public/the_creative.png'
import future from 'public/future.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-4 py-12 text-white">
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
        <Image src={theSwe} alt="The SWE card" className="w-full lg:w-80 rounded-xl shadow-xl" />
        <Image src={theCreative} alt="The Creative card" className="w-full lg:w-80 rounded-xl shadow-xl" />
        <Image src={future} alt="The Future card" className="w-full lg:w-80 rounded-xl shadow-xl" />
      </div>

      <section className="mt-10 max-w-3xl space-y-4">
        <p className="text-lg">
          THE SWE card signifies Christopher Franco’s technical experiences from working at medium and big-sized companies such as Glassdoor and VMware, to leading engineering efforts at YC-backed companies.
        </p>

        <p className="text-lg">
          Paired with THE CREATIVE card, it indicates imaginative experimentations with AI-generated art, health & wellness, and blockchain technologies.
        </p>

        <p className="text-lg">
          The final card, FUTURE, emphasizes being open to new opportunities to apply his intuitive insight and visionary thinking – Christopher is ready to <a href="https://www.linkedin.com/in/x0franco/">connect</a>.
        </p>
      </section>
    </main>
  )
}