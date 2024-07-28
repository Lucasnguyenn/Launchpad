export function SectionContainer({ children }: { children: JSX.Element }) {
  return (
    <section className="relative max-w-[1202px] 2xl:max-w-full px-4 mx-auto 2xl:mx-[128px]">
      {children}
    </section>
  );
}
