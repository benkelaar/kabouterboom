import _ from 'lodash';

function drawTree() {
    const div = document.createElement('div');
    const tree = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    tree.setAttribute('height', '400')
    tree.setAttribute('width', '450')

    // Lodash, now imported by this script
    tree.innerHTML = _.join(['<path d="M 100 350 q -2 -25 5 -50 q 7 -25 5 -50 q -2 -25 5 -50 q -2 25 5 50 q 7 25 5 50 q -2 25 5 50 Z"', 'stroke="black" stroke-width="1" fill="black" />'], ' ');
  
    div.appendChild(tree)
    return div;
  }
  
  document.body.appendChild(drawTree());