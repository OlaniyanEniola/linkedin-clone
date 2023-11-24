import LeftSection from "./LeftSection";
import MiddleSection from "./MiddleSection";
import RightSection from "./RightSection";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Section, Layout } from "./styled/Activity";

const Activity = (props) => {
  return (
    <Container>
      { !props.user && <Navigate to="/" /> }
      <Section>
        <h5>
          <a>Hiring in a hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>
      <Layout>
        <LeftSection />
        <MiddleSection />
        <RightSection />
      </Layout>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user
  }
}


export default connect(mapStateToProps)(Activity);