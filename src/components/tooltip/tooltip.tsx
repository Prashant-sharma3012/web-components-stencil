import { Component, Prop, State } from "@stencil/core";
import { h } from "@stencil/core";

@Component({
  tag: "yo-tooltip",
  styleUrl: "./tooltip.css",
  shadow: true,
})
export class Tooltip {
  @State() show: boolean;
  @Prop({ reflect: true }) tooltiptext: string;
  @Prop({ reflect: true }) tooltipposition: string = 'right';

  showTooltip = () => this.show = true;

  hideTooltip = () => (this.show = false);

  render() {
    return (
      <div class="yo-tooltip-container" onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip}>
        <slot />
        {this.show ? <span class="yo-tooltip-text">{this.tooltiptext}</span> : ''}
      </div>
    );
  }
}
