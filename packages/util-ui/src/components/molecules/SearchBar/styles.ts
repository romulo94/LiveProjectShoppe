import styled from "@emotion/styled";

export const Search = styled.div`
  position: relative;
  border-radius: 0.4rem;
  margin-top: 0;
  width: 100%;
  height: 3.2rem;
  padding: 0 1.6rem;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 1024px) {
    height: 4rem;
    margin-top: 1rem;
    padding: 0 4.8rem;
  }

  .icon {
    position: absolute;
    z-index: 1;
    background-color: #efefef;
    width: 2.6rem;
    height: 2.6rem;
    margin-left: 0.2rem;

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
    background-color: #efefef;
    padding: 1rem 1rem 1rem 3.5rem;
    border-radius: 0.4rem;
    height: 100%;
    font-size: 1.5rem;
    font-weight: 500;
    max-width: 124.8rem;
    border: 0.2rem solid transparent;

    @media only screen and (min-width: 1024px) {
      padding: 1rem 1rem 1rem 4.5rem;
    }

    input::placeholder {
      color: #262626;
    }
  }

  .Mui-focused {
    border: 0.2rem solid #000;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: left;
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
