import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (message: string) =>
  toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    theme: "dark",
    progress: undefined,
  });
