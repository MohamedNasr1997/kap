const direction = document.documentElement.dir || "ltr";
const left = direction === "ltr" ? "left" : "right";
const right = direction === "rtl" ? "left" : "right";

export const Direction = direction;
export const Left = left;
export const Right = right;
export const MarginLeft = `margin-${left}`;
export const MarginRight = `margin-${right}`;
export const PaddingLeft = `padding-${left}`;
export const PaddingRight = `padding-${right}`;
