export interface IIndustry {
  id: number;
  image: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  alt: string;
  title: string;
  order: number;
}
