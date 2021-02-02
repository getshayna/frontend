import { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import classes from "./ProductItem.module.scss";

export const ProductItem = ({ img, title, clicked }) => {
  const [action, setAction] = useState(false);

  const animation = useSpring({
    opacity: action ? 1 : 0,
    config: config.molasses,
  });

  return (
    <div className={classes.product__item}>
      {img && (
        <img
          src={img}
          alt={title}
          onMouseEnter={() => setAction(true)}
          onMouseLeave={() => setAction(false)}
        />
      )}
      <animated.button
        style={animation}
        onMouseEnter={() => setAction(true)}
        onMouseLeave={() => setAction(false)}
        onClick={clicked}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 5.25C12.1989 5.25 12.3897 5.32902 12.5303 5.46967C12.671 5.61032 12.75 5.80109 12.75 6V12C12.75 12.1989 12.671 12.3897 12.5303 12.5303C12.3897 12.671 12.1989 12.75 12 12.75H6C5.80109 12.75 5.61032 12.671 5.46967 12.5303C5.32902 12.3897 5.25 12.1989 5.25 12C5.25 11.8011 5.32902 11.6103 5.46967 11.4697C5.61032 11.329 5.80109 11.25 6 11.25H11.25V6C11.25 5.80109 11.329 5.61032 11.4697 5.46967C11.6103 5.32902 11.8011 5.25 12 5.25Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.25 12C11.25 11.8011 11.329 11.6103 11.4697 11.4697C11.6103 11.329 11.8011 11.25 12 11.25H18C18.1989 11.25 18.3897 11.329 18.5303 11.4697C18.671 11.6103 18.75 11.8011 18.75 12C18.75 12.1989 18.671 12.3897 18.5303 12.5303C18.3897 12.671 18.1989 12.75 18 12.75H12.75V18C12.75 18.1989 12.671 18.3897 12.5303 18.5303C12.3897 18.671 12.1989 18.75 12 18.75C11.8011 18.75 11.6103 18.671 11.4697 18.5303C11.329 18.3897 11.25 18.1989 11.25 18V12Z"
            fill="white"
          />
        </svg>
      </animated.button>
    </div>
  );
};
