import { useEffect } from "react";

const Testimonials = () => {
  useEffect(() => {
    // Load the Elfsight script dynamically
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, []);

  return (
    <div>
      <div
        className="elfsight-app-8ab0bdf4-c6d3-4599-bc73-dde6c55bc733"
        data-elfsight-app-lazy
        style={{
          maxWidth: "100vw",
          margin: "0 auto",
          padding: "50px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#F5C7A9",
        }}
      ></div>
    </div>
  );
};

export default Testimonials;
