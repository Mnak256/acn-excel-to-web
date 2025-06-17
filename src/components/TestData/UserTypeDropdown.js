import styles from "@/app/test-data/page.module.css";

const UserTypeDropdown = ({ id, label }) => {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <select id={id} name={id} className={styles.select}>
        <option value="EMPLOYEE">EMPLOYEE</option>
        <option value="AGENT">AGENT</option>
        <option value="MGA">MGA</option>
      </select>
    </>
  );
};

export default UserTypeDropdown;
