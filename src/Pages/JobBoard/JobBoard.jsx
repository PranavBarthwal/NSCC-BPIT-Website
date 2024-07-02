import React from "react";
import styled from "styled-components";
import { allmembers } from "../../constants/constants";
import TeamCard from "../../Sections/Teams/TeamCard";
import Card from "../../components/Resources/Card.jsx";
import { ResourceMain } from "../../constants/ResourceMain";
import { Link } from "react-router-dom";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
  ${
    "" /* background-color: rgb(9, 9, 121);
  background-repeat: no-repeat;
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  ); */
  }
  background-color: #010116;
  ${
    "" /* background-repeat: no-repeat;
  background: no-repeat url("./img/bg.jpg"); */
  }
`;

const ProgramDescription = styled.div`
  @media only screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const Section2 = styled.div`
  height: 100%;
  background-color: #010116;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  align-items: center;
  justify-content: space-between;
`;

const YoutubeFrame = styled.iframe`
  width: 30vw;
  height: 350px;

  @media only screen and (max-width: 768px) {
    width: 90vw;
    height: 250px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const Container = styled.div`
  scroll-snap-align: center;
  width: 1440px;
  padding-top: 100px;
  @media only screen and (max-width: 738px) {
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 1030px) {
    width: 100vw;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 1030px) {
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
`;

const Container2 = styled.div`
  scroll-snap-align: center;
  width: 1440px;
  padding-top: 20px;
  @media only screen and (max-width: 738px) {
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 1030px) {
    width: 100vw;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 1030px) {
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
`;

function JobBoard() {
  return (
    <>
      <Section>
        <Container>
          <div className=" px-6 py-10 ">
            <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-teal-400 to-yellow-200 sm:text-4xl lg:text-5xl text-center">
              Jobs & Internship Board
            </h2>

            <p className="max-w-4xl mx-auto my-10 text-center text-xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-amber-500 to-pink-500 ">
              Post and share valuable links to internships and job openings,
              helping others find their next big opportunity. Discover exclusive
              leads and opportunities from our community members, ensuring
              you're always in the know. Lets ensure no opportunity slips
              through the cracks.
            </p>

            <div className="w-full flex justify-center">
              <Link
                to="/jobpostingform"
                target="_blank"
                className="mr-6"
              >
                <button
                  type="button"
                  className="text-white mt-1 bg-blue-700 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-0 mb-2"
                >
                  Have any opportunity? Add it here!
                </button>
              </Link>
            </div>

            <>
              <h2 className="mt-[80px] text-2xl text-center md:text-4xl lg:text-5xl font-bold">
                Explore{" "}
                <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
                  <a href="https://linktr.ee/nscc_bpit">Opportunities!</a>
                </span>
              </h2>

              <div className="grid grid-cols-1 gap-6 mt-14 lg:mt-16 xl:gap-10 md:grid-cols-2 lg:grid-cols-2">
                {ResourceMain.map((item) => {
                  return (
                    <a
                      href={item.to}
                      className="overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 shadow-xl shadow-cyan-300 bg-slate-950 rounded text-white p-4"
                      key={item.name}
                    >
                      <div className="text-center text-xl md:text-2xl lg:text-3xl font-semi-bold mb-14 mt-8">
                        {item.name}
                      </div>

                      <div className="program-content flex flex-col md:flex-row">
                        <div className="program-image md:w-3/6 md:pr-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full rounded-md"
                          />
                        </div>
                        <ProgramDescription className="program-description flex items-center border-2 border-slate-600 rounded-md p-4 md:w-full md:h-auto md:text-sm lg:text-xl xl:text-base text-neutral-400">
                          <p>{item.description}</p>
                        </ProgramDescription>
                      </div>
                    </a>
                  );
                })}
              </div>
            </>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default JobBoard;
