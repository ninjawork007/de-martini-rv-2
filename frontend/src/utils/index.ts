export const showMoreDots = (input: string, length: number) => {
  if (!input) return "";

  if (input.length > length) return "...";
};

export const htmlDecode = (input: string) => {
  let e = document.createElement("div");
  e.innerHTML = input;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue || "";
};
