import { DatePicker } from "antd";
import styles from "@/app/test-data/page.module.css";
import dayjs from "dayjs";

const CustomDatePicker = ({ id, name, label, value, onChange }) => {
  const customOnChange = (_, dateString) => {
    onChange({ target: { value: dateString } });
  };

  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <DatePicker
        id={id}
        name={name}
        style={{ border: "1px solid #636363" }}
        value={dayjs(value)}
        onChange={customOnChange}
      />
    </>
  );
};

export default CustomDatePicker;
