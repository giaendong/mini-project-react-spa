import React from 'react'
import {navigateToUrl} from 'single-spa'

const ServiceMenu = () => (
  <div style={styles.sidebarContainer}>
    <a style={styles.sidebarAnchor} href="/" onClick={navigateToUrl}>Home</a>
    <a style={styles.sidebarAnchor} href="/serviceA" onClick={navigateToUrl}>Service A</a>
    <a style={styles.sidebarAnchor} href="/serviceB" onClick={navigateToUrl}>Service B</a>
    <a style={styles.sidebarAnchor} href="/serviceC" onClick={navigateToUrl}>Service C</a>
  </div>
)

const styles = {};

styles.sidebarContainer = {
  height: "90vh",
  width: "10vw",
  position: "fixed",
  zIndex: 3,
  top: "10vh",
  left: 0,
  background: "rgba(197, 239, 247, 1)",
  overflowX: "hidden",
  paddingTop: "20px"
};

styles.sidebarAnchor = {
  padding: "6px 8px 6px 16px",
  textDecoration: "none",
  fontSize: "25px",
  color: "#2e3131",
  display: "block",
}

export default ServiceMenu