import { client } from "./api";

const getPages = async () => {
  const response = await client.getEntries({
    content_type: "pageContent",
  });

  return response.items;
};

export default getPages;
