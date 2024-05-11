class MySelect extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      const template = document.createElement('template');
      template.innerHTML = `
        <select>
          <slot></slot>
        </select>
      `;
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.select = this.shadowRoot.querySelector('select');
      this.select.addEventListener('change', this.handleChange.bind(this));
    }
  
    handleChange() {
      const event = new CustomEvent('change', {
        detail: { value: this.select.value }
      });
      this.dispatchEvent(event);
    }
  }
  
  customElements.define('my-select', MySelect);
  