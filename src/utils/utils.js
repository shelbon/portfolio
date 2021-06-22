function makeSpaceForNavigationByTagName(
  isMobile,
  tagName,
  property,
  condition
) {
  if (isMobile === condition) {
    const element = document.getElementsByTagName(tagName)[0];
    element.style[property] = "var(--nav-height)";
  }
}
function makeSpaceForNavigationByClassName(
  isMobile,
  className,
  property,
  condition
) {
  if (isMobile === condition) {
    const element = document.getElementsByClassName(className)[0];
    element.style[property] = "var(--nav-height)";
  }
}
export { makeSpaceForNavigationByTagName, makeSpaceForNavigationByClassName };
