const ImgWithFallback = ({ src, media, alt }) => {
  return (
    <picture>
      <source srcSet={src[1]} media={media[1]} />
      <source srcSet={src[2]} media={media[2]} />

      <img src={src[0]} alt={alt} />
    </picture>
  );
};

export default ImgWithFallback;
