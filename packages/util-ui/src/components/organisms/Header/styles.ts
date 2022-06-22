import styled from "@emotion/styled";

export const ContentHeader = styled.header`
  position: relative;
`;

export const Container = styled.header`
  background-color: #fff;
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 1.6rem 1.6rem 0 1.6rem;

  @media only screen and (min-width: 1024px) {
    padding: 4.8rem 4.8rem 0 4.8rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 124.8rem;
  padding-bottom: 1.6rem;

  @media only screen and (min-width: 1024px) {
    border-bottom: 0.1rem solid #d8d8d8;
  }
`;

export const GroupMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: right;
  column-gap: 1.6rem;

  @media only screen and (min-width: 1024px) {
    column-gap: 3.9rem;
  }
`;

export const WrapperMobile = styled.div`
  column-gap: 1.6rem;
  display: flex;

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

export const WrapperDesktop = styled.div`
  display: none;

  @media only screen and (min-width: 1024px) {
    display: contents;
  }
`;

export const WrapperSearchBar = styled.div<{ isShowSearchBar: boolean }>`
  display: block;

  @media only screen and (min-width: 1024px) {
    display: ${({ isShowSearchBar }) => (isShowSearchBar ? "block" : "none")};
  }
`;
