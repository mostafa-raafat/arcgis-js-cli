import {
  aliasOf,
  declared,
  property,
  subclass
} from "esri/core/accessorSupport/decorators";
import { renderable, tsx } from "esri/widgets/support/widget";

import Widget from "esri/widgets/Widget";

import <%name%>ViewModel from "./<%name%>/<%name%>ViewModel";

const CSS = {
  base: "esri-widget <%name-lower%>-base"
};

@subclass("app.widgets.<%name%>")
export default class <%name%> extends declared(Widget) {

  @aliasOf("viewModel.name")
  @renderable()
  name = "";

  @property({
    type: <%name%>ViewModel
  })
  @renderable()
  viewModel: <%name%>ViewModel = new <%name%>ViewModel();

  render() {
    return (
      <div class={CSS.base}>
        <p>
          Welcome {this.name}!
        </p>
      </div>
    );
  }

}