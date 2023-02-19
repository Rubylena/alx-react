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
  
  consoleDisplay() {
    // this.props.displayDrawer = false;
    console.log("Close button has been clicked");
  };

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <div>
        <p className={`${css(notifyStyle.toLeft)} ${this.props.displayDrawer && css(notifyStyle.hide)}`}>Your notifications</p>
        {this.props.displayDrawer ? (
          <div className={css(notifyStyle.Notifications)}>
            {this.props.listNotifications.length !== 0 ? (
              <p>Here is the list of notifications</p>
            ) : null}
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
              onClick={this.consoleDisplay()}
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
        ) : null}
      </div>
    );
  }
}

const notifyStyle = StyleSheet.create({
  Notifications: {
    border: "1px dashed red",
    position: "relative",
    fontSize: '20px',
    height: '100vh',
  },

  toLeft: {
    textAlign: 'right',
  },

  hide: {
    display: "none",
  }
});

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
