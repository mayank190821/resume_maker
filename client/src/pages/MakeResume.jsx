import { useEffect, forwardRef, useState, useContext } from "react";
import styled from "styled-components";
import {GlobalContext} from "../context";

const MakeResume = forwardRef(({ data }, resumeRef) => {
  const {image} = useContext(GlobalContext);

  const [persistData, setPersistData] = useState();
  const [profile, setProfile] = useState();
  useEffect(() => {
    let imageURL;
    if (!data) {
      let storageData = JSON.parse(sessionStorage.getItem("data"));
      if (storageData) {
        setPersistData(storageData);
        if(image){
          imageURL = URL.createObjectURL(image);
          setProfile(imageURL);
        }
      }
    } else setPersistData(data);
    return (() => {
      URL.revokeObjectURL(imageURL);
    })
  }, [image]);
  if (persistData) {
    return (
        <ResumePaper ref={resumeRef}>
          <InfoGroup style={{ minHeight: "120px" }}>
            <Heading1>{persistData.name.toUpperCase()}</Heading1>
            <Heading3>{persistData.address}</Heading3>
            <Heading3>
              <List>
                <li style={{ display: "inline-block" }}>
                  <a
                    style={{
                      textDecoration: "none",
                      fontWeight: "600",
                      color: "#3586d6",
                    }}
                    href={`mailto:${persistData.email}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {persistData.email}
                  </a>
                </li>
                <li style={{ display: "inline-block" }}>
                  +91 {persistData.phone}
                </li>
              </List>
            </Heading3>
            {persistData.links.github ? (
              <Heading3>
                <li>
                  Github:
                  <a
                    style={{
                      textDecoration: "none",
                      fontWeight: "600",
                      color: "#3586d6",
                    }}
                    href={persistData.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {persistData.links.github}
                  </a>
                </li>
              </Heading3>
            ) : (
              <span />
            )}
            {persistData.links.leetcode ? (
              <Heading3>
                <li>
                  Leetcode:
                  <a
                    style={{
                      textDecoration: "none",
                      fontWeight: "600",
                      color: "#3586d6",
                    }}
                    href={persistData.links.leetcode}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {persistData.links.leetcode}
                  </a>
                </li>
              </Heading3>
            ) : (
              <span />
            )}
            {persistData.links.portfolio ? (
              <Heading3>
                <li>
                  Portfolio:
                  <a
                    style={{
                      textDecoration: "none",
                      fontWeight: "600",
                      color: "#3586d6",
                    }}
                    href={persistData.links.portfolio}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {persistData.links.portfolio}
                  </a>
                </li>
              </Heading3>
            ) : (
              <span />
            )}

            <Profile>
              <div style={{
                  border: "3px solid #3586d6",
                  borderRadius: "6px",
                  width: "110px",
                  height: "110px",
                  marginTop: "30px",
                }}>
                <img
                  src={profile}
                  alt="img not found"
                  style={{width: "110px",
                  height: "110px",borderRadius: "6px",}}
                />
              </div>
            </Profile>
          </InfoGroup>
          {(persistData.education.length !== 0)?(<InfoGroup>
            <Heading2>EDUCATION</Heading2>
            {persistData.education.map((elem, indx) => {
              return (
                <div
                key={elem+indx}
                  style={{
                    width: "100%",
                    margin: "3px 0px 4px 0px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <ContentHead>
                    <strong>{elem.degree}</strong>, {elem.organisation},
                    {elem.city}
                  </ContentHead>
                  <ContentHead>{elem.startDate} - {elem.endDate}</ContentHead>
                </div>
              );
            })};
          </InfoGroup>):<span/>}
          {persistData.experience.length !== 0 ? (
            <InfoGroup>
              <Heading2>EXPERIENCE</Heading2>
              {persistData.experience.map((elem, indx) => {
                return (
                  <div
                    style={{
                      width: "100%",
                      margin: "0px 0px 10px 0px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <MultiContent>
                      <strong>{elem.organisation} </strong>
                      <em>{elem.role}</em>
                      <p style={{ textAlign: "left" }}>{elem.description}</p>
                    </MultiContent>
                    <ContentHead>
                      {elem.startDate} – {elem.endDate}
                    </ContentHead>
                  </div>
                );
              })}
            </InfoGroup>
          ) : (
            <span />
          )}
          {persistData.projects.length !== 0 ? (
            <InfoGroup>
              <Heading2>PROJECTS</Heading2>
              {persistData.projects.map((elem, indx) => {
                return (
                  <div
                    key={elem.name + indx}
                    style={{
                      width: "100%",
                      margin: "0px 0px 10px 0px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <MultiContent>
                      <strong>{elem.name} </strong>
                      <em>College mini project</em>
                      <p style={{ textAlign: "left" }}>{elem.description}</p>
                    </MultiContent>
                    <ContentHead>
                      {elem.startDate} – {elem.endDate}
                    </ContentHead>
                  </div>
                );
              })}
            </InfoGroup>
          ) : (
            <span />
          )}
          <InfoGroup>
            <Heading2>SKILLS</Heading2>
            <SkillContainer>
              <SkillGroup className="technical">
                <ContentHead className="head">
                  <strong>Technical</strong>
                </ContentHead>
                <ul
                  style={{
                    padding: "0px 15px",
                    display: "flex",
                    marginTop: "2px",
                    flexWrap: "wrap",
                    width: "100%",
                  }}
                >
                  {persistData.techSkills.map((elem, indx) => {
                    return (
                      <li
                        key={indx + elem}
                        style={{ margin: "0px", minWidth: "50%" }}
                      >
                        <ContentHead>{elem}</ContentHead>
                      </li>
                    );
                  })}
                </ul>
              </SkillGroup>
              <SkillGroup className="pro">
                <ContentHead className="head">
                  <strong>Professional</strong>
                </ContentHead>
                <ul style={{ padding: "0px 15px", marginTop: "2px" }}>
                  {persistData.proSkills.map((elem, indx) => {
                    return (
                      <li key={indx + elem}>
                        <ContentHead>{elem}</ContentHead>
                      </li>
                    );
                  })}
                </ul>
              </SkillGroup>
            </SkillContainer>
          </InfoGroup>
          <InfoGroup>
            <Heading2>CERTIFICATES</Heading2>
            <ul style={{ padding: "0px 15px" }}>
              {persistData.certificates.map((elem, indx) => {
                return (
                  <li key={indx + elem}>
                    <ContentHead>{elem}</ContentHead>
                  </li>
                );
              })}
            </ul>
          </InfoGroup>
          <InfoGroup>
            <Heading2>DECLARATION</Heading2>
            <ContentHead>
              I hereby declare that all the above mentioned information is true
              and correct to the best of my knowledge.
            </ContentHead>
          </InfoGroup>
        </ResumePaper>
    );
  } else {
    return <div></div>;
  }
});
const List = styled.div`
  li {
    margin: 0px 10px;
  }
  li:before {
    display: list-item;
    position: absolute;
    content: "";
  }
`;
const ResumePaper = styled.div`
  position: absolute;
  width: 90vh;
  padding: 20px;
  min-height: 100vh;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  //   box-shadow: 0px 0px 15px 0px rgba(150, 150, 150, 0.7);
`;
const Heading1 = styled.h1`
  font-size: 24px;
  margin: 10px 0px 2px 0px;
  color: #3586d6;
`;
const Heading2 = styled.h2`
  font-size: 18px;
  margin: 15px 0px 12px 0px;
  color: #3586d6;
  text-align: left;
  box-sizing: border-box;
  border-bottom: 2px solid #3586d6;
`;
const Heading3 = styled.h3`
  font-size: 15px;
  font-weight: 100;
  margin: 0px;
`;
const ContentHead = styled.p`
  font-size: 18px;
  margin: 0px;
  text-align: left;
`;
const MultiContent = styled.div`
  font-size: 18px;
  margin: 0px;
  display: flex;
  width: 65%;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: flex-start;
  p {
    margin: 0px;
  }
  em {
    margin: 2px 0px 0px 0px;
  }
`;
const SkillGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
`;
const SkillContainer = styled.div`
  display: flex;
  justifycontent: space-evenly;
  .technical {
    width: 50%;
    margin-right: 10%;
    * {
      margin-bottom: 3px;
    }
  }
  .pro {
    width: 40%;
    * {
      margin-bottom: 0px;
    }
    .head {
      margin-bottom: 3px;
    }
  }
`;
const InfoGroup = styled.div`
  text-align: center;
  width: 100%;
  //   border: 1px solid red;
`;
const Profile = styled.span`
  //   border: 1px solid blue;
  width: 22%;
  position: absolute;
  right: 0px;
  top: 0px;
`;
export default MakeResume;
