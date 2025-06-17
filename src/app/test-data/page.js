"use client";
import { useState } from "react";
import styles from "./page.module.css";
import StatesDropdown from "@/components/TestData/StatesDropdown";
import UserTypeDropdown from "@/components/TestData/UserTypeDropdown";
import MarketDropdown from "@/components/TestData/MarketDropdown";
import CustomDatePicker from "@/components/TestData/CustomDatePicker";
import TransactionTypeDropdown from "@/components/TestData/UserTypeDropdown copy";
import downloadFile from "../test-generate/page";

export default function InputForm() {
  const [formData, setFormData] = useState({});

  return (
    <form
      method="GET"
      onSubmit={(event) => {
        const values = Array.from(event.target.elements)
          .filter((input) => input.type !== "submit")
          .map((input) => ({ [`${input.name}`]: input.value }))
          .reduce((acc, input) => ({ ...acc, ...input }), {});
        setFormData(values);
        console.log("Form Data:", values);
        downloadFile(values);
        event.preventDefault();
      }}
    >
      <div className={styles.field}>
        <div className={styles.flex}>
          <label htmlFor="StoryNumber" className={styles.label}>
            Story Number
          </label>
          <input type="text" id="StoryNumber" name="StoryNumber" className={styles.input}/>

          <label htmlFor="LoBus" className={styles.label}>
            Line of Business
          </label>
          <select id="LoBus" name="LoBus" className={styles.select}>
            <option value="CMP">CMP</option>
            <option value="Auto">Auto</option>
            <option value="TPP">TPP</option>
            <option value="UMB">UMB</option>
            <option value="UMB_INF">UMB_INF</option>
            <option value="WC">WC</option>
          </select>

          <UserTypeDropdown
            id="Usertype1"
            label=" User type 1 for Test case 1"
          />

          <UserTypeDropdown
            id="Usertype2"
            label=" User type 1 for Test case 2"
          />

          <UserTypeDropdown
            id="Usertype3"
            label=" User type 1 for Test case 3"
          />

          <StatesDropdown id="State1" label="Governing State" />

          <StatesDropdown id="State2" label="State 2" />

          <MarketDropdown id="Market1" label="Market 1 for Test case 1" />

          <MarketDropdown id="Market2" label="Market 2 for Test case 2" />

          <MarketDropdown id="Market3" label="Market 3 for Test case 3" />
        </div>
        <div className={styles.flex}>
          <CustomDatePicker
            id="PolicyEff"
            name="PolicyEff"
            label="Policy Effective Date"
          />

          <CustomDatePicker
            id="PriorEff"
            name="PriorEff"
            label="Prior Effective Date"
          />

          <CustomDatePicker
            id="DiffEff"
            name="DiffEff"
            label="Different Effective Date"
          />

          <CustomDatePicker
            id="RateEff"
            name="RateEff"
            label="Rate Entry Date"
          />

          <label htmlFor="segmentType" className={styles.label}>
            Business Classification
          </label>
          <select id="segmentType" name="segmentType" className={styles.select}>
            <option value="Apartment">Apartment</option>
            <option value="Building">Building</option>
            <option value="Business">Business</option>
            <option value="Clubs">Clubs</option>
            <option value="Condominium">Condominium</option>
            <option value="Contractors">Contractors</option>
            <option value="Financial Institution">Financial Institution</option>
            <option value="Garage">Garage</option>
            <option value="Hotel">Hotel</option>
            <option value="Institutional">Institutional</option>
            <option value="Manufacturer">Manufacturer</option>
            <option value="Office">Office</option>
            <option value="Religious">Religious</option>
            <option value="Resturant">Resturant</option>
            <option value="Store">Store</option>
            <option value="Tech Office">Tech Office</option>
            <option value="Wholesalers">Wholesalers</option>
          </select>

          <label htmlFor="BillingType1" className={styles.label}>
            BillingType1
          </label>
          <select id="BillingType1" name="BillingType1" className={styles.select}>
            <option value="Direct Bill">Direct Bill</option>
            <option value="Trav Pay">Trav Pay</option>
            <option value="Agency Bill Yearly">Agency Bill Yearly</option>
            <option value="Agency Bill Semi Yearly">
              Agency Bill Semi Yearly
            </option>
            <option value="Agency Bill Quaterly">Agency Bill Quaterly</option>
            <option value="Agency Bill Monthly(10 equals)">
              Agency Bill Monthly(10 equals)
            </option>
          </select>

          <label htmlFor="BillingType2" className={styles.label}>
            BillingType2
          </label>
          <select id="BillingType1" name="BillingType2" className={styles.select}>
            <option value="Direct Bill">Direct Bill</option>
            <option value="Trav Pay">Trav Pay</option>
            <option value="Agency Bill Yearly">Agency Bill Yearly</option>
            <option value="Agency Bill Semi Yearly">
              Agency Bill Semi Yearly
            </option>
            <option value="Agency Bill Quaterly">Agency Bill Quaterly</option>
            <option value="Agency Bill Monthly(10 equals)">
              Agency Bill Monthly(10 equals)
            </option>
          </select>

          <label htmlFor="BeforeRateValidation" className={styles.label}>
            Before Rate Validation
          </label>
          <input
            disabled
            type="text"
            id="BeforeRateValidation"
            name="BeforeRateValidation"
            value="<valBeforeRate>"
          />

          <label htmlFor="CovCd" className={styles.label}>
            Coverage Name
          </label>
          <input
            disabled
            type="text"
            id="CovCd"
            name="CovCd"
            value="<PolicyCov>"
          />

          <label htmlFor="CoverageLimit" className={styles.label}>
            Coverage Limit
          </label>
          <input
            disabled
            type="text"
            id="CoverageLimit"
            name="CoverageLimit"
            value="<covLimit>"
          />
        </div>
        <div className={styles.flex}>
          <label htmlFor="VehicleType" className={styles.label}>
            Vehicle Type
          </label>
          <select id="VehicleType" name="VehicleType" className={styles.select}>
            <option value="PPT">PPT</option>
            <option value="Commercial Trailer">Commercial Trailer</option>
            <option value="HTRK">HTRK</option>
            <option value="LTRK">LTRK</option>
            <option value="LTRUCK">LTRUCK</option>
            <option value="MTRK">MTRK</option>
            <option value="MTRK">MTRK</option>
            <option value="Tractor">Tractor</option>
            <option value="TRL">TRL</option>
            <option value="TRUCK">TRUCK</option>
            <option value="VAN">VAN</option>
            <option value="XHTRK">XHTRK</option>
          </select>

          <label htmlFor="ClassCode" className={styles.label}>
            Class Code
          </label>
          <input type="text" id="ClassCode" name="ClassCode" className={styles.input}/>

          <label htmlFor="VINNum" className={styles.label}>
            VIN
          </label>
          <input type="text" id="VINNum" name="VINNum" className={styles.input}/>

          <label htmlFor="stateCov" className={styles.label}>
            State Cov
          </label>
          <input
            disabled
            type="text"
            id="stateCov"
            name="stateCov"
            value="<stateCov>"
          />

          <label htmlFor="PricingScreen" className={styles.label}>
            Pricing Screen Validation
          </label>
          <input
            disabled
            type="text"
            id="PricingScreen"
            name="PricingScreen"
            value="<PricingScreen>"
          />

          <label htmlFor="AfterRateValidation" className={styles.label}>
            After Rate Validation
          </label>
          <input
            disabled
            type="text"
            id="AfterRateValidation"
            name="AfterRateValidation"
            value="<AfterRateValidation>"
          />

          <label htmlFor="valRWS" className={styles.label}>
            Rating Worksheet Validation
          </label>
          <input
            disabled
            type="text"
            id="valRWS"
            name="valRWS"
            value="<valRWS>"
          />

          <label htmlFor="FrmNumber" className={styles.label}>
            Form Number
          </label>
          <input
            disabled
            type="text"
            id="FrmNumber"
            name="FrmNumber"
            value="<FrmNumber>"
          />

          <TransactionTypeDropdown
            id="subTransactionType1"
            label="Transaction Type"
          />

          <TransactionTypeDropdown
            id="subTransactionType2"
            label="Transaction Type"
          />

          <TransactionTypeDropdown
            id="subTransactionType3"
            label="Transaction Type"
          />

          <label className={styles.buttonContainer}>
            {/* <TestGenerateButton /> */}
            <input type="submit" value="Generate Test case" />
          </label>
        </div>
      </div>
    </form>
  );
}
