import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* About Us Section */}
      <section className="bg-white py-12">
        <div className="about-us mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">ABOUT US</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://via.placeholder.com/200x200" alt="" className="rounded-lg" />
              <img src="https://via.placeholder.com/200x200" alt="" className="rounded-lg" />
              <img src="https://via.placeholder.com/200x200" alt="" className="rounded-lg" />
              <img src="https://via.placeholder.com/200x200" alt="" className="rounded-lg" />
            </div>
            <div className="text-gray-700 text-lg leading-relaxed">
              <p>
                Nestled amidst pristine landscapes, Dev Creations is a beacon of innovation and creativity. From panoramic views to modern architecture, every corner reflects our dedication to crafting impactful solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-gray-50 py-12">
        <div className="about-us-cards mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-gray-700 text-lg leading-relaxed">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">WHO WE ARE</h3>
              <p>
                Dev Creations is a dynamic design-focused company dedicated to transforming ideas into impactful experiences. With a passion for design and a commitment to quality, we help businesses achieve their goals through intuitive design solutions.
              </p>
            </div>
            <img src="https://via.placeholder.com/400x300" alt="" className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-white py-12">
        <div className="about-us-cards mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img src="https://via.placeholder.com/400x300" alt="" className="rounded-lg" />
            <div className="text-gray-700 text-lg leading-relaxed">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">OUR MISSION</h3>
              <p>
                Our mission is to bridge the gap between creativity and functionality by delivering user-centric designs that resonate with our clients and their audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="bg-gray-50 py-12">
        <div className="about-us-cards mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-gray-700 text-lg leading-relaxed">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">OUR EXPERTISE</h3>
              <p>
                We specialize in UI/UX design, ensuring seamless user experiences through thoughtful interfaces and cutting-edge tools. Our team brings technical expertise and creativity to every project.
              </p>
            </div>
            <img src="https://via.placeholder.com/400x300" alt="" className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-12">
        <div className="about-us-cards mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img src="https://via.placeholder.com/400x300" alt="" className="rounded-lg" />
            <div className="text-gray-700 text-lg leading-relaxed">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">WHY CHOOSE US</h3>
              <p>
                At Dev Creations, we go beyond just design. We build partnerships, understanding our clients' needs deeply and delivering solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;