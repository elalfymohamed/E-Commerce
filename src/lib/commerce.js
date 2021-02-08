import Commerce from "@chec/commerce.js";
const CHEC_KEY = process.env.REACT_APP_CHEC_PUBLIC_KEY;
export const commerce = new Commerce(CHEC_KEY, true);
