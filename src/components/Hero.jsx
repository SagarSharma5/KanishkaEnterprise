import Carousel from "./Carousel";

const styles = {
  alignment: "relative flex flex-row",
  heightWidth: "h-[91vh]",
  textFont: "font-monty",
  colors: "text-white bg-black",
  animations: "transition-all duration-[100ms] ease-in",
};

const carImages = [
  "images/brick.jpg",
  "images/gravel.jpg",
  "images/cement.jpg",
  "images/dust.jpg",
  "images/flyash.jpg",
];

const Hero = () => {
  return (
    <div
      className={`${styles.marginPadding} ${styles.heightWidth} ${styles.alignment} ${styles.textFont} ${styles.colors} ${styles.animations}`}
    >
      <Carousel images={carImages} />
    </div>
  );
};

export default Hero;
