export const MOBILE_QUERY = "(min-width: 375px)";
export const TABLET_QUERY = "(min-width: 768px)";
export const DESKTOP_QUERY = "(min-width: 1440px)";
// export const DESKTOP_L_QUERY = "(min-width: 1600px)"; // 1600px and above

console.log(" MOBILE_QUERY =>", window.matchMedia(MOBILE_QUERY).matches); // true/false
console.log("TABLET_QUERY =>", window.matchMedia(TABLET_QUERY).matches); // true/false
console.log("DESKTOP_QUERY =>", window.matchMedia(DESKTOP_QUERY).matches); // true/false
// console.log("=>", window.matchMedia(DESKTOP_L_QUERY).matches); // true/false
