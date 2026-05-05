import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2, CiStar } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    console.log('News data', news);
    return (
        <div className="card bg-base-100  shadow-sm">
            <div className="card-body">
                {/* author info */}
                <div className='flex justify-between items-center bg-slate-200'>
                    <div className='flex items-center gap-1'>
                        <Image
                     src={news.author?.img} alt={news.author?.name}
                     width={40}
                     height={40}
                     className='rounded-full'>

                        </Image>
                        <div>
                    <h2 className='font-semibold'>{news.author?.name}</h2>
                     <p className='text-xs'>{news.author?.published_date}</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <CiShare2 className='text-xl' />
                        <CiBookmark className='text-xl' />
                    </div>
                </div>

                <h2 className="card-title">{news.title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

                <figure>
                <Image
                    src={news.image_url}
                    alt={news.title}
                    width={300}
                    height={300}
                    className='w-full' />
            </figure>

            <p className='line-clamp-3'>{news.details}</p>

            <div className='flex justify-between items-center gap-2'>
                <div className='flex items-center gap-2'>
                    <h2 className='flex items-center gap-2'> <FaStar className='text-lg text-yellow-500'/> {news.rating.number}</h2>
                    <h2 className='flex items-center gap-2'><FaEye />{news.total_view}</h2>
                </div>

                <Link href={`/news/${news._id}`}><button className='btn'>See details</button></Link>
                
            </div>
            </div>
            
        </div>
    );
};

export default NewsCard;