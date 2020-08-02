import { Component, Prop, State } from "@stencil/core";
import { h } from "@stencil/core";

@Component({
  tag: "yo-button",
  styleUrl: "./button.css",
  shadow: true,
})
export class Tooltip {
  @State() show: boolean;
  @Prop({ reflect: true }) variant: string;
  @Prop({ reflect: true }) color: string;
  classes = "";

  // attach styles
  connectedCallback() {
    this.color = this.color || 'primary';
    this.variant = this.variant || 'contained';
    this.classes = `yo-btn__${this.color}--${this.variant}`
  }

  render() {
    return (
      <button class={`${this.classes}`}>
        <slot />
      </button>
    );
  }
}
