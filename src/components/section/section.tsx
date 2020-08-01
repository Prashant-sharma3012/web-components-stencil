import { Component, Prop, State } from "@stencil/core";
import { h } from "@stencil/core";

@Component({
  tag: "yo-section",
  styleUrl: "./section.css",
  shadow: true,
})
export class Section {
  @State() collapsed: boolean = false;
  @Prop({ reflect: true }) isCollapsible: boolean;
  @Prop({ reflect: true }) collapse: boolean;
  @Prop({ reflect: true }) sectionTitle: string;

  handleCollapse = () => {
    this.collapsed = !this.collapsed;
    this.collapse = this.collapsed;
  };

  render() {
    let content = this.collapse ? "" : <slot />;
    let collapseAction = this.isCollapsible ? (
      <div onClick={this.handleCollapse} class="yo-section-header-btn">
        {this.collapsed ? "more" : "less"}
      </div>
    ) : (
      ""
    );
    
    return (
      <div class="yo-section-container">
        <div class="yo-section-header">
          <div class="yo-section-header-title">{this.sectionTitle}</div>
          {collapseAction}
        </div>
        <div class="yo-section-content">{content}</div>
      </div>
    );
  }
}
