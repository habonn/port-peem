import Head from "next/head";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-scroll";
import deved from "../public/avatar.png";
// import code from "../public/code.png";
// import design from "../public/design.png";
// import iconhead from "../public/";
import thcredit from "../public/logo-thai-credit.jpeg";
import metro from "../public/metro.png";
import goingjesse from "../public/goingjesse.png";
import Image from "next/image";
// import web1 from "../public/web1.png";
// import web2 from "../public/web2.png";
// import web3 from "../public/web3.png";
// import web4 from "../public/web4.png";
// import web5 from "../public/web5.png";
// import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by PEEM" />
        <link rel="icon" type="image/x-icon" href="code.png" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-700 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 -mb-12 flex justify-between dark:text-white">
            {/* <h1 className="font-burtons text-xl">developedbyed</h1> */}
            <div className="text-2xl flex justify-center gap-6 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/habonn">
                <AiFillGithub />
              </a>
              <a href="https://www.linkedin.com/in/teerut-bunyarat-94aa38247/">
                <AiFillLinkedin />
              </a>
              {/* <AiFillYoutube /> */}
            </div>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              {/* <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li> */}
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="font-burtons text-4xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-4xl">
              Teerut Bunyarat
            </h2>
            <h3 className="text-md py-2 dark:text-white md:text-md">
              Front-End Developer
            </h3>
            <p className="text-sm italic py-5 leading-12 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-sm">
              Hi, I’m Peem! I’m a web developer. In a nutshell, I create
              websites that help organizations address business challenges and
              meet their needs. My expertise lies within front-end web apps, and
              the main languages in my tech stack are JavaScript, React, and of
              course HTML/CSS. Now you can see My
              {/* <a href="#experience" className="text-teal-500">Work Experience!!!</a> */}
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
                className="text-teal-500 hover:cursor-pointer"
              >
                {" "}
                Work Experience!!!
              </Link>
            </p>
            {/* <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div> */}
            <div className="xs:mx-auto -ml-20 from-teal-500 rounded-full w-80 h-80 dark:shadow-[80px_0px_0px_8px_rgba(255,255,0)] relative overflow-hidden mt-5 md:h-93 md:w-93">
              <Image
                src={deved}
                alt="pic-peem"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>
        {/* <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section> */}
        <section id="experience" className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Work Experience</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a web developer, I’ve done
              remote work for
              <span className="text-teal-500"> agencies </span>
              develop for <span className="text-teal-500">organizations </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p> */}
          </div>
          <div className="antialiased text-gray-800">
            <div className="relative container mx-auto px-6 flex flex-col space-y-8">
              <div className="absolute z-0 w-2 h-full bg-white dark:bg-[rgba(205,205,205,1)] shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
              <div className="relative z-10">
                <div className="timeline-img">
                  <Image
                    src={thcredit}
                    // width={100}
                    // height={100}
                    // layout="fill"
                    alt={"thai-credit"}
                    className="timeline-img"
                  />
                </div>
                {/* <img
                  src="https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
                  alt=""
                  className="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white"
                /> */}
                <div className="timeline-container">
                  <div className="timeline-point" aria-hidden="true"></div>
                  <div className="bg-white p-6  rounded-md shadow-md bg-gradient-to-b from-teal-500">
                    <span className="font-bold text-white text-sm tracking-wide">
                      May 2022 to Present
                    </span>
                    <h1 className="text-2xl font-bold pt-1">
                      <span> Thai Credit Retail Bank</span>
                      <span className="text-lg font-normal">
                        , Bangkok, Thailand
                      </span>{" "}
                    </h1>
                    <h3 className="px-2 text-white bg-gradient-to-r from-blue-400 rounded">
                      Front-End Developer
                    </h3>
                    <p className="pt-1">
                      - Developed backoffice web applications using reactjs,
                      nextjs for use with users within banking organizations.
                    </p>
                    <p className="pt-1">
                      - Optimized and supported on backoffice project to reduce
                      problems.
                    </p>
                    <p className="pt-1">
                      - Collaborated with the backend team to construct &
                      optimize various complex algorithms improving performance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative z-10">
                <div className="timeline-img">
                  <Image
                    src={metro}
                    width={93}
                    height={93}
                    alt={"metro1"}
                    className="rounded-full"
                  />
                </div>
                {/* <img
                  src="https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
                  alt=""
                  className="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white"
                /> */}
                <div className="timeline-container timeline-container-left">
                  <div
                    className="timeline-point timeline-pointer-left"
                    aria-hidden="true"
                  ></div>

                  <div className="bg-white p-6  rounded-md shadow-md bg-gradient-to-b from-teal-500">
                    <span className="font-bold text-white text-sm tracking-wide">
                      Jan 2021 to Apr 2022
                    </span>
                    <h1 className="text-2xl font-bold pt-1">
                      <span> Metro Systems</span>
                      <span className="text-lg font-normal">
                        , Bangkok, Thailand
                      </span>{" "}
                    </h1>
                    <h3 className="px-2 text-white bg-gradient-to-r from-blue-400 rounded">
                      Front-End Developer
                    </h3>
                    <p className="pt-1">
                      - Designed & developed to create a reservation web
                      application for organizations using angularjs connected
                      with sharepoint.
                    </p>
                    <p className="pt-1">
                      - Optimized the old project through the reduction of
                      unnecessary calls to the back-end from sharepoint inturn
                      reducing startup time.
                    </p>
                    <p className="pt-1">
                      - Research work with new microsoft product for supported
                      organizations E.g. Share point, Viva, Power Apps, Power BI
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative z-10">
                <div className="timeline-img">
                  <Image
                    src={goingjesse}
                    width={93}
                    height={93}
                    alt={"going"}
                    className="rounded-full"
                  />
                </div>
                {/* <img
                  src="https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
                  alt=""
                  className="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white"
                /> */}
                <div className="timeline-container">
                  <div className="timeline-point" aria-hidden="true"></div>
                  <div className="bg-white p-6  rounded-md shadow-md bg-gradient-to-b from-teal-500">
                    <span className="font-bold text-white text-sm tracking-wide">
                      Jul 2020 to Oct 2020
                    </span>
                    <h1 className="text-2xl font-bold pt-1">
                      <span> Goingjesse</span>
                      <span className="text-lg font-normal">
                        , Bangkok, Thailand
                      </span>{" "}
                    </h1>
                    <h3 className="px-2 text-white bg-gradient-to-r from-blue-400 rounded">
                      Front-End Developer
                    </h3>
                    <p className="pt-1">
                      - Designed and implemented a web-based application to
                      provide KPI systems.
                    </p>
                    <p className="pt-1">
                      - Created new features, functionality and capabilities on
                      the KPI systems sites using crystal report with react
                      component.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative z-10">
                <div className="timeline-img">
                  <Image
                    src={metro}
                    width={93}
                    height={93}
                    alt={"metro-2"}
                    className="rounded-full"
                  />
                </div>
                {/* <img
                  src="https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
                  alt=""
                  className="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white"
                /> */}
                <div className="timeline-container timeline-container-left">
                  <div
                    className="timeline-point timeline-pointer-left"
                    aria-hidden="true"
                  ></div>

                  <div className="bg-white p-6  rounded-md shadow-md bg-gradient-to-b from-teal-500">
                    <span className="font-bold text-white text-sm tracking-wide">
                      Dec 2019 to Mar 2020
                    </span>
                    <h1 className="text-2xl font-bold pt-1">
                      <span> Metro Systems</span>
                      <span className="text-lg font-normal">
                        , Bangkok, Thailand
                      </span>{" "}
                    </h1>
                    <h3 className="px-2 text-white bg-gradient-to-r from-blue-400 rounded">
                      Front-End Developer, Internship
                    </h3>
                    <p className="pt-1">
                      - Designed & developed an customer service application web
                      and mobile for technician project for graduated with
                      reactjs and react native.
                    </p>
                    <p className="pt-1">
                      - Developed an interactive map for a customer service app
                      project and show on features in web and mobile.
                    </p>
                    <p className="pt-1">
                      - Designed front-end code using reactjs and material ui to
                      created a responsive web application that works cross
                      desktops, tablets and 20+ other device.
                    </p>
                    <p className="pt-1">
                      - Assisted in developed a new project CRM of company in
                      front-end with react and reseach problems with the
                      systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div> */}
        </section>
      </main>
    </div>
  );
}
