import React, { useState, useEffect, createElement } from "react";
import { motion } from "framer-motion";

const Typingtext = ({
  as: Component = "h1",
  sentences = [[]],
  typingSpeed = 60,
  deletingSpeed = 30,
  pauseDuration = 2000,
  initialDelay = 0,
  loop = true,
  showCursor = true,
  cursorCharacter = "|",
  cursorClassName = "text-primary",
  className = "",
  motionProps = {},
  ...props
}) => {
  const [sentenceIndex, setSentenceIndex] = useState(0); // ← Uses current sentence
  const [typedChars, setTypedChars] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const currentSegments = sentences[sentenceIndex] || [];
  const fullText = currentSegments.map((s) => s.text).join(" ");

  // Cursor blinking
  useEffect(() => {
    if (!showCursor) return;
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(interval);
  }, [showCursor]);

  // Typing effect
  useEffect(() => {
    if (!currentSegments.length) return;

    let timeout;

    if (!isDeleting && typedChars === 0 && initialDelay > 0) {
      timeout = setTimeout(() => {
        setTypedChars(1);
      }, initialDelay);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && typedChars < fullText.length) {
      timeout = setTimeout(() => {
        setTypedChars((prev) => prev + 1);
      }, typingSpeed);
    } else if (!isDeleting && typedChars === fullText.length) {
      timeout = setTimeout(() => {
        if (loop) setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && typedChars > 0) {
      timeout = setTimeout(() => {
        setTypedChars((prev) => prev - 1);
      }, deletingSpeed);
    } else if (isDeleting && typedChars === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setSentenceIndex((prev) => (prev + 1) % sentences.length);
      }, pauseDuration);
    }

    return () => clearTimeout(timeout);
  }, [
    typedChars,
    isDeleting,
    fullText,
    loop,
    pauseDuration,
    typingSpeed,
    deletingSpeed,
    initialDelay,
    currentSegments,
    sentences.length,
  ]);

  const renderSegments = () => {
    let charsRemaining = typedChars;
    const rendered = [];

    for (let i = 0; i < currentSegments.length && charsRemaining > 0; i++) {
      const { text, className: segmentClass } = currentSegments[i];
      const takeChars = Math.min(text.length, charsRemaining);
      const isLastSegment = i === currentSegments.length - 1;

      rendered.push(
        <span key={i} className={segmentClass}>
          {text.slice(0, takeChars)}
          {/* Add space only if not last segment AND the whole word is typed */}
          {!isLastSegment && takeChars === text.length && " "}
        </span>
      );

      charsRemaining -= takeChars;
    }

    return rendered;
  };

  return createElement(
    motion[Component] || motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.2, duration: 0.8 },
      className: `inline-block ${className}`,
      ...motionProps,
      ...props,
    },
    <>
      {renderSegments()}
      {showCursor && (
        <span className={`${cursorClassName} ${cursorVisible ? "inline" : "invisible"}`}>
          {cursorCharacter}
        </span>
      )}
    </>
  );
};

export default Typingtext;
