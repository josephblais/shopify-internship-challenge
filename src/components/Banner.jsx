import styled from 'styled-components';
import { keyframes } from 'styled-components';

const bannerAnimation = keyframes`
  from {  top: -100px; opacity: 0.6; }
  to {  top: 0px; opacity: 1 }
 `;

const AnimatedBanner = styled.div`
  position: absolute;
  top: 0;
  right: 1rem;
  animation-name: ${bannerAnimation};
  animation-duration: 2s;
  animation-iteration-count: 1;
  z-index: 100;
`;

export default function Banner() {
  return (
    <AnimatedBanner >
    <h3>🎆Congratulations! You've selected all your nominations!🎆</h3>
    </AnimatedBanner>
  )
}