class PopRoar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `p💫️p<strong>RO🔺R</strong>`;
    }
  }
      
  customElements.define('pop-roar', PopRoar);