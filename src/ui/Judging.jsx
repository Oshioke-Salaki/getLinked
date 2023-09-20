import whiteStar from "../assets/whiteStar.svg";
import greyStar from "../assets/greyStar.svg";
import purpleStar from "../assets/starDarkPurple.svg";
import judgeImg from "../assets/judging.png";
import Criteria from "./Criteria";
import PrimaryBtn from "./PrimaryBtn";

function Judging() {
  return (
    <div className="border-b-borderColor relative flex gap-x-[40px] overflow-hidden border-b-[1px] pb-[100px] pl-[66px] pr-[119px] pt-[78px]">
      <img
        src={whiteStar}
        alt=""
        className="absolute left-[600px] top-[430px]"
      />
      <img
        src={greyStar}
        alt=""
        className="absolute left-[439px] top-[120px]"
      />
      <img
        src={purpleStar}
        alt=""
        className="absolute left-[439px] top-[120px]"
      />
      <img src={judgeImg} alt="" className="h-[622px] w-[622px] self-end" />
      <div>
        <h1 className="mb-[21px] text-[32px] font-bold text-white">
          Judging Criteria
          <br /> <span className="text-primaryColor">Key attributes</span>
        </h1>
        <div className="mb-10 flex flex-col gap-y-[22px]">
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
