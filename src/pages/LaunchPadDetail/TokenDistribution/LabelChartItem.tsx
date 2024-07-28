const labelColorName: Record<number, string> = {
  0: '#82EFFF',
  1: '#B7FF5C',
  2: '#FFE249',
  3: '#FF8956',
  4: '#FF8956',
  5: '#7F61FE',
};

export function LabelChartItem({
  title,
  value,
  index,
}: {
  title: string;
  value: string;
  index: number;
}) {
  return (
    <div key={index} className="flex items-center gap-[5px]">
      <div
        className={`w-5 h-[35px] rounded-[5px]`}
        style={{ background: `${labelColorName[index]}` }}
      />
      <div>
        <p className="text-sm text-gray1 font-medium">{title}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}
