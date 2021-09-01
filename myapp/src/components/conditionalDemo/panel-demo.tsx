import React, { Component } from "react";

export interface IPanelProps {
  txt?: string;
}

export class Panel1 extends Component<IPanelProps, {}> {
  render() {
    const { txt } = this.props;
    return <div className="panel1">{txt || "Panel1"}</div>;
  }
}

export class Panel2 extends Component<IPanelProps, {}> {
  render() {
    const { txt } = this.props;
    return <div className="panel2">{txt || "Panel2"}</div>;
  }
}

export class Panel3 extends Component<IPanelProps, {}> {
  render() {
    const { txt } = this.props;
    return <div className="panel3">{txt || "Panel3"}</div>;
  }
}

export interface IPanelDemoProps {
  panelName: string; 
}

export class PanelDemo1 extends Component<IPanelDemoProps, {}> {
  render() {
    const { panelName } = this.props;
    const selectedPanel = panelName === "panel1" ? <Panel1 /> : <Panel2 />;

    return selectedPanel;
  }
}

export class PanelDemo2 extends Component<IPanelDemoProps, {}> {
  selectPanel = (panelName: string) => {
    switch (panelName) {
      case "panel1":
        return <Panel1 />;

      case "panel2":
        return <Panel2 />;

      case "panel3":
        return <Panel3 />;

      default:
        return <div>Unknown!</div>;
    }
  };

  render() {
    const { panelName } = this.props;
    return this.selectPanel(panelName);
  }
}

export class PanelDemo3 extends Component<IPanelDemoProps, {}> {
  selectPanel = (panelName: string) => {
    const defaultPanel = <Panel3 txt="Unknown" />;
    const map: { [key: string]: any } = {
      panel1: <Panel1 />,
      panel2: <Panel2 />,
      panel3: <Panel3 />
    };
    return map[panelName] || defaultPanel;
  };

  render() {
    const { panelName } = this.props;
    return this.selectPanel(panelName);
  }
}

export enum StatusKey {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error"
}

export interface IInfoPanelProps {
  statusKey: StatusKey;
  info: string;
}

export class InfoPanel extends Component<IInfoPanelProps, {}> {
  selectPanel = (statusKey: StatusKey, info: string) => {
    const defaultPanel = <Panel3 txt="Unknown" />; // Panel3 is default panel!
    const map: { [key: string]: any } = {
      success: <Panel1 txt={info} />,
      warning: <Panel2 txt={info} />,
      error: <Panel3 txt={info} />
    };
    return map[statusKey] || defaultPanel;
  };

  render() {
    const { statusKey, info } = this.props;
    return this.selectPanel(statusKey, info);
  }
}
