import { useEffect, useState } from "react";
import "./AutoTyping.css";

export default function AutoTyping() {
  const words = ["Amandeep.", "Developer.", "Athelete.", "Student", "Powerlifter"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);      // which word
  const [subIndex, setSubIndex] = useState(0); // which char
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    const interval = setInterval(() => {
      // typing
      if (!deleting) {
        setText(currentWord.substring(0, subIndex + 1));
        setSubIndex((prev) => prev + 1);

        if (subIndex === currentWord.length) {
          // pause before deleting
          setTimeout(() => setDeleting(true), 700);
        }
      }

      // deleting
      if (deleting) {
        setText(currentWord.substring(0, subIndex - 1));
        setSubIndex((prev) => prev - 1);

        if (subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, deleting ? 80 : 120); // delete faster than type

    return () => clearInterval(interval);
  }, [subIndex, deleting, index]);

  return (
    <h1 className="auto-type-title text-6xl font-bold mb-7 ">
      I'm a <span className="auto-type-cursor">{text}</span>
    </h1>
  );
}
