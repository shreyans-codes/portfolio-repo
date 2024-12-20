import { Card, CardFooter, Image } from "@nextui-org/react";

const CommonSkillsetSection = () => {
  const skills = [
    {
      icon: "/icons/react.png",
      name: "React JS",
    },
    {
      icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Findiciatraining.com%2Fwp-content%2Fuploads%2F2020%2F05%2Fspring-boot-logo.png%3Ffit%3D856%252C768%26ssl%3D1&f=1&nofb=1&ipt=bc2169b625e017a172492a0e379a13b2eadb2e7d534de423866803d0a5054623&ipo=images",
      name: "Spring Boot",
    },
    {
      icon: "/icons/mysql.png",
      name: "MySQL",
    },
    {
      icon: "/icons/docker.png",
      name: "Docker",
    },
    {
      icon: "/icons/python.png",
      name: "Python",
    },
    {
      icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wedigtech.com%2Fimg%2Fflutter-logo.png&f=1&nofb=1&ipt=ecba167a9355fdab5e4e8dd8f138dd523e5eb1d487726a48ea55c70984aff73f&ipo=images",
      name: "Flutter",
    },
    {
      icon: "/icons/redux.png",
      name: "Redux",
    },
    {
      icon: "/icons/git.png",
      name: "Git",
    },
    {
      icon: "/icons/jenkins.png",
      name: "Jenkins",
    },
    {
      icon: "/icons/aws.png",
      name: "AWS",
    },
    {
      icon: "/icons/gcp.png",
      name: "Google Cloud Platform",
    },
  ];
  return (
    <div>
      {/* Row 1: Heading */}
      <section className="w-full flex flex-wrap justify-between items-center">
        <article className="common-prose">
          <h3>My Skills</h3>
        </article>
        {/* <Button color="primary" variant="flat">
          See All
        </Button> */}
      </section>
      {/* Row 2: All Skill Cards */}
      <section className="grid grid-cols-6 gap-2">
        {skills.map((skill, index) => {
          return (
            <Card
              key={index}
              isFooterBlurred
              className="border-none"
              radius="lg"
            >
              <Image
                alt="React"
                className="object-contain"
                height={150}
                src={skill.icon}
                width={200}
                isZoomed
              />
              <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny dark:text-white/80 text-gray-800">
                  {skill.name}
                </p>
              </CardFooter>
            </Card>
          );
        })}
      </section>
    </div>
  );
};

export default CommonSkillsetSection;
