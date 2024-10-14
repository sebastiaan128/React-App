import React from 'react';
import RocketImage from '/IMG/Rocket.svg';

const Grid = ({ title, description, image, isImageFirst }) => {
    if (isImageFirst) {
        return (
            <div className="grid md:grid-cols-2 mt-20 place-items-center">
                <div className="order-1 md:order-1 image justify-self-end">
                    <img className="w-[400px]" src={image} alt="Grid item" />
                </div>
                <div className="order-2 md:order-2 text md:w-[70%] w-[90%] content-center md:justify-self-start">
                    <h1 className="text-[30px]">{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="grid md:grid-cols-2 mt-20 place-items-center">
                <div className="order-1 md:order-1 text md:w-[70%] w-[90%] content-center md:justify-self-end">
                    <h1 className="text-[30px]">{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="order-2 md:order-2 image justify-self-start">
                    <img className="w-[400px]" src={image} alt="Grid item" />
                </div>
            </div>
        );
    }
};

const Body = () => {
    const items = [
        {
            title: 'Our Mission',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit saepe numquam tenetur vitae vel tempora facere maxime officia veniam delectus at placeat dignissimos obcaecati sed impedit, beatae modi, necessitatibus quidem.',
            image: RocketImage,
            isImageFirst: false,
        },
        {
            title: 'Newest technology',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam natus, ad dolore aliquam perferendis vero assumenda neque cum est placeat laborum ab non vitae qui totam soluta.',
            image: RocketImage,
            isImageFirst: true, 
        }
    ];

    return (
        <main className="grid mt-20 place-items-center">
            <div className="order-1 md:order-2 text md:w-full w-[90%] content-center md:justify-self-start">
                {items.map((item, index) => (
                    <Grid key={index} title={item.title} description={item.description} image={item.image} isImageFirst={item.isImageFirst} />
                ))}
            </div>
        </main>
    );
};

export default Body;
