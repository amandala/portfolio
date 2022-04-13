import React from "react";

import List from "../components/List";
import Entry from "../components/Entry";
import { H1, H2, P } from "../components/Typography";
import Section from "../components/Section";

import styles from "./index.module.scss";

import { useEffect, useCallback, useRef } from "react";

const useTimeout = (
  callback: () => void, // function to call. No args passed.
  // if you create a new callback each render, then previous callback will be cancelled on render.
  timeout: number = 0 // delay, ms (default: immediately put into JS Event Queue)
): (() => void) => {
  const timeoutIdRef = useRef<NodeJS.Timeout>();
  const cancel = useCallback(() => {
    const timeoutId = timeoutIdRef.current;
    if (timeoutId) {
      timeoutIdRef.current = undefined;
      clearTimeout(timeoutId);
    }
  }, [timeoutIdRef]);

  useEffect(() => {
    timeoutIdRef.current = setTimeout(callback, timeout);
    return cancel;
  }, [callback, timeout, cancel]);

  return cancel;
};

const CV = () => {
  return (
    <div className={styles.Resume}>
      <div className={styles.Header}>
        <H1>
          Amanda<span className={styles.Bold}>Haynes</span>
        </H1>
        <P className={styles.Title}>
          Lead Software Developer and Creative Director thriving at the
          intersection of Art and Technology
        </P>
      </div>
      <div className={styles.MainWrapper}>
        <div className={styles.Sidebar}>
          <span className={styles.DesktopContact}>
            <ContactSection />
          </span>

          <Section>
            <H2>Favorite Tech Stack</H2>
            <List
              items={[
                {
                  title: "React / NextJS"
                },
                {
                  title: "SCSS Modules"
                },
                {
                  title: "Typescript"
                },
                {
                  title: "NodeJS"
                },
                {
                  title: "Mongo DB"
                }
              ]}
            />
          </Section>
          <Section>
            <H2>Current Projects</H2>
            <P small>
              I'm always up to something! Some of my current side projects
              through my side company Mixed Manifest include:
            </P>
            <List
              items={[
                {
                  title:
                    "Designing and implementing on an online presence for Big Kitty Magazine - an underground arts and culture magazine showcasing Calgary's street life."
                },
                {
                  title:
                    "Creating a marketing website for Prom Night Skate all girls boardsports club"
                },
                {
                  title:
                    "Organizing another block-long graffiti and street art jam for summer 2022"
                },
                {
                  title:
                    "Building an interactive augmented art installation with data visualization, live aerosol mural painting, and visual projection mapping"
                },
                {
                  title:
                    "Volunteering as Live Art Director for Inter.Sect Art and Music Festival and Inspire Fest YYC."
                },
                {
                  title:
                    "Collaborating on a large graffiti installation at Wicked Woods Music Festival."
                }
              ]}
            />
          </Section>
          <Section>
            <H2>Highlights</H2>
            <List
              items={[
                {
                  title: "Big Kitty Magazine",
                  href: "http://bigkittymag.com"
                },
                {
                  title: "Prom Night Skate",
                  href: "https://prom-night-girls.herokuapp.com/"
                },
                {
                  title: "Ignite Calgary",
                  href: "http://www.ignitecalgary.ca/"
                },
                {
                  title: "Live Art Installations",
                  href: "https://www.mixedmanifest.com"
                }
              ]}
            />
          </Section>
          <Section>
            <H2>Fun Fact</H2>
            <P small>
              Before transitioning into technology, I was partner in a landscape
              construction company. In just 5 years we transformed a handyman
              repair sole-proprietorship into an incorporated contracting
              company specializing in custom landscaping design with net yearly
              revenue of $100,000.
            </P>
            <P>
              While running Wicked Earth Contracting, I gained valuable
              experience leading teams, scoping and pricing projects, overseeing
              and participating in construction, and managing marketing and
              sales.
            </P>
          </Section>
          <Section>
            <H2>Profile Photo</H2>
            <img
              className={styles.Profile}
              src="/profile-min.jpg"
              alt="Amanda smiling in the forest"
            />
          </Section>
        </div>
        <div className={styles.Main}>
          <span className={styles.MobileContact}>
            <ContactSection />
          </span>
          <Section>
            <H2>
              <Blue>Sum</Blue>mary
            </H2>
            <P>
              I am driven by creating order out of chaos and am constantly
              searching for opportunities to leverage technology in new and
              interesting ways. My core competencies lie in web technologies and
              I am passionate about projects that exist at the intersection of
              art and technology. I'm on a mission to create collaborative,
              accessible, interactive, and immersive experiences leveraging
              various mediums both tangible and intangible.
            </P>
            <P>
              I thrive in environments where I can collaborate closely with
              business stakeholders, UX designers, and developers to implement
              design system driven user interfaces.
            </P>
          </Section>
          <Section>
            <H2>
              <Pink>Edu</Pink>cation
            </H2>
            <Entry
              title="Bachelor of Computer Information Systems"
              location="Mount Royal University"
              date="2011 - 2016"
              details="The CIS program teaches the fundamentals of object oriented
                  and functional programming, server and database
                  administration, QA, and project management. During my time at
                  Mount Royal I developed applications using various languages
                  including Java, C#, .Net, Javascript, and Python. In addition
                  to my studies, I participated in numerous extra curricular
                  activities including serving as an executive on my program's
                  student society where I helped coordinate and host events for
                  the students and faculty including hackathons, AR playground
                  fundraisers, and student showcase events."
            />
          </Section>
          <Section>
            <H2>
              <Green>Exp</Green>erience
            </H2>
            <Entry
              title="Senior Consultant & Team Lead - Front End Engineering"
              location="Deloitte Digital - D Studio"
              link="www.deloittedigital.com"
              date="May 2021 - Current"
              details="I'm currently working as a Team Lead on a personal online banking project. My team is responsible for re-writing legacy code to implement a fresh design system and achieve functional parity with the legacy system. I'm also volunteering 
              on a side-of-desk project for Ignite Calgary building their website and blog 
              using NextJS and Prismic. In my previous engagement, I worked on a project for a global oil & gas company helping the team iterate on new features of their mobile app in the role of Product Owner."
            />
            <Entry
              title="Senior Product Engineer & Team Lead"
              location="Versett"
              link="www.versett.com"
              date="May 2016 - May 2021"
              details="My role as an Senior Product Engineer at Versett has me switching
                  between strategic consulting and UX development as I
                  help design and build solutions for clients in enterprise,
                  startup, and venture domains. I leverage the most modern
                  Javascript web technologies to build accessible, secure, and
                  performant, web and mobile applications. Together with my
                  team, we have delivered scalable customized solutions
                  including cryptocurrency exchange platforms, business travel
                  tools, custom ecommerce platforms, rich data visualizations,
                  mobile career coach applications and many more. The wide range
                  of projects I have been exposed to at Versett has broadened my
                  toolbealt and honed my ability to learn new skills and deep
                  dive into new problem domains with ease."
            />
            <Entry
              title="Founder & Creative Arts and Technology Director"
              location="Mixed Manifest"
              link="linktr.ee/mixedmanifest"
              date="2019 - Current"
              details="It started as a volunteer position as Art Director at a 
              small charity music festival and turned into a mission to bring together
              a community of artists and creatives to collaborate on massive live art installations
              live streamed online for the world to participate. I work as a consultant teaming up with various
              event production companies to create live aerosol art installations set to live music paired with custom
              event websites that include Twitch channel embeds, discord chat functionality, and digital art galleries.
              For this summer, I'm planning two community driven public art projects, one independently, and one in collaboration with
              the Bowness BIA with help from the Ripples Grant and ActivateYYC Grant. I'm also working to coordinate and implement two
              graffiti jam exhibits taking place at music festivals this summer."
            />
            <Entry
              title="Web Developer & Contributor"
              location="Big Kitty Magazine"
              link="www.bigkittymag.com"
              date="2020 - Current"
              details="I'm creating a digital presence and contributing as a writer for Calgary's newest 
              arts, music, and culture magazine. I've built the website leveraging NextJS and Prismic CMS
              for an easy to update and SEO friendly online experience. Big Kitty Magazine strives to be a safe,
              inclusive, and accessible publication for all marginalized voices including LGBTQ2S+ and BIPOC communities."
            />
            <Entry
              title="Web Development Bootcamp Mentor"
              location="Lighthouse Labs"
              link="www.lighthouselabs.ca"
              date="2016 - 2018"
              details="My mentorship role was a part time evening position where I
                  assisted students as they progressed through a 10 week
                  intensive web development bootcamp. The curriculum was
                  iterative and new technologies were frequently introduced
                  requiring me to quickly familiarize myself in order to best
                  assist the students. Calgary is a satellite office from the
                  Toronto based operations so there was ample opportunity for me
                  to help coordinate and facilitate events such as demo days,
                  showcase events, and employer meet-and-greet sessions."
            />
            <Entry
              title="Web Developer"
              location="RCKTSHP"
              link="tinyurl.com/rcktshp-media"
              date="2015 - 2016"
              details="I was brought on as a contractor to help a local student
                  crowdfunding startup pivot to a freelancer marketplace aiming
                  to connect local startups and small businesses with student
                  freelancers. I made extensive customizations to the automation
                  and workflow features of an existing marketplace framework
                  build on Wordpress. I was given the opportunity to pitch RCKTSHP
                  to the A100 and land us a finalist position in Startup Calgary's Launchpad
                  Accelerator pitch competition with just two days notice to prepare."
            />
            <Entry
              title="Technical Support Analyst"
              location="Hitachi ID Systems"
              link="www.hitachi-id.com"
              date="2014"
              details="To fulfill a requirement of my degree, I completed a four
                  month internship as a technical support analyst for a the
                  password and identity management branch of Hitachi. During my
                  time there, I set up a large virtual network to mimic a
                  complex client setup and went through the process of
                  intentionally breaking, debugging, and repairing for the most
                  in-depth understanding possible."
            />
          </Section>
        </div>
      </div>
      <footer className={styles.Footer}>
        <P>{`Made with ♡  by Amanda Haynes. Powered by Next.js.`}</P>
      </footer>
    </div>
  );
};

const Pink = ({ children }) => <span className={styles.Pink}>{children}</span>;
const Green = ({ children }) => (
  <span className={styles.Green}>{children}</span>
);
const Blue = ({ children }) => <span className={styles.Blue}>{children}</span>;

const ContactSection = () => (
  <Section>
    <H2>Contact</H2>
    <List
      items={[
        {
          title: "dev@portad.ca",
          href: "mailto:dev@portad.ca"
        },
        { title: "github.com/amandala", href: "http://github.com/amandala" },
        {
          title: "linkedin.com/in/ahayn465",
          href: "http://linkedin.com/in/ahayn465"
        },
        {
          title: "instagram.com/mixedmanifest",
          href: "https://www.instagram.com/mixedmanifest"
        },
        {
          title: "linktr.ee/mixedmanifest",
          href: "https://linktr.ee/mixedmanifest"
        }
      ]}
    />
  </Section>
);

export default CV;
