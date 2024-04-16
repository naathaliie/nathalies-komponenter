import React, { useState, useEffect } from "react";
import "./ProgressBar.scss";

type ProgressBarProps = {
  percentage: number;
  title: string;  
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  title,
  
}) => {
  // State to manage the progress internally
  const [progress, setProgress] = useState<number>(0);

  // Update the progress state when the percentage prop changes
  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  return (
    <>
      <div className="ProgressBar">
        <h2>
          {title}
        </h2>
        <div className="progress-bar-container">
          <div
            style={{ width: `${progress}%` }}
            className="progress-bar"            
          >
          <p className="progress-bar-txt">{progress > 0 && `${progress}%`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
