import { isValidElement, useEffect, useState, ReactNode, ReactElement } from "react";

type Props = {
  lines: ReactNode[];
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

    function getText(node: ReactNode): string {
      if (typeof node === "string" || typeof node === "number") return String(node);
      if (isValidElement(node)) {
        const element = node as ReactElement<Record<string, unknown>>;
        const children = element.props.children;
        if (Array.isArray(children)) {
          return children.join("");
        }
        return typeof children === "string" || typeof children === "number" ? String(children) : "";
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