import React from 'react';
import { FaQuoteLeft, FaStar, FaExternalLinkAlt } from 'react-icons/fa';
import '../css/Testimonials.css';

const Testimonials = () => {
  const clients = [
    {
      id: 1,
      name: 'MIT Campus',
      website: 'mitjnk.edu.np',
      description: 'Karan\'s expertise in web development transformed our outdated website into a modern, responsive platform that perfectly represents our educational institution. His attention to detail and commitment to delivering high-quality work exceeded our expectations.',
      rating: 5
    },
    {
      id: 2,
      name: 'Gyan Foundation Educational Consultancy',
      website: 'gyanfoundation.com.np',
      description: 'Working with Karan was a pleasure from start to finish. He understood our vision for an interactive educational portal and implemented innovative solutions that have significantly improved user engagement and streamlined our online processes.',
      rating: 5
    },
    {
      id: 3,
      name: 'Nocha Resort',
      website: 'nocharesort.com.np',
      description: 'Karan delivered an exceptional website for our resort that beautifully showcases our amenities and has dramatically increased our online bookings. His technical skills and creative design approach have made a significant positive impact on our business.',
      rating: 5
    }
  ];

  return (
    <section className="clients-section">
      <div className="clients-bg-orb clients-orb-1" />
      <div className="clients-bg-orb clients-orb-2" />

      <div className="clients-glass-panel">
        <div className="clients-panel-shine" />
        <div className="clients-panel-edge" />

        <div className="clients-header">
          <span className="clients-tag">TESTIMONIALS</span>
          <h2 className="clients-heading">What My Clients Say</h2>
          <p className="clients-subtitle">
            Trusted by organizations to deliver exceptional web experiences.
          </p>
        </div>

        <div className="clients-grid">
          {clients.map((client) => (
            <div className="client-card" key={client.id}>
              <div className="client-card-accent" />
              <div className="client-card-glare" />

              <div className="client-card-body">
                <FaQuoteLeft className="client-quote-icon" />
                <p className="client-text">{client.description}</p>

                <div className="client-stars">
                  {[...Array(client.rating)].map((_, i) => (
                    <FaStar key={i} className="client-star" />
                  ))}
                </div>
              </div>

              <div className="client-card-footer">
                <div className="client-identity">
                  <div className="client-avatar">
                    {client.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="client-card-name">{client.name}</h3>
                    <a
                      href={`https://${client.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="client-link"
                    >
                      {client.website} <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
