import Link from "next/link";
import Services from "../components/Services";
import Contact from "../components/Contact";
import { sanityClient, urlFor } from "../client";
import Aside from "../components/Aside";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import styled from "styled-components";


// STYLES
export const PortfolioGrid = styled.div`
  opacity: 0.9;
  // background: teal;
  padding-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;

  @media only screen and (max-width: 1024px) {
    padding: 20px 30px 0 0;
    grid-template-columns: 1fr;
    grid-gap: 1em;
  }
  @media only screen and (max-width: 834px) {
    padding: auto;
  }
`;

export const Sq = styled.div`
  background: #fff;
  padding: 40px 20px;
  border: solid 2px black;
  font-size: 18px;
  &:hover {
    // background: teal;
    transition: 1s;
  }
`;

export const WebsiteTitle = styled.h3`
  padding-bottom: 5px;
  font-size: 22px;

  @media only screen and (max-width: 531px) {
    font-size: 20px;
  }
`;

export const WebsiteDescription = styled.p`
  @media only screen and (max-width: 531px) {
  }
`;

export const WebsiteTag = styled.div`
  @media only screen and (max-width: 531px) {
  }
`;

export const IndexGrid = styled.div`
  // background: #fff;
  display: grid;
  grid-template-areas: "ls rs rs rs ";
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1em;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "ls"
      "rs";
  }
`;

export const PostsGrid = styled.div`
  background: #fff;
  grid-area: rs;
  display: grid;
  grid-gap: 2em;
  border-left: solid 1px #000;
  border-bottom: solid 1px #000;
  @media only screen and (max-width: 1024px) {
  padding: 60px 10px 0px 20px;

  }
  }

  @media only screen and (max-width: 600px) {
    border-left: none;
    border-bottom: none;
    padding: 50px 0 0 20px;
  }
`;

export const ButtonWrapper = styled.div`
  // background: maroon;
  width: 270px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Button = styled.button`
  background: #fff;
  color: #000;
  border: 1px solid #000;
  width: 130px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: #000;
    padding: 5px;
  }
  a:hover {
    color: aquamarine;
    transition: 1s;
  }
  &:hover {
    background: teal;
    transition: 1s;
    color: aquamarine;
  }
`;

export const IconWrapper = styled.div`
  padding-top: 6px;
`;
// END STYLES

const test = ({ websites }) => {
  return (
    <>
      <IndexGrid>
        <Aside />
        <PostsGrid>
          <section id="services">
            <h2 className="title">Services</h2>
            <Services />
          </section>

          <section id="works" className="section-spacing">
            <h2 className="title">Works</h2>
            <p style={{ padding: "0 5px" }}>
              Here are my latest web designs. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Quo deserunt corporis, itaque
              possimus eos sunt eve
            </p>
            <PortfolioGrid>
              {websites &&
                websites.map((website, index) => (
                  <span key={index}>
                    <Sq>
                      <WebsiteTitle>{website.websiteTitle}</WebsiteTitle>
                      <WebsiteDescription>
                        {website.description}
                      </WebsiteDescription>
                      {/* <WebsiteTag>-{website.tags}</WebsiteTag> */}
                      <ButtonWrapper>
                        <Button>
                          <Link href={website.projectLink}>visit site</Link>
                          <AiOutlineLink />
                        </Button>
                        <Button>
                          <Link href={website.codeLink}>view code</Link>
                          <AiFillGithub />
                        </Button>
                      </ButtonWrapper>
                    </Sq>
                  </span>
                ))}
            </PortfolioGrid>
          </section>

          <section id="contact" className="section-spacing">
            <h2 className="title">Contact</h2>
            <Contact />
          </section>
        </PostsGrid>
      </IndexGrid>
    </>
  );
};

export default test;

export const getServerSideProps = async () => {
  const query = '*[_type == "websites"] | order(_createdAt asc)';
  const websites = await sanityClient.fetch(query);
  if (!websites.length) {
    return {
      props: {
        websites: [],
      },
    };
  } else {
    return {
      props: {
        websites,
      },
    };
  }
};
