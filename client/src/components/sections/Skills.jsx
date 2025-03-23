import { useEffect, useRef } from 'react';
import SectionTitle from '@/components/ui/section-title';
import { useAnimation, useInView, motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import GradientBorder from '@/components/ui/gradient-border';
var SkillCategory = function (_a) {
    var title = _a.title, skills = _a.skills;
    return (<motion.div variants={fadeIn} className="card-hover">
    <GradientBorder>
      <div className="p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-accent">{title}</h3>
        <ul className="space-y-3 text-muted-foreground">
          {skills.map(function (skill, index) { return (<li key={index} className="flex items-center">
              <span className="text-accent mr-2">▹</span> {skill}
            </li>); })}
        </ul>
      </div>
    </GradientBorder>
  </motion.div>);
};
var Skills = function () {
    var controls = useAnimation();
    var sectionRef = useRef(null);
    var isInView = useInView(sectionRef, {
        once: true,
        margin: '-100px 0px',
    });
    useEffect(function () {
        if (isInView) {
            controls.start('visible');
        }
    }, [controls, isInView]);
    var skillsData = [
        {
            title: "Programming Languages",
            skills: ["Python", "Java", "JavaScript", "C++"]
        },
        {
            title: "Web Development",
            skills: ["React.js", "FastAPI", "Full-Stack Development", "HTML, CSS"]
        },
        {
            title: "Cloud & DevOps",
            skills: ["Amazon Web Services (AWS)", "Linux", "Shell Scripting", "Networking"]
        },
        {
            title: "AI & Machine Learning",
            skills: ["Natural Language Processing (NLP)", "Generative AI", "Azure AI Studio", "Hugging Face"]
        },
        {
            title: "Databases",
            skills: ["Oracle Database", "SQL", "Database Design", "Data Modeling"]
        },
        {
            title: "Soft Skills",
            skills: ["Communication", "Analytical Skills", "Problem-solving", "Team Collaboration"]
        }
    ];
    return (<section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle number="05" title="Skills"/>
        
        <motion.div ref={sectionRef} initial="hidden" animate={controls} variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map(function (category, index) { return (<SkillCategory key={index} {...category}/>); })}
        </motion.div>
      </div>
    </section>);
};
export default Skills;
