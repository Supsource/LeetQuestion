import React, { useState, useEffect } from "react";
import "./Members.css";
import ImgCircle from "../../components/elements/CircleImage";
import foundingmember from "./FoundingMembers.json";
export default function Members() {
  const [FoundingMembers] = useState(foundingmember);
  const [setMembers] = useState([]);
  //get random color
  const colors = ["#ffc6c7", "#c3f0ca", "#eebbc3", "#b8c1ec", "#3da9fc"];

  //useEffect get all members form github api and set to state
  useEffect(() => {
    fetch("https://github.com/orgs/LeetQuestion/people")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
      });
  }, []);

  return (
    <React.Fragment>
      {/* <div
        className="content-center text-center w-50 rounded-5 gradient-bg"
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
          padding: "2.4rem",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "46px",
            fontWeight: "600",
            marginBottom: "0.4rem",
          }}
        >
         hi there
        </h1>
        <p>
          We're a community of folks who are passionate about building great
          products, website, softwares, designs and many more, and we're always
          looking for new members to join us and make this community even
          better.
        </p>

        <div
          className="d-flex justify-content-center"
          style={{
            marginTop: "2rem",
          }}
        >
          <Button type="plain"
            onClick={() => window.open('https://github.com/orgs/LeetQuestion')}
          >
            {" "}
            <FaGithub
              style={{
                fontSize: ".9rem",
              }}
            />{" "}
            Join our github organization{" "}
          </Button>
        </div>
      </div> */}

      {/* Founding Members Start  */}

      <div className="content-center team-wrapper ">
        <div
          style={{
            backgroundColor: "white",
            margin: "5rem",
            padding: "2rem",
            borderRadius: "7px",
            boxShadow: " 0 1px 2px 0 rgba(0, 0, 0, 0.2)",
          }}
          className="founding-team-wrapper"
        >
          <div className="text-wrapper">
            <h2>Meet Our Leadership Team & Our Mission</h2>
            <h4
              className="title"
              style={{
                fontWeight: "600",
                color: "var(--h-gray)",
                marginTop: "0.8rem",
              }}
            >
               Everything we do is in support of one single, ambitious goal: Meaningful classroom learning for every student.
            </h4>
          </div>
          <div className="img-wrapper">
            {FoundingMembers.map((foundingmember) => {
              return (
                <div>
                <ImgCircle
                  id={foundingmember.id}
                  website={foundingmember.website}
                  name={foundingmember.name}
                  about={foundingmember.about}
                  img={foundingmember.avatar}
                  alt={foundingmember.alt}
                  borderColor={
                    colors[Math.floor(Math.random() * colors.length)]
                  }
                />
                </div>
                );
            })}
          </div>
        </div>
      </div>

      {/* Founding Members End */}



      {/* Community Members Start */}
      {/* <div className="content-center">
        <h2 className="title text-center">Community Members</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem",
          }}
        >
          {members.map((member, index) => {
            const randomNumber = Math.floor(Math.random() * colors.length);

            return (
              <div className="member-wrapper" key={index}>
                <ImgCircle
                  id={member.id}
                  link={member.html_url}
                  img={member.avatar_url}
                  alt={member.login}
                  borderColor={colors[randomNumber]}
                  githubUserName={member.login}
                />
              </div>
            );
          })}
        </div>
      </div> */}
      {/*Community Members End */}


    </React.Fragment>
  );
}
