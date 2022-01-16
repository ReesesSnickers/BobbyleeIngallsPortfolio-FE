import React, { useState, useEffect } from 'react';
import profileImage from '../../static/profilePicture.jpg';
import Colors from '../../utility/constants/colors';
import Consts from '../../utility/constants/consts';
import CSS from '../../utility/constants/CSS';

const array = [
  'First off I want to thank you for taking the time out of your day to review my portfolio. It was a experience to overengineer, design, architect and deploy. I hope it brings you as much joy as it has brought me. Who knows, maybe it will inspire you or someone else to persue the journey as well.',
  'Let me introduce myself. My name Is Bobbylee Ingalls. I go by Bobby or Bobbylee. Whichever you prefer.  I have a amazing little family with two little girls that make every day interesting. It’s hard to believe how fast they grow up. I also enjoy outdoors adventures from time to time, but tend to find most of my personal down time playing video games with my friends and family or trying to find something to further hone my skillset.',
  'I am a front-end Software Engineer with a focus on ReactJS. That being said, I do have some experience in back-end and pipeline technologies mostly within the MERN stack (MongoDB, ExpressJS, ReactJS and NodeJs).',
  ' I would have to say it was approximately 2016 or 2017 when I first came into contact with coding. The team I was on was a Level one service desk correcting minor issues and completing software installs for WalMart Home Office associates remotely. I always have been one to try to be efficient. Being said, One of the members was a subject matters expert for all of our teams task automation. He used PowerShell and C# to provide reusable scripts and tools that allowed us to service our customers more effectively and push to resolve the issue as fast as we could when possible. When he moved to a new role, I was the only one who took interest and was given the new duty. Scripting was just the beginning. Soon I found myself working with one of WalMart’s developer teams where I only grew my skills as I went.',
  'Believe it or not, I didn’t start in a technology. Out of High School, I attended the United States Air Force as a Active Duty Aerospace Maintenance Personnel for 6 years. In my case I was known as a Crew Chief. I performed day to day inspections, refuels and general maintenance on the KC-135. I also worked as a Controlled Tool Kit team where I was responsible for maintaining and ordering specialty and general tools as well as managing Hazmat for our squadron.',
  'Over time I found myself emotionally distanced from aircraft maintenance. It got to a point where it was a repetition. I needed something different. Something less repetitious. Something new that would test my mind and creativity daily. So I decided that when my Air Force contract was up, I would find something new to do just that.',
  'I knew I wasn’t going to just find that perfect job. I almost would have went right back into logistics actually if I wouldn’t have had some loving guidance along the way. I was told I could do better and that I should try technology. I was given my footstep into Walmart Technology when I joined the level one help desk. I knew that was not going to be my forever spot. I also knew to look around, find what skills are needed but at the same time find a skill that seems interesting. Which, to loop back, I found my introduction to development with self-service scripts.',
  'Again thank you again for taking the time to learn about me and what I do. Feel free to investigate my portfolio some more. Have a wonderful day and may your weeks ahead be prosperous!',
];

const AboutMe = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const handleResize = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    // UE for handling windows events
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="pw">
      <div className="page">
        <img src={profileImage} alt={Consts.FULL_NAME} />
        <h1>{Consts.FULL_NAME}</h1>
        <h2>{Consts.JOB_TITLE}</h2>
        <section>
          {array.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>
      </div>
      <style jsx>{`
        div.pw {
          color: ${Colors.WHITE};
          min-height: 100vh;
          background-color: ${Colors.BLACK};
        }

        .page {
          padding: 72px 30px 50px 30px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }

        img {
          width: calc(${dimensions.width}px * 0.5);
          height: calc(${dimensions.width}px * 0.5);
          max-width: 400px;
          max-height: 400px;
          min-width: 240px;
          min-height: 240px;
          border-radius: ${CSS.ROUND_BORDER_RADIUS};
          object-fit: cover;
        }

        h1 {
          margin-bottom: 10px;
        }

        h2 {
          margin-top: 0px;
        }
      `}</style>
    </div>
  );
};

export default AboutMe;
