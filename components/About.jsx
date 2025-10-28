import Image from "next/image";
import Pretitle from "./Pretitle";
import Button from "./Button";

const About = () => {
  return (
    <div className="pt-16 xl:pt-32" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          {/* TEXT */}
          <div className="flex-1">
            <div className="max-w-[540px]">
              <Pretitle text="O nás" />
              <h2 className="h2 mb-6">Kdo jsme a co děláme</h2>
              <p className="mb-11">
                Jsme dynamický tým odborníků zaměřených na poskytování
                špičkových služeb v oblasti webového vývoje a digitálního
                marketingu. Naším cílem je pomáhat firmám růst prostřednictvím
                inovativních řešení na míru.
              </p>
              <div className="w-max flex flex-col text-right mb-10">
                <Image src="/assets/img/about/signature.svg" width={154} height={38} alt="Signature" />
                <p className="mt-3 font-primary italic">Jiří Kysela, jednatel</p>
              </div>
              {/* BTN */}
              <Button text="Kontaktovat" />
            </div>
          </div>
          {/* IMAGE */}
          <div className="hidden flex-1 xl:flex xl:justify-center">
            <div className="xl:w-[444px] xl:h-[493px] relative flex justify-center items-center">
              {/* BG */}
              <div className="xl:flex w-[450px] h-[450px] bg-accent absolute -z-10 rounded-full"></div>
              <Image
                // src="/assets/img/about/img.jpg"
                src="/assets/img/about/profi-machining.png"
                width={345}
                height={304}
                alt="About Image"

                
              />


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
