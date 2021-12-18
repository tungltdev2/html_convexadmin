const app = {
  isCurrent: true,
  isQnt: true,
  isSlideLocation: 1,
  isSlideSuggest: 1,
  isSlideDicover: 1,
  slideAutoAnimate() {
    let counter = 2;
    setInterval(() => {
      document.getElementById("radio" + counter).checked = true;
      counter++;
      if (counter > 2) {
        counter = 1;
      }
    }, 5000);
  },

  handerEvent() {
    const _this = this;
    const currentElement = document.querySelector(".currency-box");
    const qntElement = document.querySelector(".quality__form");
    const qntBtn = document.querySelector(".header__search-input-qnt");
    // xu li bam vao nut doi ngon ngu
    document.querySelector(".navbar__country-waper").onclick = function (e) {
      e.stopPropagation();
      currentElement.onclick = (e) => {
        e.stopPropagation();
      };
      _this.isCurrent = !_this.isCurrent;
      currentElement.classList.toggle("hiden-on-click", _this.isCurrent);
      if (!_this.isQnt) {
        _this.isQnt = true;
        qntElement.classList.add("hiden-on-click");
        qntBtn.classList.remove("active");
      }
    };
    // xu li bam vao nut so khach hang
    qntBtn.onclick = function (e) {
      e.stopPropagation();
      qntElement.onclick = (e) => {
        e.stopPropagation();
      };
      _this.isQnt = !_this.isQnt;
      qntElement.classList.toggle("hiden-on-click", _this.isQnt);
      qntBtn.classList.toggle("active", !_this.isQnt);

      if (!_this.isCurrent) {
        _this.isCurrent = true;
        currentElement.classList.add("hiden-on-click");
      }
    };
    // xu li khi bam ben ngoai de ẩn cac bang ma van giu nguyen cac mong muon khac cua nguoi bam
    document.onclick = () => {
      if (!_this.isCurrent) {
        _this.isCurrent = true;
        currentElement.classList.add("hiden-on-click");
      }
      if (!_this.isQnt) {
        _this.isQnt = true;
        qntElement.classList.add("hiden-on-click");
        qntBtn.classList.remove("active");
      }
    };
    // xu li cho slide location cu nut bam hai ben
    (() => {
      let nextBtn = document.querySelector(".location-slides .btn-next");
      let prevBtn = document.querySelector(".location-slides .btn-prev");
      nextBtn.onclick = () => {
        _this.isSlideLocation++;
        document.getElementById(
          "radio-location" + _this.isSlideLocation
        ).checked = true;
        if (_this.isSlideLocation > 1) prevBtn.classList.remove("disable");
        if (_this.isSlideLocation > 3) nextBtn.classList.add("disable");
      };
      prevBtn.onclick = () => {
        _this.isSlideLocation--;
        document.getElementById(
          "radio-location" + _this.isSlideLocation
        ).checked = true;
        if (_this.isSlideLocation < 2) prevBtn.classList.add("disable");
        if (_this.isSlideLocation < 4) nextBtn.classList.remove("disable");
      };
    })();
    // xu li slide cua suggest
    (() => {
      let nextBtn = document.querySelector(".suggest-slides .btn-next");
      let prevBtn = document.querySelector(".suggest-slides .btn-prev");
      nextBtn.onclick = () => {
        _this.isSlideSuggest++;
        document.getElementById(
          "suggest-radio" + _this.isSlideSuggest
        ).checked = true;
        if (_this.isSlideSuggest > 1) prevBtn.classList.remove("disable");
        if (_this.isSlideSuggest > 3) nextBtn.classList.add("disable");
      };
      prevBtn.onclick = () => {
        _this.isSlideSuggest--;
        document.getElementById(
          "suggest-radio" + _this.isSlideSuggest
        ).checked = true;
        if (_this.isSlideSuggest < 2) prevBtn.classList.add("disable");
        if (_this.isSlideSuggest < 4) nextBtn.classList.remove("disable");
      };
    })();
    // su li slide cua dicover
    (() => {
      let nextBtn = document.querySelector(".dicover-slides .btn-next");
      let prevBtn = document.querySelector(".dicover-slides .btn-prev");
      nextBtn.onclick = () => {
        _this.isSlideDicover++;
        document.getElementById(
          "dicover-radio" + _this.isSlideDicover
        ).checked = true;
        if (_this.isSlideDicover > 1) prevBtn.classList.remove("disable");
        if (_this.isSlideDicover > 3) nextBtn.classList.add("disable");
      };
      prevBtn.onclick = () => {
        _this.isSlideDicover--;
        document.getElementById(
          "dicover-radio" + _this.isSlideDicover
        ).checked = true;
        if (_this.isSlideDicover < 2) prevBtn.classList.add("disable");
        if (_this.isSlideDicover < 4) nextBtn.classList.remove("disable");
      };
    })();
  },
  start() {
    this.slideAutoAnimate();
    this.handerEvent();
  },
};

app.start();
