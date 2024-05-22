const listElems = document.querySelectorAll('.item');
console.log(`Number of categories: ${listElems.length}`);

listElems.forEach(elem =>
  {
    const elemTitle = elem.querySelector("h2").textContent;
    const elemLi = elem.querySelectorAll('li').length;
    console.log(`Category: ${elemTitle}`);
    console.log(`Elements: ${elemLi} `);
  }

)