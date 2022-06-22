import styled from "@emotion/styled";

export const Search = styled.div`
  position: relative;
  width: 100%;
  height: 3.2rem;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 1024px) {
    height: 4rem;
  }

  .icon {
    position: absolute;
    z-index: 1;
    background-color: #fff;
    width: 2.6rem;
    height: 2.6rem;

    svg {
      fill: #707070;
    }

    @media only screen and (min-width: 1024px) {
      width: 3.6rem;
      height: 3.6rem;
    }
  }

  .InputBase {
    width: 100%;
    background-color: #fff;
    padding: 1rem 3.5rem 1rem 0;
    height: 100%;
    font-size: 1.5rem;
    font-weight: 500;
    max-width: 124.8rem;
    border-color: #707070;
    border-width: 0 0 0.2rem 0;
    border-style: solid;

    @media only screen and (min-width: 1024px) {
      padding: 1rem 4.5rem 1rem 1rem;
    }

    input::placeholder {
      color: #262626;
    }
  }

  .Mui-focused {
    border-color: #000;
    border-width: 0 0 0.2rem 0;
    border-style: solid;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: right;
  height: 100%;
  width: 100%;
  max-width: 124.8rem;
  align-items: center;
`;

export const SearchIcon = styled.div`
  padding: 0.2rem;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
