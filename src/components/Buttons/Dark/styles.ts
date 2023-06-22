import styled from 'styled-components'
import { Button } from 'antd'

export const AntButton = styled(Button)`
  white-space: unset;
  height: auto;
  color: #FF963C;
  background-color: #414141;
  border-color: #414141;

  &.ant-btn:hover {
    color: #FF963C;
    background-color: #3d3d3d;
    border-color: #3d3d3d;
  }

  &.ant-btn:focus {
    color: #FF963C;
    background-color: #3a3a3a;
    border-color: #3a3a3a;
  }

  &.ant-btn:active {
    color: #FF963C;
    background-color: #373737;
    border-color: #373737;
  }
`
