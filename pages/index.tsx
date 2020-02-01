import React from "react";
import cx from "classnames";

import List from "../components/List";
import Entry from "../components/Entry";
import { H1, H2, P } from "../components/Typography";
import Section from "../components/Section";

import styles from "./index.module.scss";

const CV = () => {
  return (
    <div className={styles.Resume}>
      <div className={styles.Header}>
        <H1>
          Amanda<span className={styles.Bold}>Haynes</span>
        </H1>
        <P>Software Engineer</P>
      </div>
      <div className={styles.MainWrapper}>
        <div className={styles.Sidebar}>
          <span className={styles.DesktopContact}>
            <ContactSection />
          </span>
          <Section>
            <H2>Current Projects</H2>
            <P small>
              I'm always up to something! Some of my current side projects
              include:
            </P>
            <List
              items={[
                {
                  title:
                    "Building an interactive augmented art installation with live aerosol mural painting and visual projection mapping software"
                },
                {
                  title:
                    "Working as Live Art Director and Web Master for Impact Music Festival, Intersect Art and Music Festival, and Musibi Rising Art and Bass Gathering"
                },
                {
                  title:
                    "Leveraging technology to modernize property management by building a residential property management tool - think AirBnB meets on demand handyman services."
                }
              ]}
            />
          </Section>
          <Section>
            <H2>Highlights</H2>
            <List
              items={[
                {
                  title: "ATB Skills Visualization Application",
                  href: "http://atb-skills.herokuapp.com/"
                },
                {
                  title: "Live Art Installation",
                  href:
                    "https://www.flickr.com/photos/184798290@N03/albums/72157711177933831"
                },
                {
                  title: "Versett Website",
                  href: "https://versett.com/"
                },
                {
                  title: "Custom E-commerce website",
                  href: "https://www.bhd.ca/"
                }
              ]}
            />
          </Section>
          <Section>
            <H2>Fun Fact</H2>
            <P small>
              Before transitioning into technology, I was partner in a landscape
              construction company. In 5 years we transformed a handyman repair
              sole-proprietorship into an incorporated contracting company
              specializing in custom landscaping design with net yearly revenue
              of $100,000 in our last three years of operation.
            </P>
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
              seraching for oppotrunities to leverage technology in new and
              interetsting ways. My core competencies lie in web technologies
              and I am passionate about projects that exist at the intersection
              of art and technology. I'm on a mission to create accessible,
              interactive, immersive experiences leveraging various mediums both
              tangible and ingangible.
            </P>
          </Section>
          <Section>
            <H2>
              <Pink>Edu</Pink>cation
            </H2>
            <Entry
              title="Bachellor of Computer Information Systems"
              location="Mount Royal University"
              date="2011 - 2016"
              details={
                <P>
                  The CIS program teaches the fundamentals of object oriented
                  and functional programming, server and database
                  administration, QA, and project management. During my time at
                  Mount Royal I developed applications using various languages
                  including Java, C#, .Net, Javascript, and Python. In addition
                  to my studies, I participated in numerous extra curricular
                  activities including serving as an executive on my program's
                  student society where I helped coordinate and host events for
                  the students and faculty including hackatons, AR playground
                  fundraisers, and student showcase events.
                </P>
              }
            />
          </Section>
          <Section>
            <H2>
              <Green>Exp</Green>erience
            </H2>
            <Entry
              title="Application Engineer"
              location="Versett"
              date="2016 - Current"
              details={
                <P>
                  My role as an Application Engineer at Versett has me switching
                  between strategic consulting and UX execution functions as I
                  help design and build technological solutions for clients in
                  enterprise, startup, and venture domains. I leverage the most
                  modern Javascript web technologies to build accessible,
                  secure, performant, web and mobile applications. Together with
                  my team, we have delivered scalable customized solutions
                  including cryptocurrency exchange platforms, business travel
                  tools, custom ecommerce platforms, rich data visualizations,
                  mobile career coach applications and many more. The wide range
                  of projects I have been exposed to at Versett has broadened my
                  toolbealt and honed my ability to learn new skills and deep
                  dive into new problem domains with ease.
                </P>
              }
            />
            <Entry
              title="Web Development Bootcamp Mentor"
              location="Lighthouse Labs"
              date="2016 - 2018"
              details={
                <P>
                  My mentorship role was a part time evening position where I
                  assisted students as they progressed through a 10 week
                  intensive web development bootcamp. The curriculum was
                  iterative and new technologies were often replacing older ones
                  requiring me to quickly become up to speed in order to best
                  assist the students. Calgary is a sattelite office from the
                  Toronto based operations so there was ample opportunity for me
                  to help coordinate and facilitate events such as demo days,
                  showcase events, and employer meet-and-greet sessions.
                </P>
              }
            />
            <Entry
              title="Web Developer - LAMP Stack"
              location="RCKTSHP"
              date="2015 - 2016"
              details={
                <P>
                  I was brought on as a contractor to help a local student
                  crowdfunding startup pivot to a freelancer marketplace that
                  aimed to connect local startups and small businesses with
                  student freelancers. I made extensive customizations to the
                  automation and workflow features of an existing marketplace
                  framework build on Wordpress for the year long project.
                  Although the endeavor was unsuccesful, the opportunity to dive
                  into the startup world birthed my love for the unknown. I also
                  successfully landed RCKTSHP a finalist position in Startup
                  Calgary's Launchpad Accelerator challenge on just two days
                  notice!
                </P>
              }
            />
            <Entry
              title="Technical Support Analyst"
              location="Hitachi ID Systems"
              date="2014"
              details={
                <P>
                  To fulfill a requirement of my degree, I completed a four
                  month internship as a technical support intern for a the
                  password and identity management software branch of Hitachi.
                  During my time here, I set up a large virtual network to mimic
                  a complex client setup and went through the process of
                  intentionally breaking, debugging, and repairing for the most
                  in-depth understanding possible in addition to my technical
                  support duties.
                </P>
              }
            />
          </Section>
        </div>
      </div>
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
        { title: "403-462-1591" },
        { title: "1119a 41 Street SW, Calgary AB" }
      ]}
    />
    <List
      items={[
        { title: "dev@portad.ca", href: "mailto:dev@portad.ca" },
        { title: "github.com/amandala", href: "github.com/amandala" },
        {
          title: "linkedin.com/in/ahayn465",
          href: "linkedin.com/in/ahayn465"
        }
      ]}
    />
  </Section>
);

export default CV;
