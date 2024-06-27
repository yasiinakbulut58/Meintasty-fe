'use client';

const Loader = () => {
  return (
    <div className={`loader-wrapper food-loader`}>
      <div className="loader">
        <img
          src={'/assets/images/loader/food.gif'}
          alt="Animated GIF"
          width={300}
          height={200}
        />
      </div>
    </div>
  );
};

export default Loader;
