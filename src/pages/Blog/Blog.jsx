import React,{useState,useEffect} from 'react';
import './blog.scss';
import blogCardBg from '../../assets/blog/blogCardBg.png';
import blogCardBg1 from '../../assets/blog/blogCardBg1.png'
import blogCardBg2 from '../../assets/blog/blogCardBg2.png'
import blogCardBg4 from '../../assets/blog/blogCardBg4.png'
import { BlogArrow } from '../../assets/svgIcons';
import { Link } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const client = new ApolloClient({
  uri: `${process.env.REACT_APP_API_ENDPOINT}`,
  cache: new InMemoryCache(),
});
const Blog = () => {
  const [blog, setBlog] = useState([])
  const [hover ,setHover]= useState(false)
  useEffect(() => {
    client
      .query({
        query: gql`
        query NewQuery {
          posts(where: {categoryId: 2, orderby: {field: DATE, order: DESC}}) {
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
        console.log('blogPosts:', blogPosts);
        setBlog(blogPosts);
      });
  }, []);
  const blogData = [
    blogCardBg,
    blogCardBg1,
    blogCardBg2,
    blogCardBg4,
    blogCardBg1,
    blogCardBg,
    blogCardBg2,
    blogCardBg2,
    blogCardBg1,
    blogCardBg1,
    blogCardBg,
    blogCardBg4,
        
    
  ];

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
          <Link to={`/singular/${post.node.postId}`} key={index} className='blog-card-link text-decoration-none'>
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
               <div  className='blog-text-wrap'>
               <h1>{post.node.title}</h1>
                <p >As the year comes to a close , it is often the time of the year when... </p>
               </div>
                <div className='blog-arrow-circle'>
                  <BlogArrow  className="d"/>
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
        <input type='email' placeholder='Enter Your Email Here'/>
            <button className='blog-subscribe'>Subscribe</button>
        </div>
       
        
      </div>

      
    </>
  );
};

export default Blog;
