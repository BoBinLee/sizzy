import styled from 'styled-components';
import flex from 'styles/flex';
import {deviceHeader} from 'styles/sizes';
import {colorTransition} from 'styles/shared';
import {
  rotateIconOnOrientationChange,
  whenHovering,
  cond
} from 'utils/sc-utils';

//classnames
export const buttonIconClassname = 'c-device__button-icon';

const sizes = {
  button: {
    size: 25,
    iconSize: 18
  }
};

//external
import $Icon from 'react-fontawesome';

export const Device = styled.div`
  ${flex.vertical}
  ${p => cond(!p.appHasFocusedDevice, `
    margin-bottom: 25px
    margin-right: 25px;
  `)};
`;

export const Header = styled.div`
  ${flex.horizontal}
  ${flex.centerHorizontal}
  ${flex.spaceBetween}
  height: ${deviceHeader.height}px;
  width: 100%;
  margin-bottom: 15px;
`;

export const Name = styled.div`
  font-size: ${p => (p.small ? 12 : 15)}px;
  font-weight: 400;
  color: ${p => p.theme.color};
  text-align: center;
  flex: 1;
`;

export const Buttons = styled.div`
  ${flex.horizontal}
  ${flex.centerHorizontalV}
  flex: 1;
`;

export const Button = styled.div`
  ${flex.horizontal}
  ${flex.centerHorizontal}
  cursor: pointer;
  width: ${sizes.button.size}px;
  height: ${sizes.button.size}px;
  border: 1px solid rgba(255, 255, 255, 0.27);
  border-radius: 4px;
  transition: all 50ms linear;
  margin-right: 5px;
  
  &:last-child {
    margin: 0;
  }
  
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.8);
  }
  
  ${whenHovering(buttonIconClassname, `
    color: rgba(255, 255, 255, 0.8);
  `)}
  
   ${p => cond(p.value === true, `
      .${buttonIconClassname}{
        color: rgba(255, 255, 255, 0.8);
      }
   `)}
`;

export const Size = styled.div`
  ${flex.horizontal}
  ${flex.justifyEnd}
  font-size: 11px;
  color: white;
  flex: 1;
`;

export const ButtonIcon = styled($Icon)`
  transition: ${colorTransition};
  ${rotateIconOnOrientationChange};
  color: rgba(255,255,255, 0.27);
  font-size: ${p => p.fontSize || sizes.button.iconSize}px !important;
`;

export const Keyboard = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 999;
`;
