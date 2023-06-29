export interface IHeading extends React.HTMLAttributes<HTMLHeadingElement> {
  type: "h1" | "h2" | "h3";
  colour?: "base__dark" | "primary__dark" | "base__light";
}
