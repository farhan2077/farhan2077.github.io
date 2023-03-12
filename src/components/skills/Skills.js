import { SKILLS } from "./skillsInfo";

export default function Skills() {
  return (
    <div>
      <h2 className="header">skills</h2>
      <section className="mt-6 md:mt-10 ml-0 md:ml-28 text-primary grid gap-y-3 md:gap-y-1.5">
        {SKILLS.map((skill) => (
          <div className="flex flex-col md:flex-row gap-x-16">
            <div className="font-bold tracking-tight w-28 md:font-semibold">
              {skill.type}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10">
              {skill.examples.map((example) => (
                <div key={example.id} className="w-40">
                  {example.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
