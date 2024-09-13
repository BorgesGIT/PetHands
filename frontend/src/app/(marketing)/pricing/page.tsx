import { plans } from "./_components/plans";
import SubCard from "./_components/subs-card";

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h2 className="text-3xl font-bold tracking-tighter">
              Pricing Plans
            </h2>
            <p className="text-muted-foreground">
              Choose the plan that fits your needs.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8">
          {plans.map((plan, index) => (
            <SubCard {...plan} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
