const scrollToTop = () => {
  const duration = 500;
  let difference = window.scrollY;
  let step = (10 * difference) / duration;
  let timer = setInterval(function () {
    difference -= step;
    window.scrollTo(0, difference);
    document.body.setAttribute("data-scrollable", "true");
    if (window.scrollY === 0) {
      document.body.removeAttribute("data-scrollable");
      clearInterval(timer);
    }
  }, 10);
}

export default scrollToTop;