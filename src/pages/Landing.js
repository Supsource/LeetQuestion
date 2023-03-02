import { FaDiscord, FaFire, FaTwitter } from "react-icons/fa";
import Button from "../components/elements/Button";

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="landing-page-content-wrapper content-center">
        {/* starting: hero section */}
        <div
          className="hero-section landing-page-hero-section"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90%",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "2rem",
            paddingTop: "2.4rem",
            paddingBottom: "2.4rem",
          }}
        >
          <img
            src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="developer-image"
            style={{
              width: "460px",
              height: "auto",
              borderRadius: "16px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
          />
          <div className="hero-section-content-wrapper">
            <h1 className="hero-section-title" style={{ fontSize: "46px" }}>
              Coming. <br />
              Very SOON! <br />
              We can't wait to see you.
            </h1>
            <p
              className="hero-section-description"
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginTop: "0.4rem",
              }}
            >
              {/* text <br />
             and some more text */}
            </p>
          </div>
        </div>
        {/* ending: hero section */}
        {/* starting: CTA Card */}
        <div
          className="cta-card-wrapper gradient-bg"
          style={{
            padding: "1.8rem 2.4rem",
            backgroundColor: "white",
            width: "fit-content",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "2.4rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "2.4rem",
            borderRadius: "16px",
            boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <h4
            className="cta-title"
            style={{ width: "40ch", color: "var(--h-white)" }}
          >
            Are you aiming for admission into your dream college like IITs, NITs, AIMS, or striving for a single-digit rank? You don't have to do it alone! There are others out there who share your goals and are willing to collaborate with you. Let's work together to achieve our aspirations!
          </h4>
          <div
            className="cta-buttons-wrapper"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1.2rem",
            }}
          >
            <Button
              onClick={() => window.open("https://www.twitter.com/LeetQuestion")}
            >
              <FaTwitter/> Join Twitter
            </Button>
            <Button type="plain" onClick={() => {
              window.location.href = '/testimonials';
            }}>
              <FaFire /> Our Testimonials
            </Button>
          </div>
        </div>
        {/* ending: CTA Card */}
      </div>
    </div>
  );
}
