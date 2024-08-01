import { useEffect, useRef, MutableRefObject } from "react";

function useAutosizeTextArea(
  value: string
): MutableRefObject<HTMLTextAreaElement | null> {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height
      const scrollHeight = textarea.scrollHeight;
      const maxHeight = 150; // Maximum height

      textarea.style.height =
        scrollHeight > maxHeight ? `${maxHeight}px` : `${scrollHeight}px`;
    }
  }, [value]);

  return textareaRef;
}

export default useAutosizeTextArea;
