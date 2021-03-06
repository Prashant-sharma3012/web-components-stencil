/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface YoButton {
        "color": string;
        "variant": string;
    }
    interface YoSection {
        "collapse": boolean;
        "isCollapsible": boolean;
        "sectionTitle": string;
    }
    interface YoSelect {
        "isMultiple": boolean;
        "isSelecting": boolean;
        "options": string;
    }
    interface YoSideDrawer {
        "menutitle": string;
        "open": boolean;
    }
    interface YoTooltip {
        "tooltipposition": string;
        "tooltiptext": string;
    }
}
declare global {
    interface HTMLYoButtonElement extends Components.YoButton, HTMLStencilElement {
    }
    var HTMLYoButtonElement: {
        prototype: HTMLYoButtonElement;
        new (): HTMLYoButtonElement;
    };
    interface HTMLYoSectionElement extends Components.YoSection, HTMLStencilElement {
    }
    var HTMLYoSectionElement: {
        prototype: HTMLYoSectionElement;
        new (): HTMLYoSectionElement;
    };
    interface HTMLYoSelectElement extends Components.YoSelect, HTMLStencilElement {
    }
    var HTMLYoSelectElement: {
        prototype: HTMLYoSelectElement;
        new (): HTMLYoSelectElement;
    };
    interface HTMLYoSideDrawerElement extends Components.YoSideDrawer, HTMLStencilElement {
    }
    var HTMLYoSideDrawerElement: {
        prototype: HTMLYoSideDrawerElement;
        new (): HTMLYoSideDrawerElement;
    };
    interface HTMLYoTooltipElement extends Components.YoTooltip, HTMLStencilElement {
    }
    var HTMLYoTooltipElement: {
        prototype: HTMLYoTooltipElement;
        new (): HTMLYoTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "yo-button": HTMLYoButtonElement;
        "yo-section": HTMLYoSectionElement;
        "yo-select": HTMLYoSelectElement;
        "yo-side-drawer": HTMLYoSideDrawerElement;
        "yo-tooltip": HTMLYoTooltipElement;
    }
}
declare namespace LocalJSX {
    interface YoButton {
        "color"?: string;
        "variant"?: string;
    }
    interface YoSection {
        "collapse"?: boolean;
        "isCollapsible"?: boolean;
        "sectionTitle"?: string;
    }
    interface YoSelect {
        "isMultiple"?: boolean;
        "isSelecting"?: boolean;
        "onSelectChange"?: (event: CustomEvent<any>) => void;
        "options"?: string;
    }
    interface YoSideDrawer {
        "menutitle"?: string;
        "open"?: boolean;
    }
    interface YoTooltip {
        "tooltipposition"?: string;
        "tooltiptext"?: string;
    }
    interface IntrinsicElements {
        "yo-button": YoButton;
        "yo-section": YoSection;
        "yo-select": YoSelect;
        "yo-side-drawer": YoSideDrawer;
        "yo-tooltip": YoTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "yo-button": LocalJSX.YoButton & JSXBase.HTMLAttributes<HTMLYoButtonElement>;
            "yo-section": LocalJSX.YoSection & JSXBase.HTMLAttributes<HTMLYoSectionElement>;
            "yo-select": LocalJSX.YoSelect & JSXBase.HTMLAttributes<HTMLYoSelectElement>;
            "yo-side-drawer": LocalJSX.YoSideDrawer & JSXBase.HTMLAttributes<HTMLYoSideDrawerElement>;
            "yo-tooltip": LocalJSX.YoTooltip & JSXBase.HTMLAttributes<HTMLYoTooltipElement>;
        }
    }
}
