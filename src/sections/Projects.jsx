import ProjectCard from '../components/ProjectCard';
import menuAppImg from '../assets/menu-app.png';
import quizAppImg from '../assets/quiz-app.png';
import exerciseTrackerImg from '../assets/exercise-tracker.png';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="project-list">
          <ProjectCard
            title="Menu App"
            description="A restaurant menu built with React that filters items by category."
            link="https://github.com/barbaralopzz/react-menu-app-assignment"
            image={menuAppImg}
          />
          <ProjectCard
            title="Quiz App"
            description="A quiz app that shows score and tracks progress. Built with React."
            link="https://github.com/barbaralopzz/quiz-app"
            image={quizAppImg}
          />
          <ProjectCard
            title="Exercise Tracker"
            description="An app that tracks reps and durations using React Native and Expo."
            link="https://github.com/barbaralopzz/exercise-tracker-mobile"
            image={exerciseTrackerImg}
          />
        </div>
      </div>
    </section>
  );
}

