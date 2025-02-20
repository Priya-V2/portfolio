import {
  FaEnvelope,
  FaGithub,
  FaXTwitter,
  FaLinkedin,
  FaArrowDown,
} from "react-icons/fa6";
import { LuMouse } from "react-icons/lu";

const Hero = () => {
  const socialMedium = [
    {
      icon: (
        <FaEnvelope className="text-lg text-white group-hover:text-red-700" />
      ),
      appName: "Email",
      link: "https://mail.google.com/mail/?view=cm&to=priyav2.bct@gmail.com",
    },
    {
      icon: (
        <FaLinkedin className="text-lg text-white group-hover:text-blue-600" />
      ),
      appName: "Linked in",
      link: "https://www.linkedin.com/in/priya-v2",
    },
    {
      icon: <FaGithub className="text-lg text-white group-hover:text-black" />,
      appName: "GitHub",
      link: "https://github.com/priya-V2",
    },
    {
      icon: (
        <FaXTwitter className="text-lg text-white group-hover:text-black" />
      ),
      appName: "X Platform",
      link: "https://x.com/Priya_v2",
    },
  ];

  return (
    <section id="hero" className="bg-secondary">
      <div className="grid grid-col md:grid-cols-1 lg:grid-cols-[3fr_2fr] text-text bg-secondary min-h-screen w-5/6 mx-auto">
        <div className="flex flex-col justify-center px-2 sm:px-6 py-12 xl:pl-16">
          <p className="self-center lg:self-start font-bold text-sm xl:text-base uppercase tracking-wider mb-3 max-w-max border-b-2 border-highlight pb-0.5">
            Hello, I'm
          </p>

          <h1 className="self-center lg:self-start font-extrabold text-xl sm:text-3xl xl:text-4xl text-primary uppercase tracking-wider sm:mb-1 xl:mb-2">
            Priya <span className="text-highlight">Vasudevan,</span>
          </h1>

          <p className="self-center lg:self-start font-semibold text-sm sm:text-lg xl:text-xl tracking-wider uppercase mb-1 xl:mb-2">
            A <span className="font-extrabold">Full Stack</span> Developer
          </p>

          <p className="self-center lg:self-start font-medium text-xs xl:text-sm text-center lg:text-left max-w-xl lg:w-auto mb-4 xl:mb-6">
            Aspiring Blockchain Developer with a strong foundation in the MERN
            stack and a passion for building innovative, user-centric solutions.
            Excited to contribute to cutting-edge projects and continuously
            enhance my technical expertise.
          </p>

          <div className="self-center lg:self-start flex gap-4 font-extrabold text-xs sm:text-sm xl:text-base tracking-wider uppercase mb-6 xl:mb-8">
            <button
              type="button"
              className="text-white bg-highlight w-max px-3 py-1.5 xl:px-4 xl:py-2 rounded hover:bg-orange-700 hover:shadow-custom-shadow hover:cursor-pointer"
            >
              Let's Talk
            </button>

            <button
              type="button"
              className="text-primary border-2 border-primary w-max px-3 py-1.5 xl:px-4 xl:py-2 rounded hover:text-primary hover:shadow-custom-shadow hover:cursor-pointer"
            >
              Download Resume
            </button>
          </div>

          <div className="self-center lg:self-start flex items-center gap-3 text-sm mb-6 xl:mb-8">
            {socialMedium.map((socialMedia, index) => {
              const { icon: Icon, appName, link } = socialMedia;
              return (
                <a
                  key={index}
                  href={link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={`group flex items-center justify-center gap-1 sm:gap-2 bg-primary border-2 border-primary px-2 md:px-4 py-2 w-max rounded-full hover:cursor-pointer hover:shadow-custom-shadow hover:bg-secondary`}
                >
                  {Icon}
                  <span className="hidden md:block text-xs text-white group-hover:text-primary">
                    {appName}
                  </span>
                </a>
              );
            })}
          </div>

          <button
            type="button"
            className="self-center lg:self-start flex items-center gap-2 text-primary border-2 border-primary px-4 py-2 w-max rounded-full hover:shadow-custom-shadow"
          >
            <LuMouse className="text-lg" />
            <span>Scroll Down</span>
            <FaArrowDown />
          </button>
        </div>

        <div className="flex items-center justify-center w-5/5 pt-4 pb-12 lg:p-0">
          <img
            src="/profile-illustration-1.png"
            alt="working girl illustration"
            className="w-96 h-auto xl:w-[512]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

/*
return (
    <section id="hero" className="bg-secondary">
      <div className="grid grid-col md:grid-cols-[3fr_2fr] grid-cols-[5fr_4fr] text-text bg-secondary h-screen w-5/6 mx-auto">
        <div className="flex flex-col justify-center px-6 py-12">
          <p className="font-bold md:text-sm lg:text-base uppercase tracking-wider mb-3 max-w-max border-b-2 border-highlight pb-0.5">
            Hello, I'm
          </p>

          <h1 className="font-extrabold md:text-3xl lg:text-4xl text-primary uppercase tracking-wider md:mb-1 lg:mb-2">
            Priya <span className="text-highlight">Vasudevan,</span>
          </h1>

          <p className="font-semibold md:text-lg lg:text-xl tracking-wider uppercase md:mb-1 lg:mb-2">
            A <span className="font-extrabold">Full Stack</span> Developer
          </p>

          <p className="font-medium md:text-xs lg:text-sm md:mb-4 lg:mb-6">
            Aspiring Blockchain Developer with a strong foundation in the MERN
            stack and a passion for building innovative, user-centric solutions.
            Excited to contribute to cutting-edge projects and continuously
            enhance my technical expertise.
          </p>

          <div className="flex gap-4 font-extrabold md:text-sm lg:text-base tracking-wider uppercase md:mb-6 lg:mb-8">
            <button
              type="button"
              className="text-white bg-highlight w-max px-3 py-1.5 lg:px-4 lg:py-2 rounded hover:bg-orange-700 hover:shadow-custom-shadow hover:cursor-pointer"
            >
              Let's Talk
            </button>

            <button
              type="button"
              className="text-primary border-2 border-primary w-max px-3 py-1.5 lg:px-4 lg:py-2 rounded hover:text-primary hover:shadow-custom-shadow hover:cursor-pointer"
            >
              Download Resume
            </button>
          </div>

          <div className="flex items-center gap-3 text-sm md:mb-6 lg:mb-8">
            {socialMedium.map((socialMedia, index) => {
              const { icon: Icon, appName, appColour } = socialMedia;
              return (
                <a
                  key={index}
                  className={`group flex items-center justify-center gap-2 bg-primary border-2 border-primary px-4 py-2 w-max rounded-full hover:cursor-pointer hover:shadow-custom-shadow hover:bg-secondary`}
                >
                  <Icon
                    className={`text-lg text-white group-hover:${appColour}`}
                  />
                  <span className="text-xs text-white group-hover:text-primary">
                    {appName}
                  </span>
                </a>
              );
            })}
          </div>

          <button
            type="button"
            className="flex items-center gap-2 text-primary border-2 border-primary px-4 py-2 w-max rounded-full hover:shadow-custom-shadow"
          >
            <LuMouse className="text-lg" />
            <span>Scroll Down</span>
            <FaArrowDown />
          </button>
        </div>

        <div className="flex items-center justify-center w-5/5">
          <img
            src="/profile-illustration-1.png"
            alt="working girl illustration"
          />
        </div>
      </div>
    </section>
  );
*/
/*
<div className="grid grid-col  md:grid-cols-[5fr_4fr] lg:grid-cols-[5fr_4fr] lg:p-0 text-text bg-secondary h-screen w-5/6 mx-auto">
        <div className="flex flex-col justify-center px-6 py-12">
          <p className="font-bold text-base uppercase tracking-wider mb-3 max-w-max border-b-2 border-highlight pb-0.5">
            Hello, I'm
          </p>

          <h1 className="font-extrabold text-4xl text-primary uppercase tracking-wider mb-2">
            Priya <span className="text-highlight">Vasudevan,</span>
          </h1>

          <p className="font-semibold text-xl tracking-wider uppercas md:mb-1 mb-2">
            A <span className="font-extrabold">Full Stack</span> Developer
          </p>

          <p className="font-medium text-sm mb-6">
            Aspiring Blockchain Developer with a strong foundation in the MERN
            stack and a passion for building innovative, user-centric solutions.
            Excited to contribute to cutting-edge projects and continuously
            enhance my technical expertise.
          </p>

          <div className="flex gap-4 font-extrabold text-base tracking-wider uppercase mb-8">
            <button
              type="button"
              className="text-white bg-highlight w-max px-4 py-2 rounded hover:bg-orange-700 hover:shadow-custom-shadow hover:cursor-pointer"
            >
              Let's Talk
            </button>

            <button
              type="button"
              className="text-primary border-2 border-primary w-max px-4 py-2 rounded hover:text-primary hover:shadow-custom-shadow hover:cursor-pointer"
            >
              Download Resume
            </button>
          </div>

          <div className="flex items-center gap-3 text-sm mb-8">
            {socialMedium.map((socialMedia, index) => {
              const { icon: Icon, appName, appColour } = socialMedia;
              return (
                <a
                  key={index}
                  className={`group flex items-center justify-center gap-2 bg-primary border-2 border-primary px-4 py-2 w-max rounded-full hover:cursor-pointer hover:shadow-custom-shadow hover:bg-secondary`}
                >
                  <Icon
                    className={`text-lg text-white group-hover:${appColour}`}
                  />
                  <span className="text-xs text-white group-hover:text-primary">
                    {appName}
                  </span>
                </a>
              );
            })}
          </div>

          <button
            type="button"
            className="flex items-center gap-2 text-primary border-2 border-primary px-4 py-2 w-max rounded-full hover:shadow-custom-shadow"
          >
            <LuMouse className="text-lg" />
            <span>Scroll Down</span>
            <FaArrowDown />
          </button>
        </div>

        <div className="flex items-center justify-center w-5/5">
          <img
            src="/profile-illustration-1.png"
            alt="working girl illustration"
            className="md:min-w-96 lg:w-auto"
          />
        </div>
      </div>
*/
