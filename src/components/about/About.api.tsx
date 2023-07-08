import { client } from "../../useContentful";

const getAbout = async () => {
  try {
    const entries = await client.getEntries({
      content_type: "about",
    });
    const sanitizedEntries = entries.items.map((item) => {
      return {
        ...item.fields,
      };
    });
    return sanitizedEntries;
  } catch (error) {
    console.log(`Error fetching about ${error}`);
    // setErrorMessage("Data unavailable");
  }
};

export default getAbout;
