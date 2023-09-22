export const isNull = (data) =>
  data["author"] &&
  data["content"] &&
  data["description"] &&
  data["source"]["id"] &&
  data["source"]["name"] &&
  data["title"] &&
  data["urlToImage"];
