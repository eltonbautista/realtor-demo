import { isValidElement, useEffect, useState } from "react";

type Props = {
  lines: React.ReactNode[];
  typingSpeed?: number;
  lineDelay?: number;
  className?: string;
};

export default function Typewriter({
  lines,
  typingSpeed = 30,
  lineDelay = 400,
  className = "",
}: Props) {
  const [displayed, setDisplayed] = useState<string[]>(Array(lines.length).fill(""));

  useEffect(() => {
    let cancelled = false;
    let line = 0;
    let char = 0;

    function getText(node: React.ReactNode): string {
      if (typeof node === "string" || typeof node === "number") return String(node);
      if (isValidElement(node)) {
        // If children is an array, join; else, just get the string
        if (Array.isArray((node.props as any).children)) {
          return (node.props as any).children.join("");
        }
        return (node.props as any).children || "";
      }
      return "";
    }

    function type() {
      if (cancelled) return;
      if (line >= lines.length) return;

      const text = getText(lines[line]);

      if (char < text.length) {
        setDisplayed((prev) => {
          const next = [...prev];
          next[line] = text.slice(0, char + 1);
          return next;
        });
        char++;
        setTimeout(type, typingSpeed);
      } else {
        line++;
        char = 0;
        setTimeout(type, lineDelay);
      }
    }

    type();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line
  }, []);

  return (
    <h1 className={className}>
      {lines.map((line, i) => (
        <span
          key={i}
          className={
            isValidElement(line) && line.props && typeof line.props === "object" && "className" in line.props
              ? (line.props.className as string)
              : ""
          }
        >
          {displayed[i]}
          <br />
        </span>
      ))}
    </h1>
  );
}