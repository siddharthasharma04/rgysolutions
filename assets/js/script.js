(function (_fn) {
  $(_fn);
})(function () {
  //BG slides
  const slides = $(".poster-slide");
  let index = 0;
  setInterval(() => {
    index = index < 10 ? index + 1 : 0;
    slides.removeClass("active").eq(index).addClass("active");
  }, 2500);

  // Quotes
  const qu1 = ["DON'T TELL PEOPLE YOUR", "PLAN", "SHOW THEM YOUR", "RESULTS"];
  const qu2 = ["TAKE THE", "RISK", "-OR- LOSE THE", "CHANCE"];

  const quotes = [qu1, qu2];

  const writeQuote = (itm = [], i) => {
    const quoteContainer = $(".quote").empty();
    // Some Methods
    const addCharToLine = (_line, _char) =>
      $(_line).html(`${$(_line).text()}${_char}`);

    const addNewLine = (lineNumber) =>
      quoteContainer.append(
        $(
          `<span class="line${
            lineNumber % 2 !== 0 ? " highlight" : ""
          }"></span>`
        )
      );

    //Flags
    let lineInx = 0;
    let charInx = 0;

    //Add first line
    addNewLine(lineInx);

    //Repete Char
    const typeInterval = setInterval(() => {
      quoteContainer.find(".line").removeClass("typeing");
      const lineDiv = quoteContainer.find(".line:last").addClass("typeing");
      const line = itm[lineInx];
      if (lineInx < itm.length) {
        if (charInx < line.length) {
          addCharToLine(lineDiv, line[charInx]);
          charInx += 1;
        } else {
          lineInx += 1;
          charInx = 0;
          lineInx < itm.length && addNewLine(lineInx);
        }
      } else {
        clearInterval(typeInterval);
        setTimeout(()=>{dismentalQuote(i);},2000)
      }
    }, 150);
  };

  const dismentalQuote = (inx) => {
    const quoteContainer = $(".quote");

    const removalInterval = setInterval(() => {
      const lastLine = quoteContainer.find(".line:last").addClass('typeing');
      const lineTxt = lastLine.text();
      if (lastLine.length !== 0) {
        if (lineTxt !== "") {
          lastLine.html(lineTxt.substr(0, lineTxt.length - 1));
        } else {
          lastLine.remove();
        }
      } else {
        clearInterval(removalInterval);
        const i = inx === 0 ? 1 : 0;
        writeQuote(quotes[i], i);
      }
    },60);
  };

  writeQuote(quotes[0], 0);
});
