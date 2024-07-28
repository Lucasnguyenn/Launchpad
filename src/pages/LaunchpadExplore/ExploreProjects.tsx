import ProjectListTable from './ProjectListTable';

export function ExploreProjects() {
  return (
    <section className="relative max-w-[1202px] 2xl:max-w-full px-4 mx-auto 2xl:mx-[128px] mb-[116px]">
      <h2 className="font-russo text-[40px] leading-[54px] explore-title mb-[36px]">
        EXPLORE PROJECTS
      </h2>

      <ProjectListTable />
    </section>
  );
}
