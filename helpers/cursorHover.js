import { refCursor } from "@/components/cursor/Cursor";
const updateStyles = (styles) => {
  Object.keys(styles).forEach((style) => {
    refCursor.current.style[style] = styles[style];
  });
};


export default updateStyles