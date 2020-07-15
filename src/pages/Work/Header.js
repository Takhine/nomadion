import React from "react";
import FadeIn from "react-fade-in";

export default function Header() {
  return (
    <div className="header">
      <FadeIn transitionDuration="800">
        <h1 className="main-title">
          Our Building Blocks<b style={{ color: "#00A8E8" }}>.</b>{" "}
        </h1>
      </FadeIn>

      <FadeIn delay="400">
        <p className="description">
          We're normal people (developers, designers, businesspeople and
          whatever else the market architected) connected by ideals that make us
          believe we can bring about positive change.{" "}
          <b style={{ color: "#94AAB2" }}>Together</b>.
        </p>
      </FadeIn>
    </div>
  );
}
