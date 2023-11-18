import CloseIcon  from '../assets/images/close-icon.svg';
import UserIcon  from '../assets/images/user.svg';
import SharePhotoIcon  from '../assets/images/share-photo.svg';
import ShareVideoIcon  from '../assets/images/share-video.svg';
import CommentIcon  from '../assets/images/comment.svg';

import { useState } from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import firebase from "firebase/compat/app";
import { postArticleAPI } from "../actions";
import { Container, Content, Header, SharedContent, UserInfo, SharedCreation, AssetButton, AttachAssets, ShareComment, PostButton, Editor, UploadImage } from "./styled/PostModal";

const PostModal = (props) => {

    const [editorText, setEditorText] = useState('');
    const [shareImage, setShareImage] = useState('');
    const [videoLink, setVideoLink] = useState('');
    const [assetArea, setAssetArea] = useState('');

    const handleChange = (e) => {
        const image = e.target.files[0];

        if (image == '' || image == undefined) {
            alert(`not an image, the file is a ${typeof(image)}`)
            return;
        }

        setShareImage(image);
    }

    const switchAssetArea = (area) => {
        setShareImage('');
        setVideoLink('');
        setAssetArea(area);
    }

    const postArticle = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        }

        const payload = {
            image: shareImage,
            video: videoLink,
            user: props.user,
            description: editorText,
            timestamp: firebase.firestore.Timestamp.now(),
        };

        props.postArticle(payload);
        reset(e);
    }   

    const reset = (e) => {
        setEditorText('');
        setShareImage('');
        setVideoLink('');
        setAssetArea('');
        props.handleClick(e);
    }

    return (
        <>
            {  
                props.showModal === 'open' &&
                <Container>
                    <Content>
                        <Header>
                            <h2>Create a post</h2>
                            <button onClick={(event) => reset(event)}>
                                <img src={CloseIcon } />
                            </button>
                        </Header>
                        <SharedContent>
                            <UserInfo>
                                { props.user.photoURL ? (
                                    <img src={props.user.photoURL} />
                                ) : (
                                    <img src={UserIcon} />
                                )}
                                <span>{ props.user.displayName }</span>
                            </UserInfo>
                            <Editor>
                                <textarea autoFocus placeholder="What do you want to talk about" value={editorText} onChange={(e) => setEditorText(e.target.value)}></textarea>
                                { 
                                    assetArea == 'image' ?
                                    <UploadImage>
                                        <input type="file" accept="image/gif, image/jpeg, image/png" name="image" id="file" style={{display: 'none'}} onChange={handleChange} />
                                        <p><label htmlFor="file">Select an image to share</label></p>
                                        { shareImage && <img src={URL.createObjectURL(shareImage)} /> }
                                    </UploadImage>
                                    : assetArea == 'media' &&
                                    <>
                                        <input type="text" placeholder="Please input a video link" value={videoLink} onChange={(e) => setVideoLink(e.target.value)} />
                                        { videoLink && (
                                            <ReactPlayer width={'100%'} url={videoLink} />
                                        )}
                                    </>
                                }
                            </Editor>
                        </SharedContent>
                        <SharedCreation>
                            <AttachAssets>
                                <AssetButton onClick={() => switchAssetArea('image')}>
                                    <img src={SharePhotoIcon} />
                                </AssetButton>
                                <AssetButton onClick={() => switchAssetArea('media')}>
                                    <img src={ShareVideoIcon} />
                                </AssetButton>
                            </AttachAssets>
                            <ShareComment>
                                <AssetButton>
                                    <img src={CommentIcon} />
                                    <span>Anyone</span>
                                </AssetButton>
                            </ShareComment>
                            <PostButton disabled={!editorText} onClick={(event) => postArticle(event)}>Post</PostButton>
                        </SharedCreation>
                    </Content>
                </Container>
            }
        </>
    );

}

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
}

const mapDispatchToProps = (dispatch) => ({
    postArticle: (payload) => dispatch(postArticleAPI(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);