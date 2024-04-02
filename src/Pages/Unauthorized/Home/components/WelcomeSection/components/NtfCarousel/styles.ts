import { motion } from "framer-motion";
import styled from "styled-components";

export const NtfCarouselContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  min-height: max-content;

  gap: 16px;
`;
type NtfCarouselProps = {
  background: string;
};

export const NtfCarouselItem = styled.div<NtfCarouselProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  aspect-ratio: 1 / 1.4;
  flex: 1;
  border-radius: 16px;
  background: ${({ background }) => background};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  transition: 0.3s;
  cursor: pointer;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
