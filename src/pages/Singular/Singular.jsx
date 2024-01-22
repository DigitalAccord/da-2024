import React, { useState, useEffect } from 'react';
import './Singular.scss'
import { BlogArrow1 } from '../../assets/svgIcons'
import { Link, useParams } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { BlogForm } from '../Blog/component/BlogForm';

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_API_ENDPOINT}`,
  cache: new InMemoryCache(),
});
const Singular = () => {
  const { slug } = useParams();
  const [blogPosts, setBlogPosts] = useState({});
  useEffect(() => {
    client
      .query({
        query: gql`
          query NewQuery($slug: String!) {
            postBy(uri: $slug) {
              content
              title
              uri
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
            }
          }
        `,
        variables: { slug },
      })
      .then((result) => {
        const post = result?.data.postBy || {};
        console.log('singlePost:', post);
        setBlogPosts(post);
      });
  }, [slug]);


  const url = `https://gmail.us21.list-manage.com/subscribe/post?u=cb626cea98716e42cf66935c2&id=736ae7fda0&f_id=00eff3e6f0`;


  return (
    <>
      <div className='singular-banner-wrapper'
        style={{
          backgroundImage: `url(${blogPosts.featuredImage?.node?.mediaItemUrl || ''})`,
          backgroundRepeat: "no-repeat",

        }}>
        <div className='singular-banner'>
          <div className='singular-heading'>
            <h1>{blogPosts.title}</h1>
          </div>
          <Link to="/blog" className='singular-back text-decoration-none'>
            <BlogArrow1 />
            <p> Go Back To Blog</p>
          </Link>

        </div>
      </div>

      <div className='singuler-center-div'>
        <div className='singular-center-content'>
        <p dangerouslySetInnerHTML={{ __html: blogPosts.content }}></p>
        </div>
      </div>

     




      
      <div className='blog-conected'>
        <div className='blog-conected-content'>

          <h1>Want To Stay Connected?</h1>
          <p>
            Get full access to exclusive offers, Package Deals and more!
          </p>
         
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


  )
}

export default Singular