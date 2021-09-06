import React from 'react';
import { Container, Wrapper } from '../../components/Global.style';
import TweetsBox from '../../components/TweetsBox';
import { GetWithoutHeader, PostWithoutHeader, DelWithoutHeader } from '../../services';
import { PostMessage, PostMessagePlaceHolder } from './Tweets.style';

const Tweets = () => {

    const [textarea, setTextArea] = React.useState('');
    const [onTextArea, setOnTextArea] = React.useState(false);
    const [posting, setPosting] = React.useState(false);




    const [tweets, setTweets] = React.useState([]);


    const post = () => {

        let {id} = tweets[tweets.length - 1];

        setPosting(true);

        let data = {
            "id": id + 1,
            "postId": 1,
            "name": "who cares!!",
            "email": "Eliseo@gardner.biz",
            "body": textarea,
        };


        PostWithoutHeader('/comments', data)
        .then(({data}) => {
            setTweets(prevSate => [data, ...prevSate]);
            setPosting(false);
            setTextArea('')
        })
        .catch(err => {
            console.log(err);
            setPosting(false);
            setTextArea('')
        })
    }

    const deletePost = (id) => {

        DelWithoutHeader('/comments/'+id)
            .then(({data}) => {
                setTweets(prevSate => prevSate.filter(res => res.id !== id));
            })
            .catch(err => {
                console.log(err);
            })
    };



    React.useEffect(() => {

        let mounted = false;
        if (!mounted) {
            GetWithoutHeader('/comments')
                .then(({ data }) => {
                    setTweets(data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        return () => mounted = true;
    }, []);

    return (
        <Wrapper>
            <Container>

                <div className="w-full lg:w-1/2 mx-auto mt-10 overflow-auto h-full">

                    <div className="relative w-full shadow-lg border border-blue-400 shadow-md p-2">


                        <PostMessage value={textarea} className={'w-full ' + (onTextArea ? 'bg-white text-blue-400': 'text-white')}
                        onChange={(e) => setTextArea(e.target.value)}
                        onFocus={() => setOnTextArea(true)}
                        onBlur={() => setOnTextArea(false)}
                    >
                    </PostMessage>
                    {
                            (textarea.length <= 0) && !onTextArea && (
                                <PostMessagePlaceHolder>
                                    Tweet
                                </PostMessagePlaceHolder>
                            )
                    }

                    <div className="my-2 flex justify-end items-center px-3 w-full">
                        <button className="h-10 w-24 bg-blue-400 text-white text-base" disabled={textarea.trim() === '' || posting} onClick={post}>
                            {posting ? '...': 'Post'}
                        </button>
                    </div>
                        
                    </div>

                    <div className="mt-10">
                        {
                            tweets.map((tweet, index) => (
                                <TweetsBox body={tweet.body} key={tweet.id}>

                                    <div className="my-2 flex justify-end items-center px-3 w-full">
                                        <button onClick={() => deletePost(tweet.id)}>
                                            <i className="fa fa-trash fa-1x text-red-500" aria-hidden="true"></i>
                                        </button>

                                    </div>
                                </TweetsBox>
                            ))
                        }
                    </div>

                </div>

            </Container>
        </Wrapper>
    );
}

export default Tweets;
