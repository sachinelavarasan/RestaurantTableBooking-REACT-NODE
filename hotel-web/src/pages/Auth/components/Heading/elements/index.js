import styled from "styled-components"

export const HeadingContainer = styled.div`
  margin-bottom: ${({ marginBottom }) => marginBottom};
  overflow-wrap: anywhere;
  .title {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: ${({ theme }) => theme.colors.text};
    display: -webkit-box !important;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 0.025rem;
    line-height: 2.375rem;
    overflow: hidden;
    overflow-wrap: anywhere;
    text-overflow: ellipsis;
    white-space: normal;
  }

  .subtitle {
    color: ${({ theme }) => theme.colors.lightText};
    font-size: 0.875rem;
    line-height: 1.3125rem;
  }
`
