import ValueCard from "./ValueCard";
import { valueList } from "../../data/studyData";

export default function ValueSection() {
  return (
    <section className="pb-16 space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">이 프로젝트에서 배우는 것</h2>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {valueList.map((value) => (
          <ValueCard
            key={value.title}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </section>
  );
}