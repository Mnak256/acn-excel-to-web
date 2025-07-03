"use client";
import { useState } from "react";
import styles from "./page.module.css";
import StatesDropdown from "@/components/TestData/StatesDropdown";
import UserTypeDropdown from "@/components/TestData/UserTypeDropdown";
import MarketDropdown from "@/components/TestData/MarketDropdown";
import CustomDatePicker from "@/components/TestData/CustomDatePicker";
import TransactionTypeDropdown from "@/components/TestData/TransactionTypeDropdown";
import downloadFile from "../test-generate/page";
import {
  initialFormData,
  getOnChangeFunction,
} from "@/components/TestData/utils";
import Fade from "@/components/common/Fade";

export default function InputForm() {
  const [formData, setFormData] = useState(initialFormData);

  return (
    <form
      onSubmit={(event) => {
        downloadFile(formData);
        event.preventDefault();
      }}
    >
      <div className={styles.field}>
        <div className={styles.flex}>
          <label htmlFor="StoryNumber" className={styles.label}>
            Story Number
          </label>
          <input
            type="text"
            id="StoryNumber"
            name="formData"
            className={styles.input}
            value={formData.StoryNumber}
            onChange={getOnChangeFunction(formData, setFormData, "StoryNumber")}
          />

          <label htmlFor="LoBus" className={styles.label}>
            Line of Business
          </label>
          <select
            id="LoBus"
            name="LoBus"
            className={styles.select}
            value={formData.LoBus}
            onChange={getOnChangeFunction(formData, setFormData, "LoBus")}
          >
            <option value="AUTO">AUTO</option>
            <option value="CMP">CMP</option>
            <option value="TPP">TPP</option>
            <option value="UMB">UMB</option>
            <option value="UMB_INF">UMB_INF</option>
            <option value="WC">WC</option>
          </select>

          <UserTypeDropdown
            id="Usertype1"
            label=" User type 1 for Test case 1"
            value={formData.Usertype1}
            onChange={getOnChangeFunction(formData, setFormData, "Usertype1")}
          />

          <UserTypeDropdown
            id="Usertype2"
            label=" User type 1 for Test case 2"
            value={formData.Usertype2}
            onChange={getOnChangeFunction(formData, setFormData, "Usertype2")}
          />

          <UserTypeDropdown
            id="Usertype3"
            label=" User type 1 for Test case 3"
            value={formData.Usertype3}
            onChange={getOnChangeFunction(formData, setFormData, "Usertype3")}
          />

          <StatesDropdown
            id="State1"
            label="Governing State"
            value={formData.State1}
            onChange={getOnChangeFunction(formData, setFormData, "State1")}
          />

          <StatesDropdown
            id="State2"
            label="State 2"
            value={formData.State2}
            onChange={getOnChangeFunction(formData, setFormData, "State2")}
          />

          <MarketDropdown
            id="Market1"
            label="Market 1 for Test case 1"
            value={formData.Market1}
            onChange={getOnChangeFunction(formData, setFormData, "Market1")}
          />

          <MarketDropdown
            id="Market2"
            label="Market 2 for Test case 2"
            value={formData.Market2}
            onChange={getOnChangeFunction(formData, setFormData, "Market2")}
          />

          <MarketDropdown
            id="Market3"
            label="Market 3 for Test case 3"
            value={formData.Market3}
            onChange={getOnChangeFunction(formData, setFormData, "Market3")}
          />
        </div>
        {/* Address fields only for Alabama (AL) and Alaska (AK) in State1 */}
        {formData.State1 === "AL" && (
          <div className={styles.flex}>
            <label htmlFor="street1" className={styles.label}>
              Street
            </label>
            <input
              type="text"
              id="street1"
              name="street1"
              className={styles.input}
              value={formData.street1}
              onChange={getOnChangeFunction(formData, setFormData, "street1")}
            />
            <label htmlFor="City1" className={styles.label}>
              City
            </label>
            <input
              type="text"
              id="City1"
              name="City1"
              className={styles.input}
              value={formData.City1}
              onChange={getOnChangeFunction(formData, setFormData, "City1")}
            />
            <label htmlFor="Zip1" className={styles.label}>
              Zip
            </label>
            <input
              type="text"
              id="Zip1"
              name="Zip1"
              className={styles.input}
              value={formData.Zip1}
              onChange={getOnChangeFunction(formData, setFormData, "Zip1")}
            />
          </div>
        )}
        {formData.State1 === "AK" && (
          <div className={styles.flex}>
            <label htmlFor="street2" className={styles.label}>
              Street
            </label>
            <input
              type="text"
              id="street2"
              name="street2"
              className={styles.input}
              value={formData.street2}
              onChange={getOnChangeFunction(formData, setFormData, "street2")}
            />
            <label htmlFor="City2" className={styles.label}>
              City
            </label>
            <input
              type="text"
              id="City2"
              name="City2"
              className={styles.input}
              value={formData.City2}
              onChange={getOnChangeFunction(formData, setFormData, "City2")}
            />
            <label htmlFor="Zip2" className={styles.label}>
              Zip
            </label>
            <input
              type="text"
              id="Zip2"
              name="Zip2"
              className={styles.input}
              value={formData.Zip2}
              onChange={getOnChangeFunction(formData, setFormData, "Zip2")}
            />
          </div>
        )}
        <div className={styles.flex}>
          <CustomDatePicker
            id="PolicyEff"
            name="PolicyEff"
            label="Policy Effective Date"
            value={formData.PolicyEff}
            onChange={getOnChangeFunction(formData, setFormData, "PolicyEff")}
          />

          <CustomDatePicker
            id="PriorEff"
            name="PriorEff"
            label="Prior Effective Date"
            value={formData.PriorEff}
            onChange={getOnChangeFunction(formData, setFormData, "PriorEff")}
          />

          <CustomDatePicker
            id="DiffEff"
            name="DiffEff"
            label="Different Effective Date"
            value={formData.DiffEff}
            onChange={getOnChangeFunction(formData, setFormData, "DiffEff")}
          />

          <CustomDatePicker
            id="RateEff"
            name="RateEff"
            label="Rate Entry Date"
            value={formData.RateEff}
            onChange={getOnChangeFunction(formData, setFormData, "RateEff")}
          />

          <label htmlFor="segmentType" className={styles.label}>
            Business Classification
          </label>
          <select
            id="segmentType"
            name="segmentType"
            className={styles.select}
            value={formData.segmentType}
            onChange={getOnChangeFunction(formData, setFormData, "segmentType")}
          >
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
          <select
            id="BillingType1"
            name="BillingType1"
            className={styles.select}
            value={formData.BillingType1}
            onChange={getOnChangeFunction(
              formData,
              setFormData,
              "BillingType1"
            )}
          >
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
          <select
            id="BillingType2"
            name="BillingType2"
            className={styles.select}
            value={formData.BillingType2}
            onChange={getOnChangeFunction(
              formData,
              setFormData,
              "BillingType2"
            )}
          >
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
            type="text"
            id="BeforeRateValidation"
            name="BeforeRateValidation"
            value={formData.BeforeRateValidation}
            onChange={getOnChangeFunction(
              formData,
              setFormData,
              "BeforeRateValidation"
            )}
          />

          <label htmlFor="CovCd" className={styles.label}>
            Coverage Name
          </label>
          <input
            type="text"
            id="CovCd"
            name="CovCd"
            value={formData.CovCd}
            onChange={getOnChangeFunction(formData, setFormData, "CovCd")}
          />

          <label htmlFor="CoverageLimit" className={styles.label}>
            Coverage Limit
          </label>
          <input
            type="text"
            id="CoverageLimit"
            name="CoverageLimit"
            value={formData.CoverageLimit}
            onChange={getOnChangeFunction(
              formData,
              setFormData,
              "CoverageLimit"
            )}
          />
        </div>
        <div className={styles.flex}>
          {/* {formData.LoBus === "Auto" && (
            <div className="fadeIn">
              
            </div>
          )} */}
          <Fade show={formData.LoBus === "AUTO"}>
            <label htmlFor="VehicleType" className={styles.label}>
              Vehicle Type
            </label>
            <select
              id="VehicleType"
              name="VehicleType"
              className={styles.select}
              value={formData.VehicleType}
              onChange={getOnChangeFunction(
                formData,
                setFormData,
                "VehicleType"
              )}
            >
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
          </Fade>

          <label htmlFor="ClassCode" className={styles.label}>
            Class Code
          </label>
          <input
            type="text"
            id="ClassCode"
            name="ClassCode"
            className={styles.input}
            value={formData.ClassCode}
            onChange={getOnChangeFunction(formData, setFormData, "ClassCode")}
          />

          <Fade show={formData.LoBus === "AUTO"}>
            <label htmlFor="VINNum" className={styles.label}>
              VIN
            </label>
            <input
              type="text"
              id="VINNum"
              name="VINNum"
              className={styles.input}
              value={formData.VINNum}
              onChange={getOnChangeFunction(formData, setFormData, "VINNum")}
            />
          </Fade>

          <label htmlFor="stateCov" className={styles.label}>
            State Cov
          </label>
          <input
            type="text"
            id="stateCov"
            name="stateCov"
            value={formData.stateCov}
            onChange={getOnChangeFunction(formData, setFormData, "stateCov")}
          />

          <label htmlFor="PricingScreen" className={styles.label}>
            Pricing Screen Validation
          </label>
          <input
            type="text"
            id="PricingScreen"
            name="PricingScreen"
            value={formData.PricingScreen}
            onChange={getOnChangeFunction(
              formData,
              setFormData,
              "PricingScreen"
            )}
          />

          <label htmlFor="AfterRateValidation" className={styles.label}>
            After Rate Validation
          </label>
          <input
            type="text"
            id="AfterRateValidation"
            name="AfterRateValidation"
            value={formData.AfterRateValidation}
            onChange={getOnChangeFunction(
              formData,
              setFormData,
              "AfterRateValidation"
            )}
          />

          <label htmlFor="valRWS" className={styles.label}>
            Rating Worksheet Validation
          </label>
          <input
            type="text"
            id="valRWS"
            name="valRWS"
            value={formData.valRWS}
            onChange={getOnChangeFunction(formData, setFormData, "valRWS")}
          />

          <label htmlFor="FrmNumber" className={styles.label}>
            Form Number
          </label>
          <input
            type="text"
            id="FrmNumber"
            name="FrmNumber"
            value={formData.FrmNumber}
            onChange={getOnChangeFunction(formData, setFormData, "FrmNumber")}
          />

          <TransactionTypeDropdown
            id="subTransactionType1"
            label="Transaction Type"
            value={formData.subTransactionType1}
            onChange={getOnChangeFunction(
              formData,
              setFormData,
              "subTransactionType1"
            )}
          />

          <TransactionTypeDropdown
            id="subTransactionType2"
            label="Transaction Type"
            value={formData.subTransactionType2}
            onChange={getOnChangeFunction(
              formData,
              setFormData,
              "subTransactionType2"
            )}
          />

          <TransactionTypeDropdown
            id="subTransactionType3"
            label="Transaction Type"
            value={formData.subTransactionType3}
            onChange={getOnChangeFunction(
              formData,
              setFormData,
              "subTransactionType3"
            )}
          />
          <div className={styles.buttonContainer}>
            <input type="reset" value="Reset" className="secondaryButton" />
            <input type="submit" value="Generate Test Case" />
          </div>
        </div>
      </div>
    </form>
  );
}
