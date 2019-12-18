import template from "./xml/home.xml";

console.log({ template });

export const homeTemplate = new DOMParser().parseFromString(
  template,
  "text/xml"
);
