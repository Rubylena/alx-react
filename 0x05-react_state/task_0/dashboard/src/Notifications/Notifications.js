import React from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length >
        this.props.listNotifications.length ||
      this.props.displayDrawer !== nextProps.displayDrawer
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <>
        {!this.props.displayDrawer ? (
          <div
            className={`menuItem ${css(notifyStyle.menuItem)}`}
            onClick={this.props.handleDisplayDrawer}
          >
            <p className={css(notifyStyle.p)}>Your notifications</p>
          </div>
        ) : (
          <div className={css(notifyStyle.Notifications)}>
            <button
              style={{
                position: "absolute",
                top: "7px",
                right: "7px",
                border: "none",
                background: "none",
                padding: "0",
              }}
              aria-label="Close"
              onClick={this.props.handleHideDrawer}
            >
              <img
                style={{
                  display: "inline",
                  marginTop: "5px",
                  marginRight: "5px",
                  padding: "0",
                }}
                src={closeIcon}
                alt="Close"
                width="15px"
              />
            </button>

            {this.props.listNotifications.length !== 0 ? (
              <p>Here is the list of notifications</p>
            ) : null}

            <ul>
              {this.props.listNotifications.length === 0 ? (
                <NotificationItem
                  type="default"
                  value="No new notification for now"
                />
              ) : null}
              {this.props.listNotifications.map((item) => {
                return (
                  <NotificationItem
                    key={item.id}
                    html={item.html}
                    type={item.type}
                    value={item.value}
                    markAsRead={this.markAsRead}
                    id={item.id}
                  />
                );
              })}
            </ul>
          </div>
        )}
      </>
    );
  }
}

const opacityAnim = {
  "0%": { opacity: 0.5 },
  "100%": { opacity: 1 },
};

const bounceAnim = {
  "0%": { transform: "translateY(0px)" },
  "33%": { transform: "translateY(-5px)" },
  "66%": { transform: "translateY(5px)" },
  "100%": { transform: "translateY(0px)" },
};

const notifyStyle = StyleSheet.create({
  Notifications: {
    border: "1px dashed red",
    position: "relative",
    fontSize: "20px",
    height: "100vh",
  },

  menuItem: {
    display: "flex",
    zIndex: 100,
    justifyContent: "end",
    ":hover": {
      cursor: "pointer",
      animationName: [opacityAnim, bounceAnim],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3",
    },
  },
  p: {
    backgroundColor: "#fff8f8",
  },
});

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

export default Notifications;
