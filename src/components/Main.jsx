import CameraIcon from '../assets/images/camera.svg'
import VideoIcon from '../assets/images/video.svg'
import EventIcon from '../assets/images/event.svg'
import WriteIcon from '../assets/images/write.svg'
import UserIcon from '../assets/images/user.svg'
import Ellipsis from '../assets/images/ellipsis.svg'
import LikeIcon from '../assets/images/like.svg'
import DislikeIcon from '../assets/images/dislike.svg'
import ShareIcon from '../assets/images/share.svg'
import CommentIcon from '../assets/images/comment.svg'
import Loader from '../assets/images/spin-loading.gif'
import PostModal from './PostModal'

import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getArticlesAPI } from "../actions";
import { Container, CommonCard, ShareBox, EmptyState, Article,SharedActor, Description, SharedImg, SocialCount, SocialAction, Content } from "./styled/Main"
import ReactPlayer from "react-player";

const Main = (props) => {

  useEffect(() => {
    props.getArticles()
  }, [])
  const [showModal, setshowModal] = useState('close');

  const handleClick = (e) => {
    e.preventDefault();
    if(e.target != e.currentTarget) {
      return;
    }

    switch(showModal) {
      case 'open':
        setshowModal('close');
        break;
      case 'close':
        setshowModal('open');
        break;
      default:
        setshowModal('close');
        break;
    }
  }

  return (
    <>
      <Container>
        <ShareBox>
          <div>
          {props.user && props.user.photoURL ? 
            (<img src={props.user.photoURL} />
            ) : (
              <img src={UserIcon} />
            )}
            <div>
              <button onClick={handleClick}> Start a post</button>
            </div>
          </div>

          <div>
            <button>
              <img src={CameraIcon} alt="" />
              <span>photo</span>
            </button>

            <button>
              <img src={VideoIcon} alt="" />
              <span>Video</span>
            </button>

            <button>
              <img src={EventIcon} alt="" />
              <span>Event</span>
            </button>

            <button>
              <img src={WriteIcon} alt="" />
              <span>Write article</span>
            </button>
          </div>
        </ShareBox>

        { 
          props.articles.length == 0 
            ?
            <EmptyState>
              { props.loading && <img src={Loader} /> }
              <div>
                <span>There are no posts yet</span>
                <button onClick={handleClick}> Start a post</button>
              </div>
            </EmptyState> 
            :
          <Content>
            { props.loading && <img src={Loader} /> }
            { props.articles.length > 0 &&
              props.articles.map((article, key) => (
                <Article key={key}>
                  <SharedActor>
                    <a>
                      <img src={article.actor.image} alt="" />
                      <div>
                        <span>{article.actor.title}</span>
                        <span>{article.actor.description}</span>
                        <span>{article.actor.date.toDate().toLocaleDateString()}</span>
                      </div>
                    </a>
                    <button>
                      <img src={Ellipsis} alt="" />
                    </button>
                  </SharedActor>
                  <Description>{article.description}</Description>
                  <SharedImg>
                    <a>
                      { !article.sharedImg && article.video ?  (
                          <ReactPlayer width={'100%'} url={article.video} /> 
                        ) : (
                          article.sharedImg && 
                          <img src={article.sharedImg} />
                        )
                      }
                    </a>
                  </SharedImg>
                  <SocialCount>
                    <li>
                      <button>
                        <img src={LikeIcon} alt="" />
                        <span>56</span>
                      </button>
                    </li>
                    <li>
                      <a>{article.comments} comments</a>
                    </li>
                  </SocialCount>
                  <SocialAction>
                    <button>
                      <img src={LikeIcon} alt="" />
                      <span>like</span>
                    </button>
                    <button>
                      <img src={DislikeIcon} alt="" />
                      <span>Dislike</span>
                    </button>
                    <button>
                      <img src={ShareIcon} alt="" />
                      <span>Share</span>
                    </button>
                    <button>
                      <img src={CommentIcon} alt="" />
                      <span>Comment</span>
                    </button>
                  </SocialAction>
                </Article>
              ))
            }
          </Content>
      }
        <PostModal showModal={showModal} handleClick={handleClick} />
      </Container>
    </>
  );
};


const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    loading: state.articleState.loading,
    articles: state.articleState.articles
  }
}

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI())
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
