// ../components/Shared/AppFooter.jsx

import React from "react";
import { sharedStyles } from "../../hooks/useSharedStyles";

function AppFooter() {
  return (
    <footer className="py-2 px-3" style={sharedStyles.footer}>
      © ACEENGLISH ver5.0.1
    </footer>
  );
}

export default AppFooter;
