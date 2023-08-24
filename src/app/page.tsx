import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen p-2 bg-black text-white	">
      <div className="block header-logo">
        <div className="inline-block">
          <img src="/logo.png" /> 
        </div>
        <span className="inline-block pl-2 py-2 site-name">Lorem</span>
        <span className="inline-block pl-2 py-2 hamberger">
          <img src="/menu-05.png" /> 
        </span>
      </div>

      <div className="px-9 w-full font-mono container mx-auto sm mt-12 mb-12">
        <legend className="font-black uppercase text-8xl max-w-screen-sm	">lorem ipsum</legend>
      </div>
      <div className="px-9 w-full font-mono container mx-auto sm">
        <div className="grid grid-cols-3 gap-12">
          <div className="sm">
            <legend className="font-black uppercase">dolor sit</legend>
            <div className="">
              <p className="text-xs leading-5">
                Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit. Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus convallis elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem cras leo.
              </p>
              <div className="inline-block mt-3">
                <img className="h-5 w-auto" src="/icon/users-plus.png" />
              </div>
            </div>
          </div>
          <div className="sm">
            <legend className="font-black uppercase">Lorem ipsum dolor sit</legend>
            <div className="">
              <p className="text-xs leading-5">
                Dolor adipiscing condimentum aliquam nullam mauris ante ipsum vel nisl. Dignissim molestie amet purus felis egestas amet eget. Viverra malesuada ultricies nunc vel diam posuere mauris sociis maecenas. Aenean dui et nec ultrices libero lacus.
              </p>
              <div className="inline-block mt-3">
                <img className="h-5 w-auto" src="/icon/server-01.png" />
              </div>
            </div>
          </div>

          <div className="sm">
            <img className="mb-2" src="/Frame1.png" />
            <legend className="font-black uppercase">Lorem ipsum dolor sit</legend>
            <div className="">
              <p className="text-xs leading-5">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
              <div className="inline-block mt-3">
                <img className="h-5 w-auto" src="/icon/target-05.png" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="px-9 w-full font-mono container mx-auto sm mt-4	">
        <div className="grid grid-cols-3 gap-12">
          <div className="sm">
            <legend className="font-black uppercase">Lorem ipsum</legend>
            <div className="">
              <p className="text-xs leading-5">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
              <div className="inline-block mt-3">
                <img className="h-5 w-auto" src="/icon/percent-03.png" />
              </div>
            </div>
          </div>
          <div className="sm">
            <legend className="font-black uppercase">dolor sit amet</legend>
            <div className="">
              <p className="text-xs leading-5">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
              <div className="inline-block mt-3">
                <img className="h-5 w-auto" src="/icon/cpu-chip-01.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-9 w-full font-mono container mx-auto sm mt-8 mb-12	">
        <div className="grid grid-cols-3 gap-12 about-common-height">
          <div className="sm">
          </div>
          <div className="sm">
            <img className="mb-2" src="/Frame2.png" />
          </div>
          <div className="sm">
            <legend className="font-black uppercase">dolor sit</legend>
            <div className="">
              <p className="text-xs leading-5">
                Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit. Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus convallis elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem cras leo.
              </p>
              <div className="inline-block mt-3">
                <img className="h-5 w-auto" src="/icon/cube-01.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-9 w-full font-mono container mx-auto sm mt-12 mb-12 relative hide-on-hover">
        <div className="grid grid-cols-2 gap-x-8 about-common-height">
          <div className="sm relative">
            <img className="mb-2" src="/aboutUs.png" />
            <img className="mb-2 frame-3-img" src="/Frame3.png" />
          </div>
          <div className="sm">
            {/* <legend className="font-black uppercase">dolor sit</legend> */}
            <div className="mt-16">
              <p className="text-xs leading-5">
                Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit. Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus convallis elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem cras leo.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 about-common-height back-about-view">
          <img className="mb-2 frame-3-img-group onHover" src="/AboutUsGroup.png" />
        </div>
      </div>

      <div className="w-full mx-auto mt-12 mb-12">
        <img className="mb-2 first-banner" src="/Banner.png" />
      </div>


      <div className="px-9 w-full font-mono container mx-auto sm mt-12 mb-12">
        <legend className="font-black uppercase text-8xl max-w-screen-sm	">lorem ipsum dolor set</legend>
      </div>

      <div className="px-9 w-full font-mono container mx-auto sm mt-4	">
        <div className="grid grid-cols-3 gap-12">
          <div className="sm">
            <legend className="font-black uppercase">Lorem ipsum</legend>
            <div className="">
              <p className="text-xs leading-5">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
              <div className="inline-block mt-3">
                <img className="h-5 w-auto" src="/icon/Icon.png" />
              </div>
            </div>
          </div>
          <div className="sm">
            <legend className="font-black uppercase">dolor sit amet</legend>
            <div className="">
              <p className="text-xs leading-5">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
              <div className="inline-block mt-3">
                <img className="h-5 w-auto" src="/icon/Icon (1).png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-9 w-full font-mono container mx-auto sm mt-8 mb-12	">
        <div className="grid grid-cols-3 gap-12">
          <div className="sm">
          </div>
          <div className="sm">
            <img className="mb-2" src="/Frame4.png" />
          </div>
          <div className="sm">
            <legend className="font-black uppercase">dolor sit</legend>
            <div className="">
              <p className="text-xs leading-5">
                Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit. Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus convallis elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem cras leo.
              </p>
              <div className="inline-block mt-3">
                <img className="h-5 w-auto" src="/icon/Icon (2).png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-9 w-full font-mono container mx-auto sm mt-12 mb-12">
        <legend className="font-black uppercase text-8xl 	">lorem ipsum dolor</legend>
      </div>

      <div className="w-full mx-auto mt-12 mb-12 relative">
        <img className="mb-2 second-banner" src="/Rectangle.png" />
        <div className="px-9 w-full font-mono container mx-auto accordian-text-content">
        <div className="items-center justify-between text-sm lg:flex py-2	">
          <legend className="font-black uppercase 	"> Lorem ipsum dolor sit amet</legend>
          <div>-</div>
        </div>
        </div>
        
      </div>

      <div className="px-9 w-full font-mono container mx-auto sm mt-8 mb-12	">
        <div className="grid grid-cols-1">
          <div className="sm">
            <div className="">
              <p className="text-xs leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
            </div>
          </div>
        </div>
      </div>

      <div className="px-9 w-full font-mono container mx-auto mt-8 mb-12	">
        <div className="items-center justify-between text-sm lg:flex py-2	">
          <legend className="font-black uppercase 	"> Lorem ipsum dolor sit amet</legend>
          <div>-</div>
        </div>
        <div className="items-center justify-between text-sm lg:flex py-2	">
          <legend className="font-black uppercase 	"> Lorem ipsum dolor sit amet</legend>
          <div>-</div>
        </div>
        <div className="items-center justify-between text-sm lg:flex py-2	">
          <legend className="font-black uppercase 	"> Lorem ipsum dolor sit amet</legend>
          <div>-</div>
        </div>
        <div className="items-center justify-between text-sm lg:flex py-2	">
          <legend className="font-black uppercase 	"> Lorem ipsum dolor sit amet</legend>
          <div>-</div>
        </div>
      </div>  
    </main>
  )
}
