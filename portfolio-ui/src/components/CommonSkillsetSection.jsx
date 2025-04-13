import {
  Button,
  Card,
  CardFooter,
  Chip,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { useState } from "react";
import { projects } from "../variables/projects";
import IconArrowRight from "../icons/IconArrowRight";

const CommonSkillsetSection = () => {
  const [skilsModal, setSkilsModal] = useState(-1);
  const skills = [
    {
      id: "react",
      icon: "/icons/react.png",
      name: "React JS",
      description:
        "A JavaScript library for building user interfaces. It helps create dynamic, fast, and responsive front-end web applications by efficiently updating the DOM based on state changes.",
      tags: ["Frontend", "Library", "Framework"],
    },
    {
      id: "spring",
      icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Findiciatraining.com%2Fwp-content%2Fuploads%2F2020%2F05%2Fspring-boot-logo.png%3Ffit%3D856%252C768%26ssl%3D1&f=1&nofb=1&ipt=bc2169b625e017a172492a0e379a13b2eadb2e7d534de423866803d0a5054623&ipo=images",
      name: "Spring Boot",
      description:
        "A Java-based framework that simplifies the development of production-ready applications. It streamlines setup and configuration, reducing boilerplate code, and solves the common problem of building enterprise-scale applications quickly.",
      tags: ["Backend", "Framework"],
    },
    {
      id: "mysql",
      icon: "/icons/mysql.png",
      name: "MySQL",
      description:
        "An open-source relational database management system. It provides a structured way to store, retrieve, and manage data, solving the problem of efficiently querying large datasets and maintaining data integrity.",
      tags: ["Database"],
    },
    {
      id: "golang",
      icon: "/icons/go.png",
      name: "Golang",
      description:
        "A statically typed, compiled programming language designed by Google. Known for its simplicity, performance, and strong concurrency support, it solves the problem of building scalable and high-performance applications, especially in systems programming and backend services.",
      tags: ["Backend", "Language"],
    },
    {
      id: "docker",
      icon: "/icons/docker.png",
      name: "Docker",
      description:
        "A platform for developing, shipping, and running applications in containers. It solves the problem of environment consistency, ensuring apps work seamlessly across different machines and environments.",
      tags: ["DevOps", "Cloud"],
    },
    {
      id: "python",
      icon: "/icons/python.png",
      name: "Python",
      description:
        "A high-level programming language known for its readability and versatility. It is widely used in web development, data analysis, machine learning, and automation, solving the problem of rapid development and ease of integration.",
      tags: ["Backend", "Library"],
    },
    {
      id: "flutter",
      icon: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wedigtech.com%2Fimg%2Fflutter-logo.png&f=1&nofb=1&ipt=ecba167a9355fdab5e4e8dd8f138dd523e5eb1d487726a48ea55c70984aff73f&ipo=images",
      name: "Flutter",
      description:
        "A UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. It solves the problem of having to write separate code for different platforms.",
      tags: ["Frontend", "Framework"],
    },
    {
      id: "redux",
      icon: "/icons/redux.png",
      name: "Redux",
      description:
        "A state management library for JavaScript apps, often used with React. It helps manage the state of an application in a predictable way, solving the problem of inconsistent state across different components.",
      tags: ["Frontend", "Library"],
    },
    {
      id: "git",
      icon: "/icons/git.png",
      name: "Git",
      description:
        "A distributed version control system that allows multiple developers to collaborate on code. It solves the problem of tracking changes, managing code versions, and resolving conflicts in large teams.",
      tags: ["DevOps"],
    },
    {
      id: "jenkins",
      icon: "/icons/jenkins.png",
      name: "Jenkins",
      description:
        "An open-source automation server that helps automate various aspects of software development, including building, testing, and deploying. It solves the problem of continuous integration and delivery, making software development more efficient.",
      tags: ["CI CD", "DevOps"],
    },
    {
      id: "aws",
      icon: "/icons/aws.png",
      name: "AWS",
      description:
        "Amazon Web Services is a cloud platform offering a wide range of services, including compute, storage, and networking. It solves the problem of managing infrastructure at scale and provides flexible, pay-as-you-go pricing.",
      tags: ["Cloud", "DevOps"],
    },
    {
      id: "gcp",
      icon: "/icons/gcp.png",
      name: "Google Cloud Platform",
      description:
        "Google Cloud offers a suite of cloud computing services, including computing, data storage, machine learning, and analytics. It solves the problem of scalable infrastructure and advanced analytics tools for businesses.",
      tags: ["Cloud", "DevOps"],
    },
  ];

  return (
    <div id="sage-skills" className="p-4">
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
      <section className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {skills.map((skill, index) => {
          const projectList = projects.filter((project) =>
            project.tech.includes(skill.id)
          );
          return (
            <div key={index}>
              <Card
                isFooterBlurred
                className="border-none"
                radius="lg"
                isPressable
                onPress={() => setSkilsModal(index)}
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
              <Modal
                isOpen={skilsModal === index}
                onOpenChange={() =>
                  skilsModal === index
                    ? setSkilsModal(-1)
                    : setSkilsModal(index)
                }
                scrollBehavior="inside"
              >
                <ModalContent>
                  <ModalHeader>{skill.name}</ModalHeader>
                  <ModalBody>
                    <section>
                      <div className="flex flex-wrap gap-2">
                        {skill.tags.map((tag) => (
                          <Chip key={tag} color="primary" variant="flat">
                            {tag}
                          </Chip>
                        ))}
                      </div>
                      {skill.description}
                      {projectList.length > 0 ? (
                        <div className="common-prose">
                          <h4 className="my-2">Projects</h4>
                          {projectList.map((project) => {
                            return (
                              <div
                                key={project.name}
                                className="flex justify-between py-2"
                                // onClick={() => {
                                //   window.open(project.outLink, "_blank");
                                // }}
                              >
                                {project.name}
                                <Button
                                  size="sm"
                                  isIconOnly
                                  color="primary"
                                  variant="flat"
                                  onPress={() => {
                                    window.open(project.outLink, "_blank");
                                  }}
                                >
                                  <IconArrowRight />
                                </Button>
                              </div>
                            );
                          })}
                        </div>
                      ) : null}
                    </section>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default CommonSkillsetSection;
