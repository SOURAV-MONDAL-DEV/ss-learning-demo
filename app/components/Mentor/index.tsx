"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
    fblink: string;
}

const postData: DataType[] = [
    {
        profession: 'Instructor, Sahaj Shekha',
        name: 'Tanmay Mandal',
        imgSrc: '/assets/mentor/tanmay.png',
        fblink:'https://www.facebook.com/tanmoytheleg27',
    },
    {
        profession: 'Founder, Sahaj Shekha',
        name: 'Sourav Mondal',
        imgSrc: '/assets/mentor/sourav.jpeg',
        fblink: "https://www.facebook.com/souravmondal.sourav.7311/",
    },
    {
        profession: 'Advisor, Sahaj Shekha',
        name: 'Kanika Mondal',
        imgSrc: '/assets/mentor/kanika.jpg',
        fblink: "https://www.facebook.com/profile.php?id=100076415333909",
    },
    {
        profession: 'Instructor, Sahaj Shekha',
        name: 'Tanmay Mandal',
        imgSrc: '/assets/mentor/tanmay.png',
        fblink:'https://www.facebook.com/tanmoytheleg27',
    },
    {
        profession: 'Founder, Sahaj Shekha',
        name: 'Sourav Mondal',
        imgSrc: '/assets/mentor/sourav.jpeg',
        fblink: "https://www.facebook.com/souravmondal.sourav.7311/",
    },
    {
        profession: 'Advisor, Sahaj Shekha',
        name: 'Kanika Mondal',
        imgSrc: '/assets/mentor/kanika.jpg',
        fblink: "https://www.facebook.com/profile.php?id=100076415333909",
    },
]

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", position: 'absolute', alignItems: "center" , background: "#D5EFFA", padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" , background: "#D5EFFA", padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
            onClick={onClick}
        />
    );
}



export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            speed: 4000,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            autoplaySpeed: 4500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 530,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="py-10 sm:py-24 bg-paleblue" id="mentor">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 px-4 lg:px-8 relative'>
                    <h2 className="lh-82 text-midnightblue text-4xl md:text-55xl text-center md:text-start font-semibold">Meet with our <br /> mentor.</h2>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className='m-3 py-14 md:my-10 text-center'>
                                    <div className="relative">
                                        <Image src={items.imgSrc} alt="user-image"  width={200} height={200} className="inline-block m-auto rounded-full object-cover " />
                                        <Link href={items.fblink} className="absolute right-[100px] bottom-[8px] bg-white rounded-full">
                                            <Image src={'/assets/mentor/facebook.svg'} alt="linkedin-image" width={48} height={48} />
                                        </Link>
                                    </div>
                                    <div className="">
                                        <h3 className='text-2xl font-semibold text-lightblack'>{items.name}</h3>
                                        <h4 className='text-lg font-normal text-lightblack pt-2 opacity-50'>{items.profession}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>

        );
    }
}
