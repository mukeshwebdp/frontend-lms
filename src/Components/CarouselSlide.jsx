function CarouselSlide({
  image,
  name,
  title,
  description,
  slideNumber,
  totalSlide,
}) {
  return (
    <div id={`slide${slideNumber}`} className="carousel-item relative w-full">
      <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
        <img
          src={image}
          alt={name}
          className="w-1/2 rounded-full border-2 border-gray-400"
        />
        <p className="text-xl text-gray-200">{description}</p>
        <h3 className="text-2xl font-semibold">{title}</h3>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href={`#slide${slideNumber === 1 ? totalSlide : slideNumber - 1}`}
            className="btn btn-circle"
          >
            ❮
          </a>
          <a
            href={`#slide${(slideNumber % totalSlide) + 1}`}
            className="btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarouselSlide;
