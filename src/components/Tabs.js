import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  const renderContent = () => {
    switch (activeTab) {
      case 'About Me':
        return <p className="text-gray-400">Hello! I’m Vishnu, I'm a Fresher seeking to join in a reputed company. Ability to work with Kubernetes, Docker, C++, C, HTML, CSS, BOOTSTRAP. Can work well under pressure and make the best of any situation.I Designed a static Tourism website. And I deployed web voting application using kubernetes and Docker with GithUb actions. Thank you. </p>;
      case 'Experiences':
        return <p className="text-gray-400">As a fresher, I have gained hands-on experience with Docker,Kubernetes,HTML,CSS,BOOTSTRAP. I have written Dockerfiles to containerize microservices and
        created Docker Compose files to manage multiple services efficiently. Additionally, I have used Kubernetes to manage and deploy web
        application, leveraging workloads to ensure scalability and reliability.And I Designed Tourism website for choosing Destination places for users.These projects have given me practical insights into containerization and
        orchestration, enabling me to contribute effectively to DevOps processes.</p>;
      case 'Conclusion':
        return <p className="text-gray-400">I hope this Assignment will gave me a better opportunity to join in your organization</p>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex justify-around mb-4">
        {['About Me', 'Experiences', 'Conclusion'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-6 rounded-full ${
              activeTab === tab ? 'bg-gray-600 text-white' : 'bg-gray-700 text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
        {renderContent()}
      </div>
    </div>
  );
};

export default Tabs;
