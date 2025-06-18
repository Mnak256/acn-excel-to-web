import styles from "@/app/test-data/page.module.css";

const TransactionTypeDropdown = ({ id, label, value, onChange }) => {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <select
        id={id}
        name={id}
        className={styles.select}
        value={value}
        onChange={onChange}
      >
        <option value="Change">Change</option>
        <option value="Renewal">Renewal</option>
        <option value="Rewrite Same">Rewrite Same</option>
        <option value="Rewrite New">Rewrite New</option>
        <option value="Cancel">Cancel</option>
        <option value="Audit">Audit</option>
      </select>
    </>
  );
};

export default TransactionTypeDropdown;
