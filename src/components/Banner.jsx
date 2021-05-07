import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';

const BannerAnimation = keyframes`
  from {  
    transform: translateX(100%); opacity: 0.8; 
  }
  to {
    transform: translateX(0%); opacity: 1
  }
 `;

const ThumbAnimation = keyframes`
  0% {
    font-size: 1vh
  }
  80% {
    font-size: 80vh
  }
  100% {
    opacity: 0%
  }
`;

const AnimatedBanner = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  animation-name: ${BannerAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  z-index: 100;
  background: black;
  color: white;
  border-radius: 10px;
  padding: 0px 5px 0px 5px;
  text-align: center;
`;

const BigThumb = styled.span`
  position: fixed;
  top: 25vh;
  // right: 0;
  z-index: 101;
  // opacity: 0;
  animation-name: ${ThumbAnimation};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;  
`;


export default function Banner() {
  const [visible, setVisible] = useState(true);

  // Disable the thumb after a second.
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 999);
  })

  return (
    <>
      <AnimatedBanner>
        <h5>
          Congratulations! <br /> You've selected all your nominations!
        </h5>
      </AnimatedBanner>
     { visible && <BigThumb>👍</BigThumb>}
    </>
  );
}
