import React from "react";
import styled from "styled-components";
import { allmembers } from "../../constants/constants";
import TeamCard from "../../Sections/Teams/TeamCard";
import Card from "../../components/Resources/Card.jsx";
import { ResourceMain } from "../../constants/ResourceMain";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { client, databases } from '../../appwrite/appwrite';

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

function JobPostingForm() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [stipend, setStipend] = useState('');
    const [link, setLink] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const job = {
            title,
            description,
            company,
            location,
            stipend: parseInt(stipend, 10),
            link
        };

        try {
            await databases.createDocument(
                '6683dcfa0009cc58bd0e',
                '6683deb3003d2953624a',
                'unique()', // Document ID - can be 'unique()' or any string
                job
            );
            alert('Job posted successfully!');
        } catch (error) {
            console.error(error);
            alert('Failed to post job');
        }
    };


  return (
    <>
      <Section>
        <Container>
          <div className=" px-6 py-10 ">
            <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-teal-400 to-yellow-200 sm:text-4xl lg:text-5xl text-center">
              Jobs & Internship Board
            </h2>

            <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Stipend"
                value={stipend}
                onChange={(e) => setStipend(e.target.value)}
                required
            />
            <input
                type="url"
                placeholder="Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                required
            />
            <button type="submit">Post Job</button>
        </form>
            
          </div>
        </Container>
      </Section>
    </>
  );
}

export default JobPostingForm;
