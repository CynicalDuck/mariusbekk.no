"use client";
import styles from "../styles";
import { TypingText } from "../components";

const About = () => {
  // Functions

  function openWork(work) {
    var i;
    var x = document.getElementsByClassName("work");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(work).style.display = "block";
  }

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className={`${styles.innerWidth} mx-auto flex-col px-14`}>
        <div className="flex flex-row text-[1.37rem] justify-start mb-10">
          <div className="text-secondary-text font-mono">01. |</div>
          <div className="text-white ml-3 font-mono">About me</div>
        </div>
        <div className="flex flex-row gap-20 flex-wrap">
          <img
            src="/profile_image.jpeg"
            alt="profile image"
            className="w-[400px] h-[400px] object-contain rounded-[1rem] place-items-center shadow-black shadow-md"
          />

          <div className="text-primary-text font-mono max-w-lg">
            Hello! My name is Marius and I'm a self taught developer with
            knowledge in both frontend and backend development. I have
            experience with React, NextJS, Django, Django Rest Framework,
            TailwindCSS and more.
            <br /> <br />
            I'm currently focusing on learing new technologies and this website
            is built using NextJS and TailwindCSS as a way to learn and pratice
            these technologies.
            <br /> <br />
            My developement focus is currently on building awesome applications
            at Intility but if you have a project you'd like me to work on, feel
            free to contact me using my socials or e-mail.
            <br /> <br />
            Here are some of the technologies I've been working with recently:
            <div className="flex flex-row gap-20 flex-wrap mt-2 ml-4 text-[1rem]">
              <ul>
                <li className="arrow">JavaScript</li>
                <li className="arrow">TypeScript</li>
                <li className="arrow">React</li>
                <li className="arrow">NextJS</li>
                <li className="arrow">Visual Studio Code</li>
                <li className="arrow">TailwindCSS</li>
                <li className="arrow">Framer Motion</li>
                <li className="arrow">Git</li>
              </ul>
              <ul>
                <li className="arrow">Python</li>
                <li className="arrow">Django</li>
                <li className="arrow">Django Rest Framework</li>
                <li className="arrow">PyCharm</li>
                <li className="arrow">PowerShell</li>
                <li className="arrow">Visual Basic</li>
                <li className="arrow">Docker</li>
                <li className="arrow">OpenShift</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.innerWidth} mx-auto flex-col px-14 mt-44 `}>
        <div className="flex flex-row text-[1.37rem] justify-end mb-10">
          <div className="text-secondary-text font-mono">02. |</div>
          <div className="text-white ml-3 font-mono">Work history</div>
        </div>
        <div className="flex flex-row gap-5 flex-wrap">
          <div className="text-primary-text font-mono max-w-lg">
            <div className="mt-2 ml-4 text-[1rem]">
              <ul>
                <li
                  className="text-header-text hover:text-secondary-text hover:cursor-pointer workList hover:bg-secondary rounded-[0.5rem] py-2 px-2"
                  onClick={() => openWork("1")}
                >
                  Systems developer @ Intility
                </li>
                <li
                  className="text-header-text hover:text-secondary-text hover:cursor-pointer workList hover:bg-secondary rounded-[0.5rem] py-2 px-2"
                  onClick={() => openWork("2")}
                >
                  Firefighter @ NRBR
                </li>
                <li
                  className="text-header-text hover:text-secondary-text hover:cursor-pointer workList hover:bg-secondary rounded-[0.5rem] py-2 px-2"
                  onClick={() => openWork("3")}
                >
                  Print technician @ Intility
                </li>
                <li
                  className="text-header-text hover:text-secondary-text hover:cursor-pointer workList hover:bg-secondary rounded-[0.5rem] py-2 px-2"
                  onClick={() => openWork("4")}
                >
                  Service desk @ Intility
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-secondary px-5 py-2 rounded-[10px] shadow-lg shadow-black">
            <div id="1" className="work">
              <p className="text-header-text font-mono text-[1.25rem]">
                Systems developer{" "}
                <a
                  href="https://www.intility.no/"
                  target="_blank"
                  className="text-secondary-text font-mono hover:cursor-pointer hover:underline"
                >
                  @ Intility
                </a>
              </p>
              <p className="text-primary-text font-mono text-[0.7rem]">
                Dec 2018 - Present
              </p>
              <ul>
                <li className="arrow text-primary-text text-[1rem] mt-3">
                  Writing frontend web applications in TypeScript with React
                </li>
                <li className="arrow text-primary-text text-[1rem] mt-3">
                  Writing backend applications in Python with Django and Django{" "}
                  Rest Framework
                </li>
                <li className="arrow text-primary-text text-[1rem] mt-3">
                  Familiar with Git, Docker and OpenShift
                </li>
              </ul>
            </div>
            <div id="2" className="work" style={{ display: "none" }}>
              <p className="text-header-text font-mono text-[1.25rem]">
                Firefighter{" "}
                <a
                  href="https://nrbr.no/"
                  target="_blank"
                  className="text-secondary-text font-mono hover:cursor-pointer hover:underline"
                >
                  @ Nedre Romerike brann- og redningsvesen IKS
                </a>
              </p>
              <p className="text-primary-text font-mono text-[0.7rem]">
                Oct 2020 - Present
              </p>
              <ul>
                <li className="arrow text-primary-text text-[1rem] mt-3">
                  Handeling incident calls and emergency
                  <br /> situations. Driving fire trucks with code 160
                </li>
                <li className="arrow text-primary-text text-[1rem] mt-3">
                  Fires, accidents, emergency health calls and others
                </li>
                <li className="arrow text-primary-text text-[1rem] mt-3">
                  Maintenance on vehicles, equipment and buildings
                </li>
              </ul>
            </div>
            <div id="3" className="work" style={{ display: "none" }}>
              <p className="text-header-text font-mono text-[1.25rem]">
                Print technician{" "}
                <a
                  href="https://www.intility.no/"
                  target="_blank"
                  className="text-secondary-text font-mono hover:cursor-pointer hover:underline"
                >
                  @ Intility
                </a>
              </p>
              <p className="text-primary-text font-mono text-[0.7rem]">
                Nov 2014 - Aug 2022
              </p>
              <ul>
                <li className="arrow text-primary-text text-[1rem] mt-3">
                  Managing 1500+ devices hosted on several systems.
                </li>
                <li className="arrow text-primary-text text-[1rem] mt-3">
                  Printer Logic, HP WebJet Admin, 3Manager and others
                </li>
                <li className="arrow text-primary-text text-[1rem] mt-3">
                  Printer and software e-mail, call, chat and on-site support
                </li>
                <li className="arrow text-primary-text text-[1rem] mt-3">
                  Maintenance on printers and software
                </li>
              </ul>
            </div>
            <div id="4" className="work" style={{ display: "none" }}>
              <p className="text-header-text font-mono text-[1.25rem]">
                Service desk{" "}
                <a
                  href="https://www.intility.no/"
                  target="_blank"
                  className="text-secondary-text font-mono hover:cursor-pointer hover:underline"
                >
                  @ Intility
                </a>
              </p>
              <p className="text-primary-text font-mono text-[0.7rem]">
                Nov 2014 - Aug 2022
              </p>
              <ul>
                <li className="arrow text-primary-text text-[1rem] mt-3">
                  E-mail, call and chat support
                </li>
                <li className="arrow text-primary-text text-[1rem] mt-3">
                  Windows systems, Office, Active Directory, Group Policies and
                  more
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
