export function ProjectPagination() {
  return (
    <div className="mb-[120px] flex items-center gap-[8px] justify-end">
      <button className="w-[54px] h-[54px] border border-solid border-[#4B7170] rounded-[12px] grid place-items-center">
        <p className="text-[24px] text-white font-bold">1</p>
      </button>

      <button className="w-[54px] h-[54px] border border-solid border-[#4B7170] rounded-[12px] grid place-items-center">
        <p className="text-[24px] text-white font-bold">2</p>
      </button>

      <button className="w-[54px] h-[54px] border border-solid border-[#4B7170] rounded-[12px] grid place-items-center">
        <p className="text-[24px] text-white font-bold">3</p>
      </button>
    </div>
  );
}
