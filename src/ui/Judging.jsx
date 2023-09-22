import whiteStar from "../assets/whiteStar.svg";
import greyStar from "../assets/greyStar.svg";
import purpleStar from "../assets/starDarkPurple.svg";
import judgeImg from "../assets/judging.png";
import Criteria from "./Criteria";
import PrimaryBtn from "./PrimaryBtn";
import TwinkleStar from "./TwinkleStar";

function Judging() {
  return (
    <div className="border-b-borderColor pb-59px relative flex flex-col items-center overflow-hidden border-b-[1px] pl-0 pr-0 pt-[75px] sm:flex-row sm:items-start sm:gap-x-[40px] sm:pb-[100px] sm:pl-[66px] sm:pr-[105px]">
      <TwinkleStar className="left-[733px] top-[760px]" star={whiteStar} />
      <TwinkleStar className="left-[215px] top-[78px]" star={purpleStar} />
      <TwinkleStar className="left-[470px] top-[499px]" star={greyStar} />
      <img
        src={judgeImg}
        alt=""
        className="mt-0 h-[275px] w-[332px] sm:mt-[95px] sm:h-[622px] sm:w-[710px]"
      />
      <div className="max-w-[303px] text-center sm:max-w-[535px] sm:text-left">
        <h1 className="mb-4 text-xl font-bold text-white sm:mb-[21px] sm:text-[32px]">
          Judging Criteria
          <br /> <span className="text-primaryColor">Key attributes</span>
        </h1>
        <div className="mb-7 flex flex-col gap-y-5 sm:mb-10 sm:gap-y-[22px]">
          <Criteria criteria="Innovation and Creativity">
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </Criteria>
          <Criteria criteria="Functionality">
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </Criteria>
          <Criteria criteria="Impact and Relevance">
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </Criteria>
          <Criteria criteria="Technical Complexity">
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </Criteria>
          <Criteria criteria="Adherence to Hackathon Rules">
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </Criteria>
        </div>
        <PrimaryBtn>Read More</PrimaryBtn>
      </div>
    </div>
  );
}

export default Judging;
