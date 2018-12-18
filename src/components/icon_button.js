import bButton from "bootstrap-vue/es/components/button/button";

export default {
  name: "IconButton",
  render(createElement) {
    return createElement(
      bButton,
      {
        props: {
          ...this.$props
        },
        class: [
          "IconButton",
          "pl-1",
          {
            "pr-1": !this.$slots.default
          }
        ]
      },
      [
        createElement("font-awesome-icon", {
          props: {
            icon: [this.faStyle, this.faIcon]
          },
          class: ["fa-fw"]
        }),
        this.$slots.default
      ]
    );
  },
  props: {
    faIcon: String,
    faStyle: String,
    ...bButton.props
  }
};
