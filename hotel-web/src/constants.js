// eslint-disable-next-line import/prefer-default-export
export const Color = {
  DANGER: "#eb5757",
  DISABLED_PRIMARY: "#80d5ff",
  LIGHT_BLUE: "#cfe7ff",
  LIGHT_TEXT: "#aaa",
  PRIMARY: "#40a1ff",
  PRIMARY_TEXT: "#3D4457",
  SECONDARY_TEXT: "#8A8C94",
  SUCCESS: "#4EC977",
}

export const Colors = {
  Background: "#f4f5f8",
  Border: "#e0e0e0",
  LightPrimary: "#ecf6ff",
  LightText: "#8a8c94",
  LighterText: "#aaa",
  Placeholder: "#c0c0c0",
  Primary: "#40a1ff",
  Text: "#3d4457",
}
const CLASS_STUDENT_PREFIX = "class-student"
export const SOCKET_EVENTS = {
  LS_CREATE: "live-session-create",
  LS_OFFER: "live-session-offer",
  LS_ANSWER: "live-session-answer",
  LS_JOIN: "live-session-join",
  LS_LEAVE: `live-session-leave`,
  CS_ONLINE: `${CLASS_STUDENT_PREFIX}-online`,
  CS_OFFLINE: `${CLASS_STUDENT_PREFIX}-offline`,
  CS_LEAVED: `${CLASS_STUDENT_PREFIX}-leaved`,
  CS_LIST: `${CLASS_STUDENT_PREFIX}-list`,
}
