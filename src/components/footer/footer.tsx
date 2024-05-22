import FooterContent from "./footer-content";

const Footer = () => {
  return (
    <footer
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      className="relative h-[400px]"
    >
      <div className="relative h-[calc(100vh+400px)] -top-[100vh]">
        <div className="h-[400px] sticky top-[calc(100vh-400px)]">
          <FooterContent />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
