import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Tooltip,
} from "@nextui-org/react";
import IconArrowRight from "./../icons/IconArrowRight";

const CommonWorkSection = () => {
  const workDetails = [
    {
      name: "Stock Scrapper",
      outLink: "https://github.com/shreyans-codes/stockscrapper",
      language: "Python",
      link: "https://bsmedia.business-standard.com/_media/bs/img/misc/2023-03/21/full/market-stocks-stock-market-trading-stock-market-1679390474-25992620.jpg?im=FeatureCrop,size=(826,465)",
      type: "Backend",
    },
  ];
  return (
    <div className="p-4">
      {/* Row 1: Heading */}
      <section className="w-full flex flex-wrap justify-between items-center">
        <article className="common-prose">
          <h3>My Work</h3>
        </article>
        <Button
          color="primary"
          variant="flat"
          onPress={() => {
            window.open("https://github.com/shreyans-codes", "_blank");
          }}
        >
          See All
        </Button>
      </section>
      {/* Row 2: All Work Cards */}
      <section className="grid grid-cols-2">
        {workDetails.map((item, index) => {
          return (
            <Card key={index} className="py-4 w-full bg-white" isBlurred>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <div className="flex justify-between w-full">
                  <p className="text-tiny uppercase font-bold">{item.type}</p>
                  <Tooltip content="Go to project">
                    <Button
                      size="sm"
                      isIconOnly
                      color="primary"
                      variant="flat"
                      onPress={() => {
                        window.open(item.outLink, "_blank");
                      }}
                    >
                      <IconArrowRight />
                    </Button>
                  </Tooltip>
                </div>
                <small className="text-default-500">{item.language}</small>
                <h4 className="font-bold text-large">{item.name}</h4>
              </CardHeader>
              <CardBody className="overflow-visible items-center">
                <Image
                  alt="Card background"
                  className="object-contain sm:object-fill rounded-xl"
                  src={item.link}
                  width={"100%"}
                  // height={100}
                  isZoomed
                />
              </CardBody>
            </Card>
          );
        })}
      </section>
    </div>
  );
};

export default CommonWorkSection;
