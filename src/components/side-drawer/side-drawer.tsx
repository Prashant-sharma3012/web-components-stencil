import { Component, Prop, State } from "@stencil/core/internal";
import { h } from "@stencil/core";

@Component({
  tag: "yo-side-drawer",
  styleUrl: "./side-drawer.css",
  shadow: true,
})
export class SideDrawer {
  @State() showContent = true;
  @Prop({ reflect: true }) menutitle: string;
  @Prop({ reflect: true, mutable: true }) open: boolean;

  onClose = () => {
    this.open = false;
  };

  onContentChange = (content: string) => {
    if (content === "nav") {
      return (this.showContent = true);
    }
    return (this.showContent = false);
  };

  render() {
    let mainContent = <slot />;

    if (!this.showContent) {
      mainContent = (
        <div>
          <div class="contact-title">contact information</div>
          <div class="contact-body">
            <div>you can reach out to us at</div>
            <ul>
              <li>Phone: 99999999</li>
              <li>Email: sidebar_makers@yo.com</li>
            </ul>
          </div>
        </div>
      );
    }

    return [
      <div class="backdrop" onClick={this.onClose}></div>,
        <aside>
          <header>
            <h1>{this.menutitle}</h1>
            <button onClick={this.onClose}>X</button>
          </header>
          <section id="tabs">
            <button
              onClick={() => this.onContentChange("nav")}
              class={this.showContent ? "active" : ""}
            >
              Navigation
            </button>
            <button
              onClick={() => this.onContentChange("contact")}
              class={this.showContent ? "" : "active"}
            >
              Contact
            </button>
          </section>
          <main>{mainContent}</main>
        </aside>
    ]
  }
}
