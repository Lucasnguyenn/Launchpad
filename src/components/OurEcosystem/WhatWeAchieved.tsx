import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as material from 'images/ecosystem/index';
import { useLayoutEffect, useRef } from 'react';
import './ecosystem.scss';

gsap.registerPlugin(ScrollTrigger);

function HubNetwork() {
  return (
    <div className="bg-[#101010] px-[50px] py-[30px] box-shadow13 flex justify-center items-center flex-wrap gap-[90px]">
      <div className="flex-1">
        <h2 className="text-[50px] leading-[1] font-cabin font-semibold text-linear1 w-fit mb-[57px]">
          HUB NETWORK
        </h2>

        <div>
          <p className="text-[30px] leading-[1.17] font-anek text-white">
            <span className="text-[35px] font-[700] font-oxanium">
              25 Startup Clubs Members{' '}
            </span>
            at universities are connected in Vietnam
          </p>
          <br />

          <p className="text-[30px] leading-[1.17] font-anek text-white">
            <span className="text-[35px] font-[700] font-oxanium">
              100 Startup Competitions{' '}
            </span>
            organized (e.g: Kawai Business Startup, Techstart , I-Startup,…)
          </p>
          <br />
          <p className="text-[30px] leading-[1.17] font-anek text-white">
            <span className="text-[35px] font-[700] font-oxanium">
              40 Hub branches{' '}
            </span>
            in Vietnam
          </p>
        </div>
      </div>

      <img src={material.hubnetwork} alt="hubnetwork" className="w-[337px]" />
    </div>
  );
}

function IncubationProgram() {
  return (
    <div className="bg-[#101010] px-[50px] py-[30px] box-shadow13 flex justify-center items-center flex-wrap gap-[106px]">
      <div className="flex-1">
        <h2 className="text-[50px] leading-[1] font-cabin font-semibold w-fit mb-[57px]">
          INCUBATION PROGRAMS
        </h2>

        <div>
          <p className="text-[30px] leading-[1.17] font-anek text-white">
            <span className="font-[700] text-[#58A1A0]">
              20+ big incubation programs{' '}
            </span>
            and accelerations organized.
          </p>
          <br />
          <p className="text-[30px] leading-[1.17] font-anek text-white">
            Key partners for implementation includes: FTU Innovation and
            Incubation Space, VSV Capital SCE, TFI,...
          </p>
        </div>
      </div>

      <img src={material.incubation} alt="incubation" className="w-[298px]" />
    </div>
  );
}

function MediaInitiative() {
  return (
    <div className="bg-[#101010] px-[50px] py-[30px] box-shadow13 flex justify-center items-center flex-wrap gap-[106px]">
      <div className="flex-1">
        <h2 className="text-[50px] leading-[1] font-cabin font-semibold w-fit mb-[57px]">
          MEDIA INITIATIVES
        </h2>

        <div>
          <p className="text-[30px] leading-[1.17] font-anek text-white">
            8 published episodes of Founder’s Friday series brings{' '}
            <span className="text-[#58A1A0] font-[700]">78k followers.</span>
          </p>
          <br />
          <p className="text-[30px] leading-[1.17] font-anek text-white">
            <span className="text-[#58A1A0] font-[700]"> 50+ projects</span> are
            supported by HUB MEDIA
          </p>
        </div>
      </div>

      <img src={material.media} alt="media" className="w-[417px]" />
    </div>
  );
}

function Web3KeyPartner() {
  return (
    <div className="h-full bg-[#101010] px-[50px] py-[30px] box-shadow13 flex justify-center items-center flex-wrap gap-[106px]">
      <div className="flex-1">
        <h2 className="text-[50px] leading-[1] font-cabin font-semibold w-fit mb-[57px]">
          WEB 3 KEY PARTNER
        </h2>

        <div>
          <p className="text-[30px] leading-[1.73] font-anek text-white">
            Cooperation with{' '}
            <span className="text-[#58A1A0] font-[700]">Polygon Labs</span>{' '}
            support effectively web3 projects by learning materials, experienced
            advisors, infrastructures, and robust ecosystem.
          </p>
        </div>
      </div>

      <img src={material.web3key} alt="web3key" className="w-[310px]" />
    </div>
  );
}

const spacer = 30;
const minScale = 0.9;

function WhatWeAchived() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const cards = gsap.utils.toArray('.scroll-section1');

      const distributor = gsap.utils.distribute({
        base: minScale,
        amount: 0.1,
      });

      for (let index = 0; index < cards.length; index++) {
        const card = cards[index] as any;
        const height = card.getBoundingClientRect().height;
        const scaleVal = distributor(index, cards[index], cards);
        console.log(1, 'height', index, height);
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: `top top`,
            scrub: true,
            invalidateOnRefresh: true,
          },
          ease: 'none',
          scale: scaleVal,
        });

        ScrollTrigger.create({
          trigger: card,
          start: `top-=${index * spacer} top`,
          end: `bottom top+=${height + cards.length * spacer}`,
          endTrigger: '.end-element',
          scrub: true,
          pin: true,
          pinSpacing: false,
          id: `pin-${index}`,
          invalidateOnRefresh: true,
        });
      }
    }, containerRef); // <- Scope!

    return () => ctx.revert(); // <- Cleanup!
  }, [containerRef]);
  return (
    <section
      ref={containerRef}
      className="relative max-w-[1202px] 2xl:max-w-full px-4 mx-auto 2xl:mx-[141px] md:pt-[80px]"
    >
      <h2 className="font-syne text-[4rem] font-bold flex justify-center">
        What we achieved
      </h2>

      <div className="relative py-[30px]">
        <div className="scroll-section1 md:min-h-[484px]">
          <HubNetwork />
        </div>

        <div className="scroll-section1 md:min-h-[484px]">
          <IncubationProgram />
        </div>

        <div className="scroll-section1 md:min-h-[485px]">
          <MediaInitiative />
        </div>

        <div className="scroll-section1 md:min-h-[484px]">
          <Web3KeyPartner />
        </div>
      </div>

      <div className="end-element"></div>
    </section>
  );
}

export default WhatWeAchived;
