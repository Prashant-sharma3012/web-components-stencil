import { Component, Prop, State, Event, EventEmitter } from "@stencil/core";
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
  @State() selectedOptions: any = [];
  @Prop({ reflect: true }) options: string;
  @Prop({ reflect: true }) isMultiple: boolean = false;
  @Prop({ reflect: true }) isSelecting: boolean = false;
  @Event({ bubbles: true, composed: true }) selectChange: EventEmitter<any>;

  connectedCallback() {
    this.userOptions = this.options ? JSON.parse(this.options) : [];
  }

  selectClicked = (e) => {
    if (e.target.id === "yo-select-container") {
      this.isSelecting = !this.isSelecting;
    }
  };

  optionSelected = (option: any) => {
    this.isSelecting = !this.isSelecting;
    if (this.isMultiple) {
      this.selectedItems = [...this.selectedItems, option.label];
      this.selectedOptions = [...this.selectedOptions, option];
      this.selectChange.emit(this.selectedOptions);
      
      let optionToHide = this.userOptions.find((e) => e.label === option.label);
      optionToHide.hidden = true;
      return;
    }

    this.selectedItem = option.label;
    this.selectChange.emit(option);
  };

  removeLabel = (label) => {
    let optionToUnHide = this.userOptions.find((e) => e.label === label);
    optionToUnHide.hidden = false;
    this.selectedOptions = this.selectedOptions.filter(
      (e) => e.label !== label
    );
    this.selectedItems = this.selectedItems.filter((e) => e !== label);
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
                  <span
                    onClick={() => this.removeLabel(label)}
                    id="remove-option"
                    class="selected-item--chip__close"
                  >
                    x
                  </span>
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
          {this.userOptions.filter(e => !e.hidden).map((option) => (
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
