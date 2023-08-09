import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const localData = [
  {
    id: "id",
    title: "Blog : A Deep Dive into its Features and Benefits",
    description: `In today's digital age, the world is filled with a vast array of products and services that cater to our needs and desires. Among these offerings, "Item 1" stands out as a remarkable and innovative solution that has captured the attention of many. In this blog post, we will take a comprehensive look at Item 1, exploring its features, benefits, and why it has become such a popular choice for consumers.`,
  },
  {
    id: "1",
    title: "Blog 1 : A Deep Dive into its Features and Benefits",
    description: `In today's digital age, the world is filled with a vast array of products and services that cater to our needs and desires. Among these offerings, "Item 1" stands out as a remarkable and innovative solution that has captured the attention of many. In this blog post, we will take a comprehensive look at Item 1, exploring its features, benefits, and why it has become such a popular choice for consumers.`,
  },
  {
    id: "2",
    title: "Blog 2 : A Comprehensive Overview",
    description: `In a world brimming with innovation and technological advancements, few products have managed to capture the imagination quite like "Item 2." From its cutting-edge features to its potential to reshape industries, Item 2 is a game-changer that demands our attention. In this blog post, we'll delve into the world of Item 2, exploring its unique attributes, benefits, and the exciting possibilities it brings to the table.`,
  },
  {
    id: "3",
    title: "Blog 3 : Revolutionizing Your Lifestyle",
    description: `In an era defined by innovation and technological marvels, few products have the potential to make an impact as profound as "Item 3." This extraordinary creation has captured the attention of tech enthusiasts and lifestyle aficionados alike, promising to revolutionize the way we live, work, and play. In this blog post, we'll take an in-depth look at Item 3, exploring its standout features, real-world benefits, and the ways it can transform your daily routine.`,
  },
  {
    id: "4",
    title: "Blog 4 : The Power of Connectivity",
    description: `In an interconnected world, "Item 4" stands as a beacon of connectivity and seamless integration. Discover how this remarkable product redefines communication, collaboration, and the way we interact with technology.`,
  },
  {
    id: "5",
    title: "Blog 5 : Innovating for Tomorrow",
    description: `"Item 5" represents a leap into the future, with its innovative design and forward-thinking features. Join us as we explore how this product is shaping the technological landscape and inspiring the creators of tomorrow.`,
  },
  {
    id: "6",
    title: "Blog 6 : The Ultimate Entertainment Hub",
    description: `Experience entertainment like never before with "Item 6." Dive into a world of immersive experiences, stunning visuals, and captivating audio that redefine the way we consume media.`,
  },
  {
    id: "7",
    title: "Blog 7 : Enhancing Wellness and Wellbeing",
    description: `Wellness takes center stage with "Item 7." Discover how this groundbreaking product empowers users to prioritize their health, stay active, and maintain a balanced lifestyle.`,
  },
  {
    id: "8",
    title: "Blog 8 : Embracing Sustainability",
    description: `"Item 8" isn't just a product; it's a commitment to a sustainable future. Explore how this eco-conscious innovation is making waves by reducing environmental impact and promoting responsible consumption.`,
  },
  {
    id: "9",
    title: "Blog 9 : The Art of Simplicity",
    description: `Simplicity meets sophistication with "Item 9." Join us as we uncover how this elegantly designed product simplifies complexities and enhances everyday experiences.`,
  },
  {
    id: "10",
    title: "Blog 10 : Empowering the Next Generation",
    description: `"Item 10" is more than a device; it's a tool for empowerment. Dive into a world where education, creativity, and exploration come together to shape the future.`,
  },
];

function Document() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const item = localData.find((item) => item.id === id);

    if (item) {
      setData(item);
    } else {
      console.error("Item not found");
    }
  }, [id]);

  if (!data) {
    return <div>No data found , Enter Valid id to get data</div>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

export default Document;
