import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';
import PropTypes from 'prop-types';

function Tweet({ tweet }) {
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar} />
            <div className="content">
                <NameWithHandle author={tweet.author} /><Time time={tweet.timestamp} />
                <Message text={tweet.message} />
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton count={tweet.retweets} />
                    <LikeButton count={tweet.likes} />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    )
}

function Avatar({ hash }) {
    var url = `https://www.gravatar.com/avatar/${hash}`
    return (
        <img
            src={url}
            className="avatar"
            alt="avatar" />
    );
}

function Message({ text }) {
    return (
        <div className="message">
            {text}
        </div>
    );
}

function NameWithHandle({ author }) {
    const { name, handle } = author;
    return (
        <span className="name-with-handle">
            <span className="name">{name}</span>
            <span className="handle">{handle}</span>
        </span>
    );
}

NameWithHandle.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired
    }).isRequired
};

function getRetweetCount(count) {
    if (count > 0)
        return <span className="retweet-count">{count}</span>
    else
        return null;
}

const Time = ({ time }) => (
    <span className="time">{moment(time).fromNow()}</span>
);

const ReplyButton = () => (
    <i className="fa fa-reply reply-button" />
);

const RetweetButton = ({ count }) => (
    <span className="retweet-button" >
        <i className="fa fa-retweet" />
        {getRetweetCount(count)}
    </span>
);

RetweetButton.propTypes = {
    count: PropTypes.number
}

const LikeButton = ({ count }) => (
    <span className="like-button">
        <i className="fa fa-heart" />
        {count > 0 &&
            <span className="like-count">{count}</span>
        }
    </span>
);

LikeButton.propTypes = {
    count: PropTypes.number
}

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button" />
);


var testTweet = {
    message: "Hi Guyss..How you doing??",
    gravatar: "xyz",
    author: {
        handle: "@mevin-gm",
        name: "Mevin G Monson"
    },
    likes: 26,
    retweets: 3,
    timestamp: "2020-03-07 21:24:37"
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector('#root'));


// function Comment({ author, message, likes }) {
//     return (
//         <div>
//             <div className='author'>{author}</div>
//             <div className='message'>{message}</div>
//             <div className='likes'>
//                 {likes > 0 ? likes : 'No'} likes
//         </div>
//         </div>
//     );
// }

// Comment.propTypes = {
//     message: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     likes: PropTypes.number
// }

// ReactDOM.render(<Comment author='mevin' message='how are you' likes={1} />, document.querySelector('#root'));
