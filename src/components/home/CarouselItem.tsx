import "./CarouselItem.css";

interface CarouselItemProps {
  index: number;
  image: string;
  title: string;
  description: string;
}

function CarouselItem({ image, title, description }: CarouselItemProps) {
  return (
    <article className="item-container">
      <img src={image} alt={`${title} - Servicio`} className="image-service" />
      <div className="detail">
        <h3 className="detail-title">{title}</h3>
        <p className="detail-text">{description}</p>
      </div>
    </article>
  );
}

export default CarouselItem;
