import { useEffect, useRef } from 'react';
import SectionTitle from '@/components/ui/section-title';
import { useAnimation, useInView, motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import AnimatedCard from '@/components/ui/animated-card';
var EducationItem = function (_a) {
    var institution = _a.institution, degree = _a.degree, location = _a.location, duration = _a.duration, grades = _a.grades, achievements = _a.achievements, activities = _a.activities;
    return (<AnimatedCard>
    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
      <div>
        <h3 className="text-xl font-bold">{institution}</h3>
        <p className="text-muted-foreground">{degree}</p>
      </div>
      <div className="mt-2 md:mt-0 md:text-right">
        <p className="text-accent font-mono">{duration}</p>
        <p className="text-foreground font-medium">{grades}</p>
        <p className="text-xs text-muted-foreground">{location}</p>
      </div>
    </div>
    
    <div className="mt-4">
      <h4 className="text-lg font-semibold mb-2">Key Achievements</h4>
      <ul className="space-y-2 text-muted-foreground">
        {achievements.map(function (achievement, index) { return (<li key={index} className="flex items-start">
            <span className="text-accent mr-2 mt-1">▹</span>
            <span>{achievement}</span>
          </li>); })}
      </ul>
    </div>
    
    <div className="mt-4">
      <h4 className="text-lg font-semibold mb-2">Extracurricular Activities</h4>
      <ul className="space-y-2 text-muted-foreground">
        {activities.map(function (activity, index) { return (<li key={index} className="flex items-start">
            <span className="text-accent mr-2 mt-1">▹</span>
            <span>{activity}</span>
          </li>); })}
      </ul>
    </div>
  </AnimatedCard>);
};
var Education = function () {
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
    var educationData = [
        {
            institution: "Vellore Institute of Technology (VIT)",
            degree: "B.Tech in Computer Science",
            location: "Vellore, Tamil Nadu",
            duration: "Sep 2022 – Aug 2026 (Expected)",
            grades: "CGPA: 9.15",
            achievements: [
                "Achieved S grade (highest possible) in Basic Electrical Engineering, Technical English, Java Programming, and Operating Systems"
            ],
            activities: [
                "Core Committee Member of Blockchain Community and VIT Model United Nations Society",
                "Member of Google Developers Student Club & Apple Developers Group"
            ]
        },
        {
            institution: "Delhi Public School",
            degree: "High School Education",
            location: "Gurgaon",
            duration: "Apr 2013 – Apr 2022",
            grades: "Class 12th: 90% | Class 10th: 98.4%",
            achievements: [
                "National Topper in Mathematics & IT (Full marks in national final exams)",
                "Gold Medalist for Academic Excellence"
            ],
            activities: [
                "Leader of School Tech Club",
                "MUN Participant & Photography Enthusiast"
            ]
        }
    ];
    return (<section id="education" className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle number="02" title="Education"/>
        
        <motion.div ref={sectionRef} initial="hidden" animate={controls} variants={fadeIn} className="space-y-12">
          {educationData.map(function (edu, index) { return (<EducationItem key={index} {...edu}/>); })}
        </motion.div>
      </div>
    </section>);
};
export default Education;
