import SocialMedia from "./SocialMedia";
import PersonalGrowthDetails from "./PersonalGrowthDetails";

function ContentsUI() {
  const personalGrowthData = [
    { title: "Years of experience", endNumber: 2, suffix: "+" },
    { title: "Success rate", endNumber: 80, suffix: "%" },
    { title: "Project completed", endNumber: 249, suffix: "+" },
  ];

  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-white font-semibold text-base"
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-white font-extrabold text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Arun lal <br />
              Software Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-violet-700 text-white font-medium flex items-center gap-2 hover:bg-blue-900 ease-in duration-300 py-2 px-4 rounded-lg">
                  <i className="ri-mail-line"></i>Hire me
                </button>
              </a>
              <a href="#portfolio">
                <button className="text-white text-base border-b border-solid font-medium border-blue-900 flex items-center gap-2">
                  <i className="ri-mail-line"></i>see portfolio
                </button>
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-white font-medium text-sm leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i className="ri-apps-line"></i>
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              voluptatem nam explicabo quae eveniet modi accusamus voluptatibus
              nisi alias et deleniti ratione, eligendi, magni dolorum molestias,
              dolor possimus ducimus. Molestiae!
            </p>
            <SocialMedia />
          </div>
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center">
              <img
                src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_people_avatar_man_boy_curly_hair_icon_159362.png"
                alt=""
              />
            </figure>
          </div>
          <PersonalGrowthDetails collections={personalGrowthData} />
        </div>
      </div>
    </section>
  );
}

export default ContentsUI;
