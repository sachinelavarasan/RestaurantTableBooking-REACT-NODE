import React from "react"
import { toast } from "react-toastify"

import Toast from "./components/Toast"

export const toastConfig = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: false,
  progress: undefined,
  limit: 1,
}

export const showToast = (icon, text, isDanger) => {
  toast(
    <Toast
      icon={icon}
      text={text}
      onClose={() => toast.dismiss()}
      isDanger={isDanger}
    />,
    toastConfig
  )
}
