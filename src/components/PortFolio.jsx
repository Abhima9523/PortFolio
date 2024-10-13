import React from "react";
import java from "../../public/java.png";
import oracle from "../../public/oracle.png";
import springBoot from "../../public/springBoot.jpg";
import spring from "../../public/spring.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: java,
      name: "Java",
      projectLink: "https://github.com/Abhima9523/Core-Java",
      sourceCodeLink: "https://github.com/Abhima9523/Core-Java",
    },
    {
      id: 2,
      logo: oracle,
      name: "Oracle",
      projectLink: "https://example.com/oracle-project",
      sourceCodeLink: "https://github.com/username/oracle-repo",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      projectLink: "https://example.com/reactjs-project",
      sourceCodeLink: "https://github.com/username/reactjs-repo",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
      projectLink: "https://example.com/nodejs-project",
      sourceCodeLink: "https://github.com/username/nodejs-repo",
    },
    {
      id: 5,
      logo: spring,
      name: "Spring",
      projectLink: "https://example.com/spring-project",
      sourceCodeLink: "https://github.com/username/spring-repo",
    },
    {
      id: 6,
      logo: springBoot,
      name: "Spring Boot",
      projectLink: "https://example.com/springboot-project",
      sourceCodeLink: "https://github.com/username/springboot-repo",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, projectLink, sourceCodeLink }) => (
            <div
              className="md:w-[250px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  I am currently working on this
                </p>
              </div>
              <div className="px-4 py-4 space-x-3 flex justify-around">
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 hover:bg-blue-700 text-white font-semibold text-sm px-3 py-1.5 rounded"
                >
                  Project
                </a>
                <a
                  href={sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-400 hover:bg-green-700 text-white font-semibold text-sm px-3 py-1.5 rounded"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
