import React, { useState, useEffect } from "react";

// A custom hook that returns the current scroll position
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // A function that updates the scroll position
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add an event listener for scroll events
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};

// A component that renders the navbar
const Navbar = () => {
  // Use the custom hook to get the scroll position
  const scrollPosition = useScrollPosition();

  // A state variable that determines if the navbar is visible or not
  const [navbarVisible, setNavbarVisible] = useState(true);

  // A state variable that determines if the navbar is sticky or not
  const [navbarSticky, setNavbarSticky] = useState(false);

  useEffect(() => {
    // A function that updates the navbar state based on the scroll position
    const updateNavbarState = () => {
      // If the scroll position is zero, hide the navbar and make it non-sticky
      if (scrollPosition === 0) {
        setNavbarVisible(false);
        setNavbarSticky(false);
      }
      // If the scroll position is greater than zero, show the navbar and make it sticky
      else {
        setNavbarVisible(true);
        setNavbarSticky(true);
      }
    };

    // Call the function to update the navbar state
    updateNavbarState();
  }, [scrollPosition]);

  return (
    <div
      className={`navbar ${navbarVisible ? "visible" : "hidden"} ${
        navbarSticky ? "sticky" : ""
      }`}
    >
      {/* Navbar content goes here */}
    </div>
  );
};

export default Navbar;
