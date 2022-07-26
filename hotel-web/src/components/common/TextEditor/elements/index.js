import styled from "styled-components"

export const TextEditorContainer = styled.div`
  margin-top: -0.35rem;
  .label {
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.875rem;
    line-height: 1.05875rem;
  }
  .ql-toolbar {
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    border-left: unset;
    border-right: unset;
    border-top: unset;
  }
  .ql-container {
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    min-height: 13.75rem;
    border: unset;
    max-height: 13.75rem;
    overflow-y: scroll;
  }
  .ql-editor {
    min-height: 13.75rem;
    overflow-wrap: anywhere;
  }
  .react-editor {
    border-radius: 0.5rem;
    border: 0.0001rem solid #dedede;
    &.is-focused {
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 0.125rem ${({ theme }) => theme.colors.lightPrimary};
    }
  }
`
