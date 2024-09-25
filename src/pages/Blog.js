import {React, useEffect, useState} from 'react'
import Article from '../components/Article';


function Blog() {
    const [post, setPost] = useState([]);

    const fetchPosts = async () => {

        try {
            const url = 'https://potterapi-fedeperin.vercel.app/en/characters';
            const response = await fetch(url);
            const result = await response.json();

            setPost(result)
            console.log(result);

        } catch (error) {
            console.error (error)
            
        };

    };

    useEffect(() => {
    fetchPosts();

    }, []);


  return (
    <div className='pt-[50px] px-[20px]  bg-yellow-400' >
        <div className=' text-green-900'>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-8 '>
                {post.map((item, index) => (
                    <Article key={index} item={item} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Blog