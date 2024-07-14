import { useEffect, useRef } from 'react';

const useTypewriter = (elementRef, toRotate, period) => {
  useEffect(() => {
    class TxtType {
      constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      }

      tick() {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(() => {
          this.tick();
        }, delta);
      }
    }

    if (elementRef.current) {
      const element = elementRef.current;
      const toRotateParsed = JSON.parse(toRotate);
      if (toRotateParsed) {
        new TxtType(element, toRotateParsed, period);
      }
    }

    // INJECT CSS
    const css = document.createElement("style");
    css.type = "text/css";
    document.body.appendChild(css);
  }, [elementRef, toRotate, period]);
};

export default useTypewriter;
