// ../hooks/useLoginStyles.js

export const loginStyles = {
  // Main Container
  pageContainer: {
    minHeight: "100vh",
    background: "#0a0a0a",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 100px",
    paddingTop: "80px",
  },
  // Floating Animation Blocks Container
  floatGrid: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    opacity: "0.3",
    transition: "opacity 0.5s ease",
  },
  floatBlock: (i) => ({
    width: "120px",
    height: "120px",
    background: "linear-gradient(135deg, #00d9ff 0%, #007bff 100%)",
    borderRadius: "20px",
    animation: `float ${3 + i * 0.2}s ease-in-out infinite`,
    animationDelay: `${i * 0.1}s`,
  }),
  // Form Card Container
  formCard: {
    background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
    backdropFilter: "blur(20px)",
    borderRadius: "20px",
    padding: "50px 60px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    maxWidth: "480px",
    width: "100%",
    transition: "all 0.3s ease",
  },
  // Form Elements
  inputBase: {
    width: "100%",
    padding: "14px 18px",
    background: "#121212",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    fontSize: "15px",
    color: "white",
    outline: "none",
    transition: "all 0.3s ease",
    boxSizing: "border-box",
  },
  submitButton: {
    width: "100%",
    padding: "14px",
    background: "linear-gradient(135deg, #00d9ff 0%, #764ba2 100%)",
    color: "white",
    fontSize: "16px",
    fontWeight: "700",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 25px rgba(0, 217, 255, 0.2)",
    marginBottom: "24px",
  },
};
