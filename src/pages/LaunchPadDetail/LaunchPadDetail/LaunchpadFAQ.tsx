import { Disclosure } from '@headlessui/react';
import { AnimateChangeInHeight } from 'components/AnimatedNumber/AnimateChangeInHeight';
import iconUp from 'images/icon/icon-dropdown.svg';
import { useProjectData } from 'pages/LaunchpadExplore/data';

export function LaunchPadFAQ() {
  const { data } = useProjectData();

  if (!data?.faqs) {
    return <></>;
  }

  return (
    <section className="relative max-w-[1202px] 2xl:max-w-full px-4 mx-auto 2xl:mx-[128px]">
      <h5 className="text-[40px] leading-[1.35] font-russo explore-title mb-[52px]">
        FAQS
      </h5>

      {/* ask and questions 1 */}
      {data.faqs.map((item) => {
        return (
          <AnimateChangeInHeight className="mb-[10px]">
            <Disclosure
              key={item.id}
              as="div"
              className="faq-item group p-6 rounded-[20px] bg-transparent10 flex flex-col gap-6 items-start opacity-60 hover:opacity-100"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full">
                    <span className="text-left text-[20px] md:text-[30px] leading-[40px] text-[#CDCDCD] group-hover:text-white">
                      {item.question}
                    </span>

                    <img
                      src={iconUp}
                      alt="UP"
                      className={`transition-all ${open ? 'rotate-180' : ''} `}
                    />
                  </Disclosure.Button>

                  <Disclosure.Panel
                    as="p"
                    className="text-[20px] md:text-[24px] leading-[1.35] text-gray-500 font-varela"
                  >
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </AnimateChangeInHeight>
        );
      })}
    </section>
  );
}
