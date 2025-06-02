import React, { lazy } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Card =lazy(() => import("./Card"));

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} id="about">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] w-full leading-[30px]'
      >
        
       Enthusiastic and detail-oriented Fullstack Java Developer with a strong foundation in Java, Spring Boot, 
       Hibernate, and RESTful APIs. Hands-on experience in building small-scale projects and working with 
       databases like MySQL. Passionate about problem-solving, clean code practices, and continuous learning. 
       Seeking a Java Developer role in a growth-oriented company where I can apply my technical skills while 
      learning and contributing to innovative software solutions.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <Card key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
