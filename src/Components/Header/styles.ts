import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { IoNotificationsOutline } from 'react-icons/io5';
import { MdOutlineLightMode } from 'react-icons/md';

export const Container = styled.div`
  height: 70px;
  width: 100%;

  transition: all 1s ease;
  background: ${props => props.theme.colors.nav};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

    @media (max-width: 800px) {
      border-bottom: 1px solid #9999;
    }
`;

export const BarsIcon = styled(FaBars)`
  font-size: 1.3rem;
  color: #fff;
  cursor: pointer;

    @media (max-width: 800px) {
      display: none;
    }
`;
export const BarsMobileIcon = styled(FaBars)`
  font-size: 1.3rem;
  color: #fff;
  cursor: pointer;

    display: none;
    @media (max-width: 800px) {
      display: inline;
    }
`;
export const NotifyIcon = styled(IoNotificationsOutline)`
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
`;
export const LightIcon = styled(MdOutlineLightMode)`
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
`;

export const ContentLeftArea = styled.div`
  flex: 2.5;

  @media (max-width: 600px) {
    flex: 1;
  }
`;
export const ContentMiddleArea = styled.div`
  flex: 2;
  h1 {
    color: #FFFF;
  }
`;
export const ContentRight = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    > div {

      button {
        background: transparent;
        border: 0;
      }
    }
`;

export const ContentAreaNameAndAvatar = styled.div`
  display: flex;
  gap: .5rem;
`;
export const ContentName = styled.div`
    h2,h4 {
      color: #eee;
    }

    h2 {
      font-weight: 500;
      font-size: 1em;
    }
    h4 {
      font-weight: 400;
      text-align: end;
    }

    @media (max-width: 600px) {
      display: none;
    }
`;

export const ContentAvatar = styled.div<{ status : boolean }>`

    > div {

      position: relative;

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;

        border: 3px solid var(--color-border);
        padding: 3px;
      }

      &::after {
        content: '';
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: ${props => props.status ? 'var(--color-logged)' : 'var(--color-no-logged)'};

        border: 3px solid ${props => props.theme.colors.nav};
        transition: all 1s ease;

        position: absolute;
        right: 0;
        bottom: 8px;
      }
    }

`;