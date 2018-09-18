import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputAnt from 'antd/lib/input';
import InputNumberAnt from 'antd/lib/input-number';

import 'antd/lib/input/style/css';
import 'antd/lib/input-number/style/css';
import Img from '../Img';
import QuestionMark from './questionMark.svg';
import Tooltip from '../Tooltip';

const StyledInput = styled.div`
  position: relative;
`;

const StyledImage = styled.div`
  position: absolute;
  left: 100%;
  margin-left: 9px;
  top: 4px;

  img{
    width: 16px;
  }
`;

const Input = (props) => {
  const toRender = [];
  if (props.hasTooltip) {
    const tooltip = (
      <Tooltip
        key={props.tooltipTitle}
        title={props.tooltipTitle}
        arrowPointAtCenter
        placement="topLeft"
      >
        <StyledImage>
          <Img
            src={QuestionMark}
            alt="Hover for information"
          />
        </StyledImage>
      </Tooltip>
    );
    toRender.push(tooltip);
  }

  if (props.type === 'number') {
    const numberInput = (
      <InputNumberAnt
        key={props.placeholder}
        placeholder={props.placeholder}
        size={props.size}
        value={props.value}
        onChange={props.onChange}
        onPressEnter={props.onEnterPressed}
        min={props.min}
      />
    );
    toRender.push(numberInput);
  } else {
    const defaultInput = (
      <InputAnt
        key={props.placeholder}
        placeholder={props.placeholder}
        size={props.size}
        value={props.value}
        onChange={props.onChange}
        onPressEnter={props.onEnterPressed}
      />
    );
    toRender.push(defaultInput);
  }

  return (
    <StyledInput>
      {toRender}
    </StyledInput>
  );
};

Input.propTypes = {
  tooltipTitle: PropTypes.string, // eslint-disable-line react/forbid-prop-types
  hasTooltip: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'number']),
  size: PropTypes.oneOf(['large', 'default', 'small']),
  min: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onEnterPressed: PropTypes.func,
};

Input.defaultProps = {
  tooltipTitle: '',
  placeholder: '',
  hasTooltip: false,
  type: 'text',
  size: 'default',
  min: -Infinity,
  value: '',
  onChange() {},
  onEnterPressed() {},
};

export default Input;
