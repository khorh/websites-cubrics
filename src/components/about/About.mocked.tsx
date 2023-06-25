interface IAboutMockedData {
  id: number;
  title: string;
  description: string;
  order: number;
}

export const aboutMockedData: IAboutMockedData[] = [
  {
    id: 1,
    title: "Purpose",
    description:
      "Our purpose is to realise our client's business value by delivering high quality results, at a faster pace and lowering your transformation costs.",
    order: 1,
  },
  {
    id: 2,
    title: "Transparency",
    description:
      "We are passionate and transparent in our aim to address the biggest taboo in IT projects; a fact that 70% of business transformation failed to deliver better performance. With such staggering statistic, we pride ourselves to partner and solve your business problems under the most challenging environments.",
    order: 2,
  },
  {
    id: 3,
    title: "People",
    description:
      "The success of your transformation is predominantly driven by the engagement from your employees. Our talent can work with you to address the design, delivery & adoption rate of digital transformations. Our methodologies have been tried & tested across nearly 50 countries in 5 continents. Explore the possibilities to accelerate with us.",
    order: 3,
  },
];
