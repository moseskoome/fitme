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
    padding: '1px ',
    backgroundColor: '#1f2937',
    color: '#f9fafb',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    zIndex: 1000,
  },
};

export default Footer;