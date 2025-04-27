import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'; // Added import for Link

const Home = () => {
  return (
    <div className="app-container">
      <Navbar />

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.overlay}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Welcome to FITME Progress Tracking</h1>
            <p style={styles.heroSubtitle}>Track your workouts and achieve your fitness goals!</p>
            <button style={styles.ctaButton}>
              <Link to="/signup" style={styles.link}>Sign Up Now</Link>
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={styles.featureSection}>
        <div style={styles.featureContainer}>
          <div style={styles.featureText}>
            <h2 style={styles.sectionTitle}>How It Works</h2>
            <p style={styles.sectionDescription}>
              FITME helps you track your workouts, monitor your progress, and stay motivated. 
              Simply log your activities, set your goals, and let us guide you to success.
            </p>
          </div>
          <div style={styles.featureImageContainer}>
            <img 
              src={require('../assets/Screenshot (49).png')} 
              alt="How It Works" 
              style={styles.featureImage} 
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={styles.featureSection}>
        <div style={{...styles.featureContainer, flexDirection: 'row-reverse'}}>
          <div style={styles.featureText}>
            <h2 style={styles.sectionTitle}>Benefits of Using FITME</h2>
            <ul style={styles.benefitsList}>
              <li style={styles.benefitsItem}>Stay organized with a clear workout plan</li>
              <li style={styles.benefitsItem}>Monitor your progress with detailed analytics</li>
              <li style={styles.benefitsItem}>Achieve your fitness goals faster with personalized insights</li>
            </ul>
          </div>
          <div style={styles.featureImageContainer}>
            <img 
              src={require('../assets/bodi.webp')} 
              alt="Benefits" 
              style={styles.featureImage} 
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={styles.testimonialsSection}>
        <h2 style={styles.sectionTitle}>What Our Users Say</h2>
        <div style={styles.testimonialsContainer}>
          <div style={styles.testimonialCard}>
            <div style={styles.quoteIcon}>"</div>
            <p style={styles.testimonialText}>
              FITME has completely transformed the way I approach fitness. Highly recommend it!
            </p>
            <p style={styles.testimonialAuthor}>- Alex J.</p>
          </div>
          <div style={styles.testimonialCard}>
            <div style={styles.quoteIcon}>"</div>
            <p style={styles.testimonialText}>
              I love how easy it is to track my progress and stay motivated.
            </p>
            <p style={styles.testimonialAuthor}>- Jamie L.</p>
          </div>
        </div>
        <div style={styles.testimonialImageContainer}>
          <img 
            src={require('../assets/testimonial.jpg')} 
            alt="User Testimonials" 
            style={styles.testimonialImage} 
          />
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Ready to Get Started?</h2>
        <p style={styles.ctaDescription}>
          Join thousands of users who are achieving their fitness goals with FITME. 
          Sign up today and take the first step towards a healthier you!
        </p>
        <button style={styles.ctaButton}>
          <Link to="/signup" style={styles.link}>Sign Up Now</Link>
        </button>
      </section>
    </div>
  );
};

// Enhanced styles
const styles = {
  // App Container
  appContainer: {
    fontFamily: "'Inter', sans-serif",
    color: '#333',
    lineHeight: 1.6,
  },
  
  // Hero Section
  heroSection: {
    backgroundImage: 'url("https://mapmy-static.mapmyfitness.com/2b92b1f2a35141e9ff2f813211466e87.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh',
    position: 'relative',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroContent: {
    textAlign: 'center',
    maxWidth: '800px',
    padding: '0 20px',
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '800',
    color: 'white',
    marginBottom: '1rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    color: 'white',
    marginBottom: '2rem',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  },
  
  // Feature Sections
  featureSection: {
    padding: '5rem 2rem',
    backgroundColor: 'white',
  },
  featureContainer: {
    display: 'flex',
    maxWidth: '1200px',
    margin: '0 auto',
    alignItems: 'center',
    gap: '4rem',
    flexWrap: 'wrap',
  },
  featureText: {
    flex: '1 1 400px',
  },
  featureImageContainer: {
    flex: '1 1 400px',
    display: 'flex',
    justifyContent: 'center',
  },
  featureImage: {
    maxWidth: '100%',
    borderRadius: '10px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.3s ease',
  },
  
  // Section Titles and Text
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
    color: '#1a202c',
    position: 'relative',
    paddingBottom: '15px',
  },
  sectionDescription: {
    fontSize: '1.2rem',
    color: '#4a5568',
    marginBottom: '2rem',
    lineHeight: '1.8',
  },
  
  // Benefits List
  benefitsList: {
    paddingLeft: '1.5rem',
    fontSize: '1.2rem',
    color: '#4a5568',
  },
  benefitsItem: {
    marginBottom: '1rem',
    position: 'relative',
    paddingLeft: '0.5rem',
  },
  
  // Testimonials Section
  testimonialsSection: {
    padding: '5rem 2rem',
    backgroundColor: '#f9fafb',
    textAlign: 'center',
  },
  testimonialsContainer: {
    display: 'flex',
    maxWidth: '1200px',
    margin: '0 auto 3rem auto',
    gap: '2rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  testimonialCard: {
    flex: '1 1 300px',
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    maxWidth: '500px',
  },
  quoteIcon: {
    fontSize: '4rem',
    color: '#3b82f6',
    opacity: '0.2',
    position: 'absolute',
    top: '10px',
    left: '15px',
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  testimonialText: {
    fontSize: '1.1rem',
    fontStyle: 'italic',
    color: '#4a5568',
    marginBottom: '1rem',
    position: 'relative',
    zIndex: '1',
  },
  testimonialAuthor: {
    fontWeight: '600',
    color: '#3b82f6',
  },
  testimonialImageContainer: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  testimonialImage: {
    maxWidth: '100%',
    borderRadius: '10px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  },
  
  // CTA Section
  ctaSection: {
    padding: '5rem 2rem',
    textAlign: 'center',
    backgroundColor: '#3b82f6',
    color: 'white',
  },
  ctaTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
    color: 'white',
  },
  ctaDescription: {
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto 2rem auto',
    lineHeight: '1.8',
  },
  ctaButton: {
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    padding: '1rem 2.5rem',
    fontSize: '1.2rem',
    fontWeight: '600',
    borderRadius: '50px',
    cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
    transition: 'all 0.3s ease',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
};

export default Home;