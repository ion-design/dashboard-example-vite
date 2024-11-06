// Generated with Ion on 11/5/2024, 12:43:53 PM
// Figma Link: https://www.figma.com/design/BsgE00bYWTmwm4RY0WmYN6?node-id=1:3282
import clsx from "clsx";
type TokenMetricProps = {
  metric?: string;
  badge: React.ReactNode;
  title?: string;
  className?: string;
};

function TokenMetric({
  metric = "Metric",
  badge,
  title = "Title",
  className = "",
}: TokenMetricProps) {
  return (
    <div
      className={clsx(
        "bg-white w-[240px] flex flex-col justify-center gap-1 p-5 rounded-[10px] border border-[#d2d7e1]",
        className
      )}
    >
      <div className="text-sm text-[#0b0707]">{title}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-xl font-semibold text-[#0b0707]">{metric}</div>
        {badge}
      </div>
    </div>
  );
}
export default TokenMetric;
