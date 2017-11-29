function getFirstSelector(selector) {
 return document.querySelector(selector)
}


function nestedTarget () {
  const main = document.querySelector('#nested')
  return main.querySelector('.target')
}

nestedTarget()

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i <lis.length; i++) {
  lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
  }
 
 function deepestChild() {
   var node = document.getElementById('grand-node')
   var nextNode = node.children[0]
   while (nextNode) {
     node = nextNode
     nextNode = node.children[0]
   }
   return node
 }