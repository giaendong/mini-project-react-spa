import React from 'react'
import {navigateToUrl} from 'single-spa'

const ServiceHeader = () => (
  <nav style={styles.headerWrap}>
    <div className="nav-wrapper">
      <a href="/" onClick={navigateToUrl} className="brand-logo">Mini Project React Microfrontends</a>
    </div>
  </nav>
)

const styles = {};

styles.headerWrap = {
  height: "10vh",
  position: "fixed",
  zIndex: 1,
  background: "rgba(197, 239, 247, 1)",
  paddingLeft: "10px",
  color: "#2e3131",
};

export default ServiceHeader