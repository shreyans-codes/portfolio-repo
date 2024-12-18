import { Button } from "@nextui-org/react";

const CommonSkillsetSection = () => {
  return (
    <div>
      {/* Row 1: Heading */}
      <section className="w-full flex flex-wrap justify-between items-center">
        <article className="common-prose">
          <h3>My Skills</h3>
        </article>
        <Button color="primary" variant="flat">
          See All
        </Button>
      </section>
      {/* Row 2: All Skill Cards */}
      <section className="grid grid-cols-2"></section>
    </div>
  );
};

export default CommonSkillsetSection;
