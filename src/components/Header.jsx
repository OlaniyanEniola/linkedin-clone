import { connect } from "react-redux";
import HomeLogo from '../assets/images/home-logo.svg'
import MagnifyingGlass from '../assets/images/search-icon.svg'
import NavHome from '../assets/images/nav-home.svg'
import NavNetwork from '../assets/images/nav-network.svg'
import NavJobs from '../assets/images/nav-jobs.svg'
import NavMessaging from '../assets/images/nav-messaging.svg'
import NavNotifications from '../assets/images/nav-notifications.svg'
import NavWork from '../assets/images/nav-work.svg'
import UserIcon from '../assets/images/user.svg'
import DownIcon from '../assets/images/down-icon.svg'
import { signOutAPI } from "../actions";
import { Container, Content, Logo, Search, SearchIcon, Nav, NavListWrap, NavList, SignOut, User, Work } from "./styled/Header";

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src={HomeLogo} alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src={MagnifyingGlass} alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a>
                <img src={NavHome} alt="" />
                <span>Home</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src={NavNetwork} alt="" />
                <span>My Network</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src={NavJobs} alt="" />
                <span>Jobs</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src={NavMessaging} alt="" />
                <span>Messaging</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src={NavNotifications} alt="" />
                <span>Notifications</span>
              </a>
            </NavList>

            <User>
              <a>
                { props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" /> 
                ) :
                (
                  <img src={UserIcon} alt="" />
                )}
                <span>
                  Me
                  <img src={DownIcon} alt="" />
                </span>
              </a>

              <SignOut onClick={() => props.signOut()}>
                <a>Sign Out</a>
              </SignOut>
            </User>

            <Work>
              <a>
                <img src={NavWork} alt="" />
                <span>
                  Work
                  <img src={DownIcon} alt="" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  }
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);