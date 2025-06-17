import styles from "@/app/test-data/page.module.css";

const MarketDropdown = ({ id, label }) => {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <select id={id} name={id}>
        <option value="NATIONAL PROGRAMS">NATIONAL PROGRAMS</option>
        <option value="NATIONAL ACCOUNTS">NATIONAL ACCOUNTS</option>
        <option value="MIDDLE MARKET_CAG 14">MIDDLE MARKET_CAG 14</option>
        <option value="MIDDLE MARKET_CAG 43">MIDDLE MARKET_CAG 43</option>
        <option value="MIDDLE MARKET_CNS 25">MIDDLE MARKET_CNS 25</option>
        <option value="MIDDLE MARKET_CNS 26">MIDDLE MARKET_CNS 26</option>
        <option value="MIDDLE MARKET_TECH 12">MIDDLE MARKET_TECH 12</option>
        <option value="MIDDLE MARKET_TECH 13">MIDDLE MARKET_TECH 13</option>
        <option value="MIDDLE MARKET_OIL N4">MIDDLE MARKET_OIL N4</option>
        <option value="EXCESS CASUALTY">EXCESS CASUALTY</option>
        <option value="AGRIBUSINESS">AGRIBUSINESS</option>
      </select>
    </>
  );
};

export default MarketDropdown;
