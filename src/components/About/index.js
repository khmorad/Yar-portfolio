import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
// import LearningCode from "../../assets/images/learn-coding-clipart.svg";
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default function About() {
  
  const getDate = () => {
    //changing the age without hard coding it
    var dob = new Date("09/11/2000");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };
  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col text-center gap-5 text-black text-lg  font-normal"
    >
      <div className="head text-5xl mt-12 font-bold" data-aos={"slide-down"}>
        About Me
      </div>
      <div className="flex flex-row  gap-6 ml-8">
        <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
          <h3 className="text-3xl font-medium" data-aos={"fade-left"}>
            I'm <span className="text-yellow-600">Khashayar Morapdour,</span> an aspiring Software Developer
          </h3>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify"
            data-aos={"fade-left"}
          >
            I am {getDate()}-years-old student at San Jose State University, pursuing a Bachelor's degree with a strong focus on computer science. Alongside my academic pursuits, I excel in sports, piano, and have a deep passion for creating web applications. This diverse skill set has honed my discipline, attention to detail, and ability to thrive under pressure traits essential in software engineering. 
          </p>
          <p
            className="text-justify leading-7 text-slate-900"
            data-aos={"fade-right"}
          >
            I am currently looking for Internships. I have over 5 years exprience in coding and I have attended many <a className= "text-yellow-600"href="https://devpost.com/woddyowl">hackathons</a> which in the past I have worked with React.js, Next.js, TypeScript, Python and many more mentioned one my <a className= "text-yellow-600"href="#resume">resume</a>. I am
            also looking to collaborate in open-source projects.
          </p>
        </div>

        <div
          class="relative flex-auto w-32   sm:rounded-lg  pl-4"
          data-aos={"slide-left"}
        >
          {/* <img
            src={LearningCode}
            alt="Learning Code"
            className="motion-safe:animate-zoomy"
          /> */}
          <div className="motion-safe:animate-zoomy">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: "350px" }}
            />
          </div>
          <button className="py-3 mt-5 text-white mx-auto px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 animate-zoomy">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1ejQsqtKWfynckolW3CE0TMHcRIvBWp-O/view?usp=sharing"
            >
              Download Resume
              <DownloadIcon />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
