import { Container } from "react-bootstrap";
import ExperienceCard from "../Experiences/ExperienceCard";

import FCCLogo from "../../Assets/certifications/fccjavascript.jpeg";
import ProgateLogo from "../../Assets/certifications/htmlcssprogate.jpeg";
import NPTELlogo from "../../Assets/certifications/nptelcloud.jpeg";
import P4ELogo from "../../Assets/certifications/p4e.jpeg";
import PPELogo from "../../Assets/certifications/ppe.jpeg";
import LinkedinLogo from "../../Assets/certifications/reactjslinkedin.jpeg";

export default function Certifications() {
    const certifications = [
        {
            title: "Cloud Computing",
            organization: "NPTEL",
            duration: "November 2022",
            description: "",
            scores: "",
            experienceType: "",
            organizationLogo: NPTELlogo,
            link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS87S6378074010059208",
        },
        {
            title: "React.js Essential Training",
            organization: "Linkedin Learning",
            duration: "February 2022",
            description: "",
            scores: "",
            experienceType: "",
            organizationLogo: LinkedinLogo,
            link: "https://www.linkedin.com/learning/certificates/be011aa05509925c2a0953519d7dd740d223613910bc690a18c2113fe060bffa?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B5D2OjNntSRiiKs7iSRJOMg%3D%3D",
        },
        {
            title: "Javascript Algorithms and Data Structures",
            organization: "FreeCodeCamp",
            duration: "June 2021",
            description: "",
            scores: "",
            experienceType: "",
            organizationLogo: FCCLogo,
            link: "https://freecodecamp.org/certification/abhilearnstocode/javascript-algorithms-and-data-structures",
        },
        {
            title: "HTML & CSS Course",
            organization: "Progate",
            duration: "December 2020",
            description: "",
            scores: "",
            experienceType: "",
            organizationLogo: ProgateLogo,
            link: "https://progate.com/course_certificate/c65302cdql8832",
        },
        {
            title: "Python for Everybody Specialization",
            organization: "University of Michigan",
            duration: "September 2020",
            description: "",
            scores: "",
            experienceType: "",
            organizationLogo: P4ELogo,
            link: "https://www.coursera.org/account/accomplishments/specialization/F86U38E87RV4?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Ds12n",
        },
        {
            title: "Python Programming Essentials",
            organization: "Coursera Course Certificates",
            duration: "",
            description: "",
            scores: "",
            experienceType: "",
            organizationLogo: PPELogo,
            link: "https://www.coursera.org/account/accomplishments/records/KQW6XDKH5KYU?utm_source=android&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
        },
    ]
    return (
        <Container className="pt-5" id="certifications">
            <h1 className="project-heading text-start">
                Certifications
                <strong className="purple">.</strong>
            </h1>
            <div className="education-cards-div ps-5 text-start mb-5">
                    {
                        certifications && certifications.map((certification) => {
                            return (
                                <ExperienceCard 
                                    title={certification.title} 
                                    description={certification.description} 
                                    duration={certification.duration} 
                                    organization={certification.organization} 
                                    scores={certification.scores} 
                                    experienceType={certification.experienceType} 
                                    organizationLogo={certification.organizationLogo}
                                    link={certification.link}
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