import React from 'react';
import Marquee from 'react-fast-marquee';


const news = [
    {
        "id": 1,
        "title": "AI is transforming web development in 2026",
    },
    {
        "id": 2,
        "title": "Global tech companies invest heavily in open-source tools",
    },
    {
        "id": 3,
        "title": "New JavaScript frameworks simplify frontend development",
    }
]

const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto'>
            <button className='btn bg-[#D72050] text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={50}>
                <div className="flex gap-8">
                    {
                     news.map(n => (
                      <span key={n.id}>{n.title}</span>
                        ))
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default BreakingNews;