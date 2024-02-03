import { client } from "./api";

const getSocials = async () => {
  const response = await client.getEntries({
    content_type: "socials",
  });

  return response.items;
};

export default getSocials;
