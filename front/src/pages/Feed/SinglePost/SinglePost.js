import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Image from '../../../components/Image/Image';
import './SinglePost.css';

const SinglePost = (props) =>
{
  let { postId } = useParams();
  const [ posts, setPosts ] = useState( [] );

  useEffect( () =>{
    console.log( postId );
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
              // setPosts(s => ({ ...s, value: res.data }));
      } )
      .then( resProps => {
        setPosts({
          title: resProps.post.title,
          author: resProps.post.creator.name,
          image: resProps.post.imageUrl,
          date: new Date( resProps.post.createdAt ).toLocaleDateString( 'en-US' ),
          content: resProps.post.content
        });
      })
      .catch(err => {
        console.log(err);
      } );
  }, [] )
  console.log(posts.date);
  console.log(posts.author);
  return (
    <section className="single-post">
      <h1>{posts.title}</h1>
      <h2>author: { posts.author } </h2>
      <h2>created at : { posts.date }</h2>
      <h2>post id: { postId }</h2>
      <p>image url: { posts.image }</p>
      {/* <img src=''/> */}
      <div className="single-post__image">
        <Image contain imageUrl={posts.image} />
      </div>
      <p>{posts.content}</p>
    </section>
  );
}

export default SinglePost;
