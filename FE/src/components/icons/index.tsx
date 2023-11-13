import { faBell } from "@fortawesome/free-regular-svg-icons/faBell";
import {
  faPlus,
  faBars,
  faCirclePlay,
  faUser,
  faMusic,
  faTrash,
  faGripLines,
  faCircleCheck,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faMessage } from "@fortawesome/free-solid-svg-icons/faMessage";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons/faUserPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./icons.module.css";
import { faComment, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Props from "@/types";
import { classNameWrapper } from "@/utils/className";

type IconSize = "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl";
interface IconProps extends Props {
  size?: IconSize;
}

const Icon = {
  Home: ({ size = "2xl", className }: IconProps) => (
    <FontAwesomeIcon
      className={classNameWrapper(styles.icon, className)}
      icon={faHouse}
      size={size}
    />
  ),

  Profile: ({ size = "2xl", className }: IconProps) => (
    <FontAwesomeIcon
      className={classNameWrapper(styles.icon, className)}
      icon={faUser}
      size={size}
    />
  ),

  Friends: ({ size = "2xl", className }: IconProps) => (
    <FontAwesomeIcon
      className={classNameWrapper(styles.icon, className)}
      icon={faMessage}
      size={size}
    />
  ),

  Recommendation: ({ size = "2xl", className }: IconProps) => (
    <FontAwesomeIcon
      className={classNameWrapper(styles.icon, className)}
      icon={faUserPlus}
      size={size}
    />
  ),

  Back: ({ size = "2xl", className }: IconProps) => (
    <FontAwesomeIcon
      className={classNameWrapper(styles.icon, className)}
      icon={faArrowLeft}
      size={size}
    />
  ),

  Alarm: ({ size = "2xl", className }: IconProps) => (
    <FontAwesomeIcon
      className={classNameWrapper(styles.icon, className)}
      icon={faBell}
      size={size}
    />
  ),
  Message: ({ size = "2xl", className }: IconProps) => (
    <FontAwesomeIcon
      className={classNameWrapper(styles.icon, className)}
      icon={faComment}
      size={size}
    />
  ),

  Music: ({ size = "2xl", className }: IconProps) => (
    <FontAwesomeIcon
      className={classNameWrapper(styles.icon, className)}
      icon={faMusic}
      size={size}
    />
  ),
  Plus: ({ size = "2xl", className }: IconProps) => (
    <FontAwesomeIcon
      className={classNameWrapper(styles.icon, className)}
      icon={faPlus}
      size={size}
    />
  ),

  Send: ({ size = "2xl", className }: IconProps) => (
    <FontAwesomeIcon
      className={classNameWrapper(styles.icon, className)}
      icon={faPaperPlane}
      size={size}
    />
  ),

  Menu: ({ size = "2xl", className }: IconProps) => (
    <FontAwesomeIcon
      className={classNameWrapper(styles.icon, className)}
      icon={faBars}
      size={size}
    />
  ),
  PlayMusic: ({ size = "2xl" }: IconProps) => (
    <FontAwesomeIcon className={styles.gray} icon={faCirclePlay} size={size} />
  ),
  Delete: ({ size = "2xl" }: IconProps) => (
    <FontAwesomeIcon className={styles.gray} icon={faTrash} size={size} />
  ),
  Handle: ({ size = "2xl" }: IconProps) => (
    <FontAwesomeIcon className={styles.gray} icon={faGripLines} size={size} />
  ),
  CircleCheck: ({ size = "2xl" }: IconProps) => (
    <FontAwesomeIcon className={styles.icon} icon={faCircleCheck} size={size} />
  ),
  Plus: ({ size = "2xl" }: IconProps) => (
    <FontAwesomeIcon className={styles.icon} icon={faPlus} size={size} />
  ),
  SquarePlus: ({ size = "2xl" }: IconProps) => (
    <FontAwesomeIcon className={styles.gray} icon={faSquarePlus} size={size} />
  ),
};

export default Icon;