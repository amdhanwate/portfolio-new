import { Container } from "react-bootstrap";

import IJECSLogo from "../../Assets/conferences/ijecs.png";
import ExperienceCard from "../Experiences/ExperienceCard";

export default function Conferences() {
    const conferences = [
        {
            title: "Amazon's Fake Review Detection using Support Vector Machine ",
            organization: "International Journnal of Engineering and Computer Science",
            duration: "16 December, 2022",
            description: "",
            scores: "",
            experienceType: "",
            organizationLogo: IJECSLogo,
            link: "https://www.ijecs.in/index.php/ijecs/article/view/4708/4054",
        },
    ]
    return (
        <Container className="pt-5" id="conferences">
            <h1 className="project-heading text-start">
                Conferences
                <strong className="purple">.</strong>
            </h1>
            <div className="education-cards-div ps-5 text-start">
                    {
                        conferences && conferences.map((Conference) => {
                            return (
                                <ExperienceCard 
                                    title={Conference.title} 
                                    description={Conference.description} 
                                    duration={Conference.duration} 
                                    organization={Conference.organization} 
                                    scores={Conference.scores} 
                                    experienceType={Conference.experienceType} 
                                    organizationLogo={Conference.organizationLogo}
                                    link={Conference.link}
                                    disabledProps={["skills", "scores"]}
                                    className="mb-2"
                                />
                            );
                        })
                    }
                </div>
        </Container>
    );
}