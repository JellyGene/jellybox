import { client } from "./api";

const getWork = async () => {
  const response = await client.getEntries({
    content_type: "work",
  });

  return response.items;
};

export default getWork;
