import { timelineInfo } from "../data/TimelineInfo";
import line from "../assets/line.svg";
import TwinkleStar from "./TwinkleStar";
import whiteStar from "../assets/whiteStar.svg";
import greyStar from "../assets/greyStar.svg";
import darkPurpleStar from "../assets/starDarkPurple.svg";

const TimelineSection = () => {
  return (
    <section id="timeline" className="relative w-full pb-[109px] pt-[72px]">
      <div className="overflow-hidden">
        <div className="flex w-full flex-col items-center px-[49px] sm:px-0">
          <div className="flex flex-col gap-y-[21px] sm:gap-y-4">
            <h2 className="w-full text-center text-xl font-bold leading-[26px] text-white sm:text-3xl sm:leading-9">
              Timeline
            </h2>
            <p className="text-center text-sm font-normal text-white">
              Here is the breakdown of the time we anticipate{" "}
              <br className="hidden sm:inline-block" /> using for the upcoming
              event.
            </p>
          </div>
          <div className="mt-[56px] flex w-full flex-col items-center justify-center gap-[27px] sm:mt-[91px] sm:gap-[40px]">
            {/* DESKTOP VARIANT*/}
            {timelineInfo.map((item, i) => (
              <div
                key={i}
                className={` hidden w-full items-end justify-center gap-20 text-white sm:flex ${
                  item.reverse === false ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`flex w-full flex-col gap-2 ${
                    item.reverse === false
                      ? "items-start justify-start"
                      : "items-end justify-end"
                  }`}
                >
                  <h2
                    className={`max-w-[450px] font-mons text-lg font-bold text-primaryColor lg:text-2xl ${
                      item.reverse === false ? "text-left" : "text-right"
                    }`}
                  >
                    {item.topic}
                  </h2>
                  <p
                    className={`max-w-[400px] font-mons text-sm font-normal text-white ${
                      item.reverse === false ? "text-left" : "text-right"
                    }`}
                  >
                    {item.content}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <img
                    src={line}
                    alt="-"
                    className="tab:h-[137px] h-[77px] object-contain"
                  />
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-btnGradient font-mons text-2xl font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <p
                  className={`flex w-full text-lg font-bold text-primaryColor lg:text-2xl ${
                    item.reverse === false
                      ? "items-end justify-end text-left"
                      : "items-start justify-start text-right "
                  }`}
                >
                  {item.date}
                </p>
              </div>
            ))}
            {/* MOBILE vARIANT*/}
            {timelineInfo.map((item, i) => (
              <div
                key={i}
                className="flex w-full items-start justify-start gap-4 text-white sm:hidden"
              >
                <div className="flex h-full flex-col items-center gap-1">
                  <img src={line} alt="-" className="h-[77px]" />
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-btnGradient text-sm font-bold text-white md:text-lg">
                    {i + 1}
                  </span>
                </div>
                <div className="flex h-full flex-col">
                  <div className="flex flex-col items-start justify-start gap-2">
                    <h2 className="text-primary text-sm font-bold text-[#d434f3] sm:text-lg">
                      {item.topic}
                    </h2>
                    <p className="text-sm font-normal">{item.content}</p>
                  </div>
                  <p className="text-primary justify-self-end text-sm font-bold text-[#d434f3] sm:text-lg">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STARS */}
      <TwinkleStar
        className="left-[82px] top-[188px] h-[16px] w-[14px] sm:left-[338px] sm:top-[226px] sm:h-auto sm:w-auto"
        star={darkPurpleStar}
      />
      <TwinkleStar
        className="left-[285px] top-[568px] h-[12px] w-[10px] sm:left-[1220px] sm:top-[680px] sm:h-auto sm:w-auto"
        star={whiteStar}
      />
      <TwinkleStar
        className="left-[22px] top-[1003px] h-[12px] w-[10px] sm:left-[177px] sm:top-[1160px] sm:h-auto sm:w-auto"
        star={greyStar}
      />
    </section>
  );
};

export default TimelineSection;
