import { Component, Prop, State } from "@stencil/core";
import { h } from "@stencil/core";

@Component({
  tag: "yo-select",
  styleUrl: "./select.css",
  shadow: true,
})
export class Tooltip {
  @State() userOptions: any;
  @State() selectedItem: any;
  @State() selectedItems: any = [];
  @Prop({ reflect: true }) options: string;
  @Prop({ reflect: true }) isMultiple: boolean = false;
  @Prop({ reflect: true }) isSelecting: boolean = false;

  connectedCallback() {
    this.userOptions = this.options ? JSON.parse(this.options) : [];
  }

  selectClicked = () => {
    this.isSelecting = !this.isSelecting;
  };

  optionSelected = (option: any) => {
    if (this.isMultiple) {
      this.selectedItems = [...this.selectedItems, option.label];
      return;
    }

    this.selectedItem = option.label;
  };

  render() {
    return (
      <div
        class="yo-select-container"
        onClick={this.selectClicked}
        id="yo-select-container"
      >
        <div class="selected-item-container">
          {this.isMultiple ? (
            <div class="selected-item__multiple--container">
              {this.selectedItems.map((label) => (
                <div class="selected-item__multiple--chip">
                  <span class="selected-item--chip__label">{label}</span>
                  <span class="selected-item--chip__close">x</span>
                </div>
              ))}
            </div>
          ) : (
            <div>{this.selectedItem || "select"}</div>
          )}
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div class="select-list">
          {this.userOptions.map((option) => (
            <div
              onClick={() => this.optionSelected(option)}
              class="select-list-items"
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
