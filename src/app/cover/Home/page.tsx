"use client";
import Image from "next/image";
import book1 from "@/public/book1.png";
import book2 from "@/public/book2.jpg";
import book3 from "@/public/book3.jpg";
import book4 from "@/public/book4.jpg";
import book5 from "@/public/book5.jpg";
import book6 from "@/public/book6.jpg";
import { StaticImageData } from "next/image";
import styles from "@/style/card.module.css";
import { FaShoppingCart, FaStar } from "react-icons/fa";
// Define the type for the Card component props
interface CardProps {
  image: StaticImageData;
  title: string;
  description: string;
  lastUpdated: string;
  // price:string;
  // detail:string;
}

// Card Component with typed props
const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  lastUpdated,
}) => {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={title}
        width={300}
        height={150}
        className={styles.cardImage}
      />
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>{title}</h5>
        <p className={styles.cardText}>{description}</p>
        <p className={styles.cardText}>
          <small className={styles.textMuted}>{lastUpdated}</small>
        </p>
        <div className={styles.btn}>
  <div className={styles.stars}>
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className={i === 0 ? styles.activeStar : styles.inactiveStar} />
    ))}
  </div>

  <div className={styles.actionGroup}>
    <div className={styles.price}>
      $9999
      <FaShoppingCart className={styles.cart} />
    </div>
    <div className={styles.detail}>VIEW DETAILS</div>
  </div>
</div>

      </div>
    </div>
  );
};

// Define the type for the card data
interface CardData {
  image: StaticImageData;
  title: string;
  description: string;
  lastUpdated: string;
}

export default function Page() {
  const cardsData: CardData[] = [
    {
      image: book1,
      title: "Card title",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      lastUpdated: "Last updated 3 mins ago",
    },
    {
      image: book2,
      title: "Card title",
      description:
        "This card has supporting text below as a natural lead-in to additional content.",
      lastUpdated: "Last updated 3 mins ago",
    },
    {
      image: book3,
      title: "Card title",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
      lastUpdated: "Last updated 3 mins ago",
    },
    {
      image: book4,
      title: "Card title",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
      lastUpdated: "Last updated 3 mins ago",
    },
    {
      image: book5,
      title: "Card title",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
      lastUpdated: "Last updated 3 mins ago",
    },
    {
      image: book6,
      title: "Card title",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
      lastUpdated: "Last updated 3 mins ago",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.cardGroup}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            lastUpdated={card.lastUpdated}
          />
        ))}
      </div>
    </div>
  );
}
