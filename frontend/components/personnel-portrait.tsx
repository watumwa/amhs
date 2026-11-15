import type { Profile } from "../content/people";
import styles from "./personnel-portrait.module.css";

/** One independent 4:5 frame for all management, staff, Board and PTA portraits. */
export function PersonnelPortrait({ profile }: { profile: Profile }) {
  if (!profile.image) return <div className="profile-avatar" aria-hidden="true">{profile.initials}</div>;

  return <div className={styles.frame}>
    <img
      src={profile.image}
      alt={`${profile.name}, ${profile.role} at Asaba Memorial High School`}
      width={240}
      height={300}
      loading="lazy"
      style={{ objectPosition: profile.imagePosition, objectFit: profile.imageFit }}
    />
  </div>;
}
