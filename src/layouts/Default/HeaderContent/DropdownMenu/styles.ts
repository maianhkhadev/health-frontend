import styled from 'styled-components'

export const Trigger = styled.div`
  align-self: center;
  margin-left: 1rem;

  .show {
    display: none;
  }

  &.ant-dropdown-open {
    .hide {
      display: none;
    }

    .show {
      display: inline-block;
    }
  }
`
