import "./style.scss";

interface ProgressBarProps {
  width: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({width}) => {
  const lineStyle = {
    width: `${width}%`,
  };

  return (
    <>
      <div className="progress-bar">
        <div className="line" style={lineStyle}></div>
      </div>
    </>
  );
};
