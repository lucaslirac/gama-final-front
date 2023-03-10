import styled from "styled-components";

export const Wrapper = styled.section`
    position: relative;
    width: 80%;
    margin: 2rem auto 0;
    @media (min-width: 600px) {
        width: 90%;
    }
    @media (min-width: 800px) {
        width: 94%;
    }
    @media (min-width: 1400px) {
        width: 100%;
    }
`

export const Slider = styled.div`
    &:not([data-keen-slider-disabled]) {
        position: relative;
        display: flex;
        align-content: flex-start;
        width: 100%;
       // border-radius: .75rem;
        overflow: hidden;
        touch-action: pan-y;
        user-select: none;
    }
`
export const Slide = styled.div`
    min-width: 298px;
    max-width: 298px;
    transform: translate3d(0px, 0px, 0px);
`

export const ArrowButton = styled.button`
    display: flex;
    position: absolute;
    top: 50%;
    left: -3rem;
    transform: translateY(-50%);
    font-size: 2rem;
    line-height: 1;
    padding: .5rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const ArrowButtonR = styled.button`
    display: flex;
    position: absolute;
    top: 50%;
    right: -3rem;
    transform: translateY(-50%);
    font-size: 2rem;
    line-height: 1;
    padding: .5rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;