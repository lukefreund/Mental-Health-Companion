import React from "react";
import "./ResourcesComponent.css";

const ResourcesComponent = () => {
  return (
    <div className="right-section">
      <div className="resource">
        <h1>Resources</h1>
        <div className="resource-Article">
          <a
            className="resource-Article-Link"
            href="https://www.verywellmind.com/the-importance-of-mental-health-for-wellbeing-5207938"
            target="_blank"
          >
            <button className="resource-Article-Button">
              The Importance of Mental Health
            </button>
          </a>
        </div>
        <div className="resource-Meditation">
          <a
            className="resource-Meditation-Link"
            href="https://www.youtube.com/watch?v=wVSkYKj26qg&t=1s"
            target="_blank"
          >
            <button className="resource-Meditation-Button">
              Meditation Tutorial
            </button>
          </a>
        </div>
        <div className="resource-Journaling">
          <a
            className="resource-Journaling-Link"
            href="https://positivepsychology.com/benefits-of-journaling/"
            target="_blank"
          >
            <button className="resource-Journaling-Button">
              The Benefits of Journaling
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ResourcesComponent;
