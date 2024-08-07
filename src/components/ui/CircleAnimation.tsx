import "@/styles/ui/circleAnimation.css";

interface Props {
  valid: boolean;
}

const CircleAnimation = ({ valid }: Props) => {
  return (
    <>
      {valid && (
        <div className="container">
          <div className="loader fade-in">
            <img
              src="/icons/CleanFreeLogo.png"
              alt="Logo"
              style={{ width: "65px", height: "65px" }}
            />
          </div>
        </div>
      )}
      {!valid && (
        <div className="container-valid-layout">
          <div className="valid">
            <img
              src="/icons/CleanFreeLogo.png"
              alt="Logo"
              style={{ width: "65px", height: "65px" }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CircleAnimation;
