import { DatePicker } from "antd";
import styles from "@/app/test-data/page.module.css";

const CustomDatePicker = ({ id, name, label }) => {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <DatePicker id={id} name={name} style={{ border: "1px solid #636363" }} />
    </>
  );
};

export default CustomDatePicker;
