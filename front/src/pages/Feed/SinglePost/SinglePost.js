import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Image from '../../../components/Image/Image';
import './SinglePost.css';

const SinglePost = (props) =>
{
  let { postId } = useParams();
  const [ onePost, setOnePost ] = useState( [] );

  useEffect( () =>{
    // console.log( postId );
    fetch( 'http://localhost:5025/feed/post/' + postId, {
      headers: {
        Authorization: 'Bearer ' + props.token
      }
    } )
      .then( ( res ) => {
      if ( res.status !== 200 ){
      throw new Error('Failed to fetch status');
      }
        return res.json();
              // setsinglePost(s => ({ ...s, value: res.data }));
      } )
      .then( resProps => {
        setOnePost( {
          mes: resProps.message,
          all: resProps.post,
          title: resProps.post.title,
          creator: resProps.post.creator.name,
          image: resProps.post.imageUrl,
          date: new Date( resProps.post.createdAt ).toLocaleDateString( 'en-US' ),
          content: resProps.post.content
        });
      })
      .catch(err => {
        console.log(err);
      } );
    }, [ postId, props.token ] )
    console.log("hi all", onePost.all);
  return (
    <section className="single-post">
      <h1>{onePost.title}</h1>
      {/* <h4>current user id: {props.userId}</h4> */}
      <h4>Posted by: {onePost.creator} ;; Created at : { onePost.date }</h4>
      {/* <h4>post id: { postId }</h4> */}
      <h4>Content: {onePost.content}</h4>
      <p>image url: { onePost.image }</p>
      <h6>message from backend: {onePost.mes}</h6>
      {/* <img src=''/> */ }
      <div className="single-post__image">
        <Image contain imageUrl={onePost.image} />
      </div>
    </section>
  );
}

export default SinglePost;