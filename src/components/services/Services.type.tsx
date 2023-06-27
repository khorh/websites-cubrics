export interface IServices {
  id: number;
  iconUrl: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  iconAlt: string;
  title: string;
  introduction: string;
  description: string;
  order: number;
}
