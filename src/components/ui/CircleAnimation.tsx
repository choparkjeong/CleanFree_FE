import "@/styles/ui/circleAnimation.css";

const CircleAnimation = () => {
  return (
    <div className="container">
      <div className="loader fade-in">
        <img
          src="/icons/CleanFreeLogo.png"
          alt="Logo"
          style={{ width: "65px", height: "65px" }}
        />
      </div>
    </div>
  );
};

export default CircleAnimation;
