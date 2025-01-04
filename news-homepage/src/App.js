import Header from "./Header";
import Card from "./Card";
import headerImg from './assets/images/image-web-3-desktop.jpg'
import headerImgMobile from './assets/images/image-web-3-mobile.jpg'

const App = () => (
  <section className="max-w-[1080px] h-full mx-auto px-2 overflow-hidden">
    <Header />
    <main className="my-12 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-y-8 md:gap-x-8">
      <div className="col-span-2 row-span-2">
        <picture>
        <source media="(max-width:650px)" srcSet={headerImgMobile}></source>
        <img src={headerImg} alt="headerImg" className=" w-full max-h-[350px]" />
        </picture>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <h1 className="text-6xl font-bold">The Bright Future of <br /> Web 3.0?</h1>

          <div className="flex flex-col items-start justify-between">
            <p className="text-zinc-400 md:mb-0 mb-6">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="bg-primary hover:bg-black hover:text-zinc-200 px-8 py-3 tracking-widest uppercase font-bold">Read more</button>
          </div>
        </div>
      </div>

      <div className="bg-black lg:row-span-2 px-6 py-6">
        <h1 className="text-secondary text-4xl font-semibold mb-2">New</h1>

        <div className="divide-y divide-gray-500">
          <div className="py-6">
            <h1 className="text-xl text-zinc-100 font-semibold mb-2 hover:text-secondary">Hydrogen VS Electric Cars</h1>
            <p className="text-base text-zinc-400">Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>

          <div className="py-6">
            <h1 className="text-xl text-zinc-100 font-semibold mb-2 hover:text-secondary">The Downsides of AI Artistry</h1>
            <p className="text-base text-zinc-400">What are the possible adverse effects of on-demand AI image
            generation?</p>
          </div>

          <div className="py-6 pb-0">
            <h1 className="text-xl text-zinc-100 font-semibold mb-2 hover:text-secondary">Is VC Funding Drying Up?</h1>
            <p className="text-base text-zinc-400">Private funding by VC firms is down 50% YOY. We take a look at what
            that means.</p>
          </div>
        </div>

      </div>
    </main>
    <Card />
  </section>
);

export default App;
