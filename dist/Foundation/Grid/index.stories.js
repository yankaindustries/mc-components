import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import './_styles.css';
storiesOf('foundation|Grid', module).add('columns', withInfo()(function () {
  return React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-6"
  }, React.createElement("div", {
    className: "example-grid-block"
  })), React.createElement("div", {
    className: "col-6"
  }, React.createElement("div", {
    className: "example-grid-block"
  }))), React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-sm-12 col-md-4"
  }, React.createElement("div", {
    className: "example-grid-block"
  })), React.createElement("div", {
    className: "col-sm-12 col-md-4"
  }, React.createElement("div", {
    className: "example-grid-block"
  })), React.createElement("div", {
    className: "col-sm-12 col-md-4"
  }, React.createElement("div", {
    className: "example-grid-block"
  }))), React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "col-md"
  }, React.createElement("div", {
    className: "example-grid-block"
  })), React.createElement("div", {
    className: "col-md"
  }, React.createElement("div", {
    className: "example-grid-block"
  })), React.createElement("div", {
    className: "col-md"
  }, React.createElement("div", {
    className: "example-grid-block"
  })), React.createElement("div", {
    className: "col-md"
  }, React.createElement("div", {
    className: "example-grid-block"
  })), React.createElement("div", {
    className: "col-md"
  }, React.createElement("div", {
    className: "example-grid-block"
  })), React.createElement("div", {
    className: "col-md"
  }, React.createElement("div", {
    className: "example-grid-block"
  })), React.createElement("div", {
    className: "col-md"
  }, React.createElement("div", {
    className: "example-grid-block"
  })), React.createElement("div", {
    className: "col-md"
  }, React.createElement("div", {
    className: "example-grid-block"
  })), React.createElement("div", {
    className: "col-md"
  }, React.createElement("div", {
    className: "example-grid-block"
  })), React.createElement("div", {
    className: "col-md"
  }, React.createElement("div", {
    className: "example-grid-block"
  })), React.createElement("div", {
    className: "col-md"
  }, React.createElement("div", {
    className: "example-grid-block"
  })), React.createElement("div", {
    className: "col-md"
  }, React.createElement("div", {
    className: "example-grid-block"
  }))));
}));