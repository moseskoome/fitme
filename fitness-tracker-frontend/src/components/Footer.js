const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 FITME. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '1px',
    backgroundColor: '#e9eff1', // Match body background color
    color: '#222',
    position: 'relative', // Remove fixed positioning
    bottom: '0',
    width: '100%',
    zIndex: 1000,
  },
};

export default Footer;