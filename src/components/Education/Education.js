import { Container } from "react-bootstrap";
import ExperienceCard from "../Experiences/ExperienceCard";
import Particle from "../Particle";
import Certifications from "./Certifications";
import Conferences from "./Conferences";

import { SSEMSLogo, MITLogo, AMISLogo } from "./educationLogos";

export default function Education() {
    const education = [
        {
            title: "B.Tech. in Computer Science and Engineering",
            organization: "MIT Academy of Engineering, Pune",
            duration: "Aug 2019 - Present",
            description: "As a student of Computer Science and Engineering, I have learned a lot about the fundamentals of Computer Science and Engineering. I have also learned a lot about the practical aspects of Computer Science and Engineering.",
            scores: "8.65 CGPA",
            experienceType: "Full Time",
            organizationLogo: MITLogo,
        },
        {
            "title": "Higher Secondary Certificate",
            "organization": "Atma Malik International School, Kokamthan",
            "organizationLogo": AMISLogo,
            "duration": "2019",
            "description": [],
            "scores": "85.20 Percentage",
            "experienceType": "Full Time",

        },
        {
            "title": "Secondary School Certificate",
            "organization": "Shri Sharda English Medium School, Kopargaon",
            "organizationLogo": SSEMSLogo,
            "duration": " 2017",
            "description": [],
            "scores": "92.80 Percentage",
            "experienceType": "Full Time",
        },
    ]
    return (
        <Container fluid className="education-section mt-5">
            <Particle />
            <Container className="pt-5">
                <h1 className="project-heading text-start">
                    Education
                    <strong className="purple">.</strong>
                </h1>
                <div className="education-cards-div ps-5 text-start">
                    {
                        education.map((education) => {
                            return (
                                <ExperienceCard 
                                    title={education.title} 
                                    description={education.description} 
                                    duration={education.duration} 
                                    organization={education.organization} 
                                    scores={education.scores} 
                                    experienceType={education.experienceType} 
                                    organizationLogo={education.organizationLogo}
                                    disabledProps={["skills"]}
                                    className="mb-2"
                                />
                            );
                        })
                    }
                </div>
            </Container>
            <Conferences />
            <Certifications />
        </Container>
    );
}