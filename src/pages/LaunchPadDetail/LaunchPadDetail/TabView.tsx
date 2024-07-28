import { EventInfo, motion, useSpring, useTransform } from 'framer-motion';
import { isEqual } from 'lodash';
import { memo, useEffect, useState } from 'react';

const data = [
  { id: 0, title: 'Text data thu 1' },
  { id: 1, title: 'Text data thu 12343' },
  { id: 3, title: 'Text data thu 12' },
];

function NameComponent() {
  const [activeTab, setActiveTab] = useState(0);
  const translateX = useSpring(0, { stiffness: 50, damping: 10 });
  const widthElement = useSpring(10);

  const [buttonLayout, setButtonLayout] = useState<Record<string, DOMRect>>({});

  const rotateX = useTransform(translateX, (x) => x);
  const positionX = buttonLayout?.[0]?.x;

  useEffect(() => {
    if (Object.keys(buttonLayout).length === 0) {
      return;
    }

    widthElement.set(buttonLayout[activeTab].width);
  }, [activeTab, buttonLayout, widthElement]);
  return (
    <div>
      <ul className="flex flex-row items-center gap-10 relative">
        {data.map((item, idx) => {
          return (
            <motion.li
              key={idx}
              className={`text-common ${activeTab === idx ? 'text-[red]' : ''}`}
              onClick={() => {
                return setActiveTab(idx);
              }}
              onHoverStart={(e: any, info: EventInfo) => {
                const width = e.target.getBoundingClientRect().x;

                widthElement.set(e.target.getBoundingClientRect().width);
                translateX.set(width - positionX);
              }}
              onHoverEnd={(e: any) => {
                const elementActive = buttonLayout[activeTab];

                widthElement.set(elementActive.width);
                translateX.set(elementActive.x - positionX);
              }}
              ref={(el) => {
                if (!el) {
                  return;
                }
                const layout = el.getBoundingClientRect();

                setButtonLayout((v) => ({ ...v, [idx]: layout }));
              }}
            >
              {item.title}
            </motion.li>
          );
        })}
      </ul>

      <motion.div
        className="h-[2px] min-w-[50px] bg-[red] absolute"
        style={{ x: rotateX, width: widthElement }}
      />

      <div className="mb-10"></div>
    </div>
  );
}

export const Name = memo(NameComponent, isEqual);
