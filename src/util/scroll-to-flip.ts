export const isScrollFlipPopUp = (
  rootElRef: React.RefObject<HTMLElement>,
  popupRef: React.RefObject<HTMLElement>
): boolean => {
  const rootRect = rootElRef.current!.getBoundingClientRect();
  const popupHeight = popupRef.current!.getBoundingClientRect().height;

  const distanceFromTop = rootRect.top - window.scrollY;

  if (!rootRect || !popupHeight) return false;

  if (distanceFromTop > popupHeight) {
    return true;
  } else if (
    distanceFromTop * -1 > popupHeight / 1.5 ||
    distanceFromTop / 2.5 < popupHeight
  ) {
    return false;
  }

  return false;
};
