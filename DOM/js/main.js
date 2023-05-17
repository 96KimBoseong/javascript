import shoppingList from "./data.js";
//회색으로 표기된건 사용한적 없는거

const bestProduct = document.querySelector('.best_product')

for(let i = 0; i<shoppingList.length; i++){
    const bestDiv = document.createElement('div')
    bestDiv.setAttribute('class','best_box')

    const bestImg = document.createElement('img')
    bestImg.setAttribute('src',shoppingList[i].src)
    bestDiv.appendChild(bestImg)

    const bestName = document.createElement('p')
    const bestNameText = document.createTextNode(shoppingList[i].name)
    bestName.appendChild(bestNameText)
    bestDiv.appendChild(bestName)

    const bestPrice = document.createElement('p')
    const bestPriceText = document.createTextNode(shoppingList[i].price)
    bestPrice.appendChild(bestPriceText)
    bestDiv.appendChild(bestPrice)

    bestProduct.appendChild(bestDiv)
}
//문서상 정적 컨텐츠 html로 만든 컨텐츠는 나오지만 자바스크립트로 만든 동적컨텐츠는 서버를 구축해서 돌리지않으면 안나옴 /문서탐색기에서 파일 눌렀을때

//상품이미지 상품명 가격 
//추천 인기순 할라면 배열데이터 안에 인기도 추천도 기준 있어야 되는거 아니묘..?
