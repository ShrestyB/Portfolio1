import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import feedback from "../../Assets/Projects/feedback.png";
import Eventhub from "../../Assets/Projects/Eventhub.png";
import Jobify from "../../Assets/Projects/JOB FINDER.jpg";
import notify from "../../Assets/Projects/Notify.png";
import segregator from "../../Assets/Projects/Segregator.jpeg";
import Tunesen from "../../Assets/Projects/Tunesen.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notify}
              isBlog={false}
              title="Notify"
              description=
              "The Note-Taking App is a web-based solution designed for users to create, manage, and organize notes efficiently. It features a custom-built rich text editor, note management capabilities, and an AI-powered glossary highlighting feature. This application is ideal for students, professionals, and anyone in need of a reliable note-taking system"
              ghLink="https://github.com/ShrestyB/notes"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eventhub}
              isBlog={false}
              title="Event Hub"
              description=
              "Built a a full-stack Event Management platform;Integrated user authentication and registration functionalities into the platform; promoting a secure environment. A seamless and engaging platform for organizing and participating in events, enhancing user experience and community engagemen"
              ghLink="https://github.com/ShrestyB/Event-Hub"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Jobify}
              isBlog={false}
              title="Job Finder"
              description=
              "Job Finder streamlines your job search. Simply search, apply, and manage applications effortlessly. Create a profile, upload your resume for personalized job suggestions, and save your preferred jobs. It's the easiest way to find and apply for jobs tailored to you."
              ghLink="https://github.com/ShrestyB/Jobify"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tunesen}
              isBlog={false}
              title="Tunesen"
              description=
              "Implemented a novel AI-driven system for music generation, utilizing deep learning techniques and neural network architectures up to accuracy of 84%               Developing and training models on large-scale datasets of musical compositions across various genres,incorporating both symbolic and audio representations of music."
              ghLink="https://github.com/ShrestyB/Tunesen"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={feedback}
              isBlog={false}
              title="Police Station Feedback"
              description=
              "Designed and developed a comprehensive dashboard using to display feedback received by police stations across various cities in Gujarat."
               ghLink="https://github.com/ShrestyB/Police-Station-Dashboard"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={segregator}
              isBlog={false}
              title="Data Segregation"
              description=
              "Trained a model to distinguish between the organic and inorganic waste up to accuracy up to 93%"
              ghLink="https://github.com/ShrestyB/Data-Segregation"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
