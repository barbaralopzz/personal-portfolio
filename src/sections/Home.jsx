import './Home.css';
import backgroundImage from '../assets/home-bg.jpg';

export default function Home() {
  return (
    <section
      id="home"
      className="home"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textShadow: '1px 1px 4px rgba(0,0,0,0.5)'
      }}
    >
      <div className="home-container">
        <h2>Hello, I'm Barbara 👋</h2>
        <p>I’m a Digital Media student passionate about social media, design, and creativity.</p>
      </div>
    </section>
  );
}
