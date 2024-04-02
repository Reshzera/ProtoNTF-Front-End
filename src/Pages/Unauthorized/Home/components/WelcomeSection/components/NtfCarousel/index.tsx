import { animate, useMotionValue } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { POKEMON_COLORS } from "../../../../../../../constants/pokemonImageList";
import { NtfCarouselContainer, NtfCarouselItem } from "./styles";

// import { Container } from './styles';

type NtfCarouselProps = {
  imgaes: string[];
  down?: boolean;
};

const NtfCarousel: React.FC<NtfCarouselProps> = ({ imgaes, down }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);
  const yTranslation = useMotionValue(0);

  useEffect(() => {
    if (ref.current) {
      const observer = new ResizeObserver(() => {
        setHeight(ref.current?.scrollHeight || 0);
      });

      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [ref]);

  useEffect(() => {
    const currentHeight = height !== null ? -height : 0;
    const finalPosition = currentHeight / 2 - 16;
    const controls = animate(
      yTranslation,
      [down ? 0 : finalPosition, down ? finalPosition : 0],
      {
        ease: "linear",
        duration: 50,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      }
    );

    return () => controls.stop();
  }, [yTranslation, height]);

  const ntfList = useMemo(() => {
    const colors = POKEMON_COLORS;
    const newImages = imgaes?.map((url) => ({
      url,
      background: colors[Math.floor(Math.random() * colors.length)],
    }));

    const doubledImages = [...newImages, ...newImages];

    return doubledImages;
  }, [imgaes]);

  return (
    <NtfCarouselContainer ref={ref} style={{ y: yTranslation }}>
      {ntfList.map((image, index) => (
        <NtfCarouselItem key={index} background={image.background}>
          <img src={image.url} alt={image.url} />
        </NtfCarouselItem>
      ))}
    </NtfCarouselContainer>
  );
};

export default NtfCarousel;
