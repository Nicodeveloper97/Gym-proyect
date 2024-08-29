import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import WorkoutsSlider from './components/WorkoutsSlider';
import Plans from './components/Plans';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <WorkoutsSlider />
      <Plans />
      <ContactForm />
      <Footer />
    </Layout>
  );
};

export default App;
