import React, { useCallback } from 'react';
import { Container, Wrapper } from '../../components/Global.style';
import TweetsBox from '../../components/TweetsBox';
import { GetWithoutHeader, PostWithoutHeader, DelWithoutHeader, PutWithoutHeader } from '../../services';
import { PostMessage, PostMessagePlaceHolder } from './Tweets.style';

const Tweets = () => {

    const [textarea, setTextArea] = React.useState('');
    const [onTextArea, setOnTextArea] = React.useState(false);
    const [posting, setPosting] = React.useState(false);
    const [tweetOpt, setTweetOpt] = React.useState(null);
    const [tweetEdit, setTweetEdit] = React.useState(null);




    const [tweets, setTweets] = React.useState([]);


    const post = useCallback(() => {

        
        setPosting(true);
        
        let data = {
            
            "postId": 1,
            
            "body": textarea,
        };

        if(!tweetEdit){

            let {id} = tweets[tweets.length - 1];
            data.id = id + 1;
            data.name = "who cares!!";
            data.email = "Eliseo@gardner.biz";
    
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

        } else {
            data = {
                ...data,
                ...tweets.find(res => res.id === tweetEdit),
            }

            PutWithoutHeader('/comments/'+tweetEdit, data)
                .then(({ data }) => {
                    console.log(data);
                    setTweets(prevSate => prevSate.map((res) => res.id === tweetEdit ? {...res, body: textarea} : res));
                    setPosting(false);
                    setTextArea('')
                    setTweetEdit(null);
                })
                .catch(err => {
                    console.log(err);
                    setPosting(false);
                    setTextArea('')
                })
        }

    }, [tweetEdit, textarea])

    const deletePost = (id) => {

        setTweetOpt(null);


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
                                <TweetsBox body={tweet.body} key={tweet.id} onClick={() => setTweetOpt(null)}>

                                    <button className="absolute flex justify-center items-center z-20 right-2 top-2"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if(tweetOpt === tweet.id) {

                                            setTweetOpt(null)
                                        } else {
                                            
                                            setTweetOpt(tweet.id)
                                        }
                                    }}
                                    >
                                        <i className="fa fa-ellipsis-v text-lg text-white" aria-hidden="true"></i>
                                    </button>
                                    {

                                        (tweetOpt === tweet.id) && ( 
                                            <div className="absolute -top-2 right-5 z-30 my-2 flex flex-col items-center px-3 w-40 rounded-md bg-white text-black">
                                                <button className="w-full flex items-center p-2 bg-white" onClick={() => {
                                                    setTweetOpt(null);
                                                    setTweetEdit(tweet.id);
                                                    setTextArea(tweet.body)
                                                }}>
                                                    <i className="fa fa-pencil text-blue-400 mr-2" aria-hidden="true"></i>Edit
                                                </button>
                                                <button className="w-full flex items-center p-2 bg-white" onClick={() => deletePost(tweet.id)}>
                                                    <i className="fa fa-trash text-red-500 mr-2" aria-hidden="true"></i> Delete
                                                </button>

                                            </div>
                                            )
                                    }
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
