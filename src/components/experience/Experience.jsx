import React from "react";
import "./experience.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { SiHandlebarsdotjs } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiGitBranch } from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandPython } from "react-icons/tb";

function Experience() {
  return (
    <section id="experience">
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineHtml5 className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <TbBrandCss3 className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <TbBrandJavascript className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsBootstrap className="experience__details-icon" />
              <h4>Bootstrap</h4>
            </article>
            <article className="experience__details">
              <SiHandlebarsdotjs className="experience__details-icon" />
              <h4>HandleBars</h4>
            </article>
            <article className="experience__details">
              <SiReact className="experience__details-icon" />
              <h4>ReactJS</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <h4>NodeJS</h4>
            </article>
            <article className="experience__details">
              <DiGitBranch className="experience__details-icon" />
              <h4>Git</h4>
            </article>
            <article className="experience__details">
              <TbBrandPython className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Learning</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
