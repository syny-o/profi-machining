import Image from "next/image";

const coopData = [
  {
    img: "/assets/img/cooperation/abb.png",
  },
  {
    img: "/assets/img/cooperation/tawesco.jpg",
  },
  {
    img: "/assets/img/cooperation/inox.png",
  },
  {
    img: "/assets/img/cooperation/liaz.png",
  },
  {
    img: "/assets/img/cooperation/orise.png",
  },
];

const Cooperation = () => {
  return (
    <section className="mt-16 xl:mt-32 pt-8 xl:pt-16 bg-primary">
      <div className="container mx-auto">
        <div className="flex xl:flex-row items-center justify-center flex-wrap gap-8">
          {coopData.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full h-[50px] xl:h-[80px] flex-auto xl:flex-1 relative overflow-hidden group flex justify-center items-center"
              >
                <Image
                  src={item.img}
                  fill
                  className="object-contain"
                  alt=""
                  // quality={100}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cooperation;
