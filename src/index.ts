import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter";
 
export class TreeBuilderElement extends HTMLElement {
  constructor(){
    super();
  }

  public connectedCallback(): void {
    this.drawTree();
  }
  
  private drawTree() {
    const tree = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    tree.setAttribute('height', '400');
    tree.setAttribute('width', '450');
  
    tree.innerHTML = '<path d="M 100 350 q -2 -25 5 -50 q 7 -25 5 -50 q -2 -25 5 -50 q -2 25 5 50 q 7 25 5 50 q -2 25 5 50 Z" stroke="black" stroke-width="1" fill="black" />';
  
    this.appendChild(tree);
  }  
}

customElements.define('tree-builder', TreeBuilderElement);

document.getElementsByTagName('tree-builder').item(0)?.appendChild(new TreeBuilderElement())