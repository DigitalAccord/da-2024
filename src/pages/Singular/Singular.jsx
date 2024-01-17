import React,{useState,useEffect} from 'react';
import './Singular.scss'
import { BlogArrow1 } from '../../assets/svgIcons'
import { Link } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const client = new ApolloClient({
    uri: `${process.env.REACT_APP_API_ENDPOINT}`,
    cache: new InMemoryCache(),
  });
const Singular = () => {
    const [blogPosts, setBlogPosts] = useState({});
    useEffect(() => {
        client
          .query({
            query: gql`
              query NewQuery {
                postBy(postId: 1794) {
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
          })
          .then((result) => {
            const post = result?.data.postBy || {};
            console.log('singlePost:', post);
            setBlogPosts(post);
          });
      }, []);
    

    return (
        <>
            <div className='singular-banner-wrapper'
            style={{ backgroundImage: `url(${blogPosts.featuredImage?.node?.mediaItemUrl || ''})`,
            backgroundRepeat:"no-repeat" ,
            
            }}>
                <div className='singular-banner'>
                    <div className='singular-heading'>
                    <h1>{blogPosts.title}</h1>
                    </div>
                    <Link to="/blog" className='singular-back text-decoration-none'>
                          <BlogArrow1/>
                        <p> Go Back To Blog</p>
                    </Link>

                </div>
            </div>

            <div className='singuler-center-div'>
                <div className='singular-center-content'>
                    <p>{blogPosts.content}</p>
                </div>
            </div>

            <div className='singular-benifits-text'>
                <p>Three benefits of cloud backups for businesses are:</p>
                <div className='singular-para'>
                    <h1>Data Protection and Security</h1>
                    <p>It is important for businesses to not only have backups of their data in the event of unexpected hardware errors, software corruption, computer viruses, and cyber attacks, as well as natural disasters or power failure. Third-party cloud hosting with a business offering Managed IT services, such as Digital Accord, will offer data encryption, allocated staff dedicated to monitoring and identifying potential threats.</p>
                </div>


                <div className='singular-para'>
                    <h1>Recovery</h1>
                    <p>It is important for businesses to not only have backups of their data in the event of unexpected hardware errors, software corruption, computer viruses, and cyber attacks, as well as natural disasters or power failure. Third-party cloud hosting with a business offering Managed IT services, such as Digital Accord, will offer data encryption, allocated staff dedicated to monitoring and identifying potential threats.</p>
                </div>

                <div className='singular-para'>
                    <h1>Accessibility</h1>
                    <p>It is important for businesses to not only have backups of their data in the event of unexpected hardware errors, software corruption, computer viruses, and cyber attacks, as well as natural disasters or power failure. Third-party cloud hosting with a business offering Managed IT services, such as Digital Accord, will offer data encryption, allocated staff dedicated to monitoring and identifying potential threats.</p>
                </div>
            </div>

            <div className='singular-outsource'>
                <p>Outsourcing cloud hosting is a great decision for businesses as it reduces excessive costs by eliminating the need for spending on specialised hardware, network equipment, and building space, which you may need to continually update and grow as the business expands. In saying that, another benefit of outsourcing cloud hosting is that the flexibility of increasing and decreasing storage capacity offers less risk, and the business is able to grow or scale back at their own pace.</p>
                <p>
                    If your business is yet to invest in cloud hosting, it is a great time to evaluate the different options available. Cloud hosting is a great way for businesses to improve the efficiency and flexibility in the way that their employees work, as well as safeguarding data from unexpected errors. Exploring outsourcing cloud hosting options with a third-party cloud hosting business offering Managed IT services, such as Digital Accord, is also an excellent option for business, as this allows businesses to continue to run while knowing that their data is being protected by staff that are knowledgeable and offer continuous customer support. If you would like to know more about cloud hosting and Managed IT services that Digital Accord offers, please contact us here.
                </p>
            </div>


            <div className='blog-conected'>
        <div className='blog-conected-content'>

        <h1>Want To Stay Connected?</h1>
        <p>
        Get full access to exclusive offers, Package Deals and more!
        </p>
        <div className='mx-3' >

<input type='email' placeholder='Enter Your Email Here'/>
</div>
            <button className='blog-subscribe'>Subscribe</button>
        </div>
       
        
      </div>

        </>


    )
}

export default Singular