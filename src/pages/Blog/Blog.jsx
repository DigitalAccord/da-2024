import React, { useState, useEffect } from 'react';
import './blog.scss';
import axios from 'axios';
import { BlogArrow } from '../../assets/svgIcons';
import { Link } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { BlogForm } from './component/BlogForm';

// import client from "@mailchimp/mailchimp_marketing";
const client1 = new ApolloClient({
  uri: `${process.env.REACT_APP_API_ENDPOINT}`,
  cache: new InMemoryCache(),
});





const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [hover, setHover] = useState(false);
  const [email, setEmail] = useState('');
  useEffect(() => {
    client1
      .query({
        query: gql`
        query NewQuery {
          posts(where: {categoryId: 2, orderby: {field: DATE, order: DESC}},first:1000) {
            edges {
              node {
                featuredImage {
                  node {
                    mediaItemUrl
                  }
                }
                postId
                slug
                title
              }
            }
          }
        }
          `,
      })
      .then((result) => {
        const blogPosts = result?.data.posts.edges || [];

        setBlog(blogPosts);
      });
  }, []);
  const url = `https://gmail.us21.list-manage.com/subscribe/post?u=cb626cea98716e42cf66935c2&id=736ae7fda0&f_id=00eff3e6f0`;

 
  const handleSubscribe = async () => {
    try {
      const response = await axios.post(
        `https://cors-anywhere.herokuapp.com/https://us21.api.mailchimp.com/3.0/lists/736ae7fda0/members`,
        {
          email_address: email,
          status: 'subscribed',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(`apikey:${process.env.REACT_APP_MAILCHIMP_API_KEY}`),
          },
        }
      );


      console.log('Subscription successful!', response);
    } catch (error) {

      console.error('Subscription failed!', error);
    }
  };



  return (
    <>
    
      <div className='blog-banner-wrapper'>
        <div className='blog-banner-content'>
          <h1>Blog</h1>
          <p>Explore Our Knowledge Base, So You Can Build Yours.</p>
        </div>
      </div>

      <div className='blog-grid container'>
        {blog.map((post, index) => (
          <Link to={`/${post.node.slug}`} key={index} className='blog-card-link text-decoration-none'>
            <div
              className='blog-card'
              style={{
                backgroundImage: `url(${post.node.featuredImage.node.mediaItemUrl || ''})`,
                backgroundPosition: '50%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',


              }}
            >
              <div className='blog'></div>
              <div className='blog-card-content'>
                <div className='blog-text-wrap'>
                  <h1>{post.node.title}</h1>
                  <p >As the year comes to a close , it is often the time of the year when... </p>
                </div>
                <div className='blog-arrow-circle'>
                  <BlogArrow className="d" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>


      <div className='blog-conected'>
        <div className='blog-conected-content'>

          <h1>Want To Stay Connected?</h1>
          <p>
            Get full access to exclusive offers, Package Deals and more!
          </p>
          {/* <form>

          <div className='mx-3' >

            <input
              type='email'
              placeholder='Enter Your Email Here'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className='blog-subscribe' onClick={handleSubscribe}>
            Subscribe
          </button>
          </form> */}
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <BlogForm 
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />
            
        </div>


      </div>
     

    </>
  );
};

export default Blog;
