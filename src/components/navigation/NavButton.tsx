import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Github,
  Home,
  Linkedin,
  NotebookText,
  Palette,
  Phone,
  Twitter,
  User,
} from "lucide-react";
import type { NavItem } from "../../data";

const itemVariants = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

interface NavButtonProps extends NavItem {
  x: string | number;
  y: string | number;
  labelDirection?: "left" | "right";
}

function getIcon(icon: NavItem["icon"]) {
  const iconProps = { className: "nav-button-icon", strokeWidth: 1.5 };

  switch (icon) {
    case "home":
      return <Home {...iconProps} />;
    case "about":
      return <User {...iconProps} />;
    case "projects":
      return <Palette {...iconProps} />;
    case "contact":
      return <Phone {...iconProps} />;
    case "github":
      return <Github {...iconProps} />;
    case "linkedin":
      return <Linkedin {...iconProps} />;
    case "twitter":
      return <Twitter {...iconProps} />;
    case "resume":
      return <NotebookText {...iconProps} />;
    default:
      return <Home {...iconProps} />;
  }
}

export function NavButton({
  x,
  y,
  label,
  link,
  icon,
  newTab,
  labelDirection = "right",
}: NavButtonProps) {
  const isExternal = link.startsWith("http") || newTab;

  const buttonContent = (
    <motion.span className="nav-button-inner" variants={itemVariants}>
      {getIcon(icon)}
      <span className="nav-button-overlay" />
      <span
        className={`nav-button-tooltip ${labelDirection === "left" ? "nav-button-tooltip-left" : ""}`}
      >
        {label}
      </span>
    </motion.span>
  );

  // Desktop: positioned absolutely in circular layout
  // Mobile: simple flex layout
  const isPositioned = x !== 0 || y !== 0;

  if (isExternal) {
    return (
      <div
        className={
          isPositioned ? "nav-button-wrapper" : "nav-button-wrapper-mobile"
        }
        style={
          isPositioned ? { transform: `translate(${x}, ${y})` } : undefined
        }
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-button"
          aria-label={label}
        >
          {buttonContent}
        </a>
      </div>
    );
  }

  return (
    <div
      className={
        isPositioned ? "nav-button-wrapper" : "nav-button-wrapper-mobile"
      }
      style={isPositioned ? { transform: `translate(${x}, ${y})` } : undefined}
    >
      <Link
        to={link}
        className="nav-button"
        aria-label={label}
        preload="intent"
      >
        {buttonContent}
      </Link>
    </div>
  );
}
