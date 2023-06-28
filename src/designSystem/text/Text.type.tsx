export interface IText extends React.HTMLAttributes<HTMLParagraphElement> {
  type: "p1" | "p2" | "footer";
  colour?: "base__dark" | "base__light";
}
