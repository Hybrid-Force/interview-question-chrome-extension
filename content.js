function injectPopover() {
    const popoverHTML = `
    <div id="font-popover">
      <p>Font size: <span id="font-size"></span></p>  
      <p>Font family: <span id="font-family"></span></p>
      <p>Font weight: <span id="font-weight"></span></p>    
      <p>Font style: <span id="font-style"></span></p>
      <p>Font variant: <span id="font-variant"></span></p>
      <p>Font stretch: <span id="font-stretch"></span></p>  
      <p>Line height: <span id="line-height"></span></p>
      <p>Letter spacing: <span id="letter-spacing"></span></p>  
      <p>Word spacing: <span id="word-spacing"></span></p>  
      <p>Text decoration: <span id="text-decoration"></span></p>
    </div>
  `;

    const popover = document.createElement('div');
    popover.innerHTML = popoverHTML;
    popover.id = 'font-popover';
    document.body.appendChild(popover);
}

let lastTextElement;
document.addEventListener("mouseover", (event) => {
    if (event.target.textContent) {
        lastTextElement = event.target;
    }
});

document.addEventListener("mousemove", (event) => {
    if (lastTextElement) {
        const style = window.getComputedStyle(lastTextElement);
        const posX = event.pageX;
        const posY = event.pageY;
        const fontSize = style.fontSize;
        const fontFamily = style.fontFamily.replace(/"/g, "");
        const fontWeight = style.fontWeight;
        const fontStyle = style.fontStyle;
        const fontVariant = style.fontVariant;
        const fontStretch = style.fontStretch;
        const lineHeight = style.lineHeight;
        const letterSpacing = style.letterSpacing;
        const wordSpacing = style.wordSpacing;
        const textDecoration = style.textDecoration;

        document.querySelector('#font-size').textContent = fontSize;
        document.querySelector('#font-family').textContent = fontFamily;
        document.querySelector('#font-weight').textContent = fontWeight;
        document.querySelector('#font-style').textContent = fontStyle;
        document.querySelector('#font-variant').textContent = fontVariant;
        document.querySelector('#font-stretch').textContent = fontStretch;
        document.querySelector('#line-height').textContent = lineHeight;
        document.querySelector('#letter-spacing').textContent = letterSpacing;
        document.querySelector('#word-spacing').textContent = wordSpacing;
        document.querySelector('#text-decoration').textContent = textDecoration;

        const popover = document.querySelector('#font-popover');
        popover.style.top = posY + 'px';
        popover.style.left = posX + 'px';
    } else {
        const popover = document.querySelector('#font-popover');
        popover.style.display = 'none';
    }
});
