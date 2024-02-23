export const isScrollFlipPopUp = (
  selectedElRef: React.RefObject<HTMLElement>,
  popupRef: React.RefObject<HTMLElement>
): boolean => {
  const dateRangeRect = selectedElRef.current!.getBoundingClientRect();
  const datePopUpHeight = popupRef.current!.getBoundingClientRect().height;

  const distanceFromTop = dateRangeRect.top - window.scrollY;

  if (!dateRangeRect || !datePopUpHeight) return false;

  if (distanceFromTop > datePopUpHeight) {
    return true;
  } else if (
    distanceFromTop * -1 > datePopUpHeight / 1.5 ||
    distanceFromTop / 2.5 < datePopUpHeight
  ) {
    return false;
  }

  return false;
};
