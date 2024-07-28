import telephone from 'images/icon/icon-contact.svg';
import email from 'images/icon/icon-email.svg';
import location from 'images/icon/icon-location.svg';
import hubGlobal from 'images/logo/hub-global.png';

export function Footer() {
  return (
    <footer className="relative pb-[90px] pt-[48px] bg-[#292929]">
      {/* img */}
      <div className="relative max-w-[1202px] 2xl:max-w-full px-4 mx-auto 2xl:mx-[128px]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr]">
          {/* footer col1  */}
          <div className="">
            <div>
              <img src={hubGlobal} alt="hubGlobal" />
              <h4 className="text-[24px] leading-[34px] text-[#D9D9D9] py-[8px]">
                HUB GLOBAL
              </h4>
            </div>

            <ul className="flex flex-col gap-[10px]">
              <li className="text-[14px] leading-[20px] text-[#D9D9D9] font-varela">
                © 2023
              </li>
            </ul>
          </div>

          {/* footer col2  */}

          <div>
            <h4 className="mb-4 text-[20px] leading-[32px] text-[#D9D9D9]">
              Contents
            </h4>

            <ul className="flex flex-col gap-3">
              <li className="text-[14px] font-varela leading-[20px] text-[#D9D9D9]">
                Project name
              </li>

              <li className="text-[14px] font-varela leading-[20px] text-[#D9D9D9]">
                Timeline
              </li>

              <li className="text-[14px] font-varela leading-[20px] text-[#D9D9D9]">
                Affiliate program
              </li>

              <li className="text-[14px] font-varela leading-[20px] text-[#D9D9D9]">
                FAQS
              </li>
            </ul>
          </div>

          {/* footer col3  */}

          <div>
            <h4 className="mb-4 text-[20px] leading-[32px] text-[#D9D9D9]">
              Our partners
            </h4>

            <ul className="flex flex-col gap-3">
              <li className="text-[14px] leading-[20px] text-[#D9D9D9]">
                Rikkei
              </li>

              <li className="text-[14px] leading-[20px] text-[#D9D9D9]">FPT</li>

              <li className="text-[14px] leading-[20px] text-[#D9D9D9]">
                Kyber Network
              </li>

              <li className="text-[14px] leading-[20px] text-[#D9D9D9]">
                VinaCapital
              </li>
            </ul>
          </div>

          {/* footer col4  */}

          <div>
            <h4 className="mb-4 text-[20px] leading-[32px] text-[#D9D9D9] font-harabaras">
              Contacts
            </h4>

            <ul className="flex flex-col gap-3">
              <li>
                <img src={location} alt="location" />
              </li>

              <li>
                <img src={telephone} alt="telephone" />
              </li>

              <li>
                <img src={email} alt="email" />
              </li>
            </ul>
          </div>
        </div>

        {/* bottom footer */}
        <div className="mt-[114px] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <p className="text-[14px] leading-[20px] font-inter text-transparent19">
              Privacy Policy
            </p>
            <div className="w-[6px] h-[6px] rounded-full bg-transparent19" />
            <p className="text-[14px] leading-[20px] font-inter text-transparent19">
              Terms of Conditions
            </p>
          </div>

          <p className="text-[14px] leading-[20px] font-inter text-transparent19">
            Reflect App, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
