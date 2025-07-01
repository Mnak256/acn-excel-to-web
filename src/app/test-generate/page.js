"use client";
import styles from "./page.module.css";
import { generateExcel } from "mr-excel";

// Function to handle file download
export default function downloadFile(uiFormData) {
  const headerStyle = {
    backgroundColor: "F3CCEB",
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
    verticalAlign: "middle",
    border: {
      full: {
        style: "thin",
        color: "202122",
      },
    },
  };
  const rowStyle = {
    alignment: {
      horizontal: "middle",
      vertical: "center",
    },
  };
  const data = {
    fileName: "AUTO_E2E_Test_Cases",
    styles: {
      formulaStyle: {
        backgroundColor: "F3CCEB",
        fontWeight: "bold",
        fontSize: 32,
        textAlign: "center",
        verticalAlign: "middle",
        border: {
          full: {
            style: "thin",
            color: "202122",
          },
        },
      },
      rowStyle: {
        ...rowStyle,
      },
      headerStyle: {
        ...headerStyle,
        alignment: { wrapText: true }, // Ensure header has wrapText
        wrapText: true,
      },
      firstRowStyle: {
        ...rowStyle,
        alignment: { wrapText: true }, // Add wrapText to first row
        wrapText: true,
      },
    },
    sheet: [
      {
        name: "TestCaseCreation",
        freezeHeader: true,
        headers: [
          { text: "Test Name", label: "testName", size: 20, style: "headerStyle" },
          { text: "Description", label: "description", size: 50, style: "headerStyle" },
          { text: "Steps", label: "steps", size: 7, style: "headerStyle" },
          { text: "Design Steps", label: "designSteps", size: 80, style: "headerStyle" },
          { text: "Expected Output", label: "expectedOutput", size: 80, style: "headerStyle" }
        ],
        data: [
          {
            width: 20,
            height: 100,
            style: "firstRowStyle",
            "testName": `${uiFormData.StoryNumber}_${uiFormData.LoBus}_${uiFormData.Usertype1}_${uiFormData.Market1}_NB_${uiFormData.subTransactionType1}TC01`,
            "description": `LOB: ${uiFormData.LoBus} \n ${uiFormData.Market1} Market and ${uiFormData.Usertype1} Login.\n \nNew business:\n PED as ${uiFormData.PolicyEff} and RED ${uiFormData.RateEff}\nDescription:\n Validate Before Rating the policy - ${uiFormData.BeforeRateValidation}\n Validate After Rating the policy -\n ${uiFormData.AfterRateValidation}\n`,
            "steps": 1,
            "designSteps": `Preconditions:\n Login As: ${uiFormData.Usertype1}\n Market: ${uiFormData.Market1}\nLOB: ${uiFormData.LoBus}\nPolicy type: ${uiFormData.LoBus}\nPolicy Effective Date: ${uiFormData.PolicyEff}\nRate Entry Date: ${uiFormData.RateEff}\n Governing state: ${uiFormData.State1}\n Industry Segment: ${uiFormData.segmentType}\nAddress 1: ${uiFormData.street1}, ${uiFormData.City1}, ${uiFormData.State1}, ${uiFormData.Zip1}\nAddress 2: ${uiFormData.street2}, ${uiFormData.City2}, ${uiFormData.State2}, ${uiFormData.Zip2}`,
            "expectedOutput": "",
          },
          {
            "testName": "",
            "description": "",
            "steps": 2,
            "designSteps": `Auto New Business:\nInitiate a ${uiFormData.LoBus} Policy with PED as ${uiFormData.PolicyEff}`,
            "expectedOutput": "Policy should be initiate successfully"
          },
          {
            "testName": "",
            "description": "",
            "steps": 3,
            "designSteps": `Select ${uiFormData.segmentType} and ${uiFormData.BillingType1} on policy Info screen`,
            "expectedOutput": "System should perform given action"
          },
          {
            "testName": "",
            "description": "",
            "steps": 4,
            "designSteps": `Add/Remove Policy Coverage ${uiFormData.CovCd} and Validate the Coverage\n Limit ${uiFormData.CoverageLimit}`,
            "expectedOutput": "Given should be validated"
          },
          {
            "testName": "",
            "description": "",
            "steps": 5,
            "designSteps": `If Vehicle Type is  ${uiFormData.VehicleType}, then Enter valid class code  ${uiFormData.ClassCode} and valid\n VIN  ${uiFormData.VINNum} on Vechile Information`,
            "expectedOutput": "Vehicle information should populated"
          },
          {
            "testName": "",
            "description": "",
            "steps": 6,
            "designSteps": `Add Remove State Coverage ${uiFormData.CovCd} and Validate the Coverage \n${uiFormData.CoverageLimit}`,
            "expectedOutput": "Given should be validated"
          },
          {
            "testName": "",
            "description": "",
            "steps": 7,
            "designSteps": `Validate ${uiFormData.BeforeRateValidation} before rating the policy`,
            "expectedOutput": "Given should be validated"
          },
          {
            "testName": "",
            "description": "",
            "steps": 8,
            "designSteps": "Rate the policy",
            "expectedOutput": "Policy should be rated successfully"
          },
          {
            "testName": "",
            "description": "",
            "steps": 9,
            "designSteps": `Validate this-${uiFormData.AfterRateValidation} on Quote Summary screen`,
            "expectedOutput": "Given should be validated"
          },
          {
            "testName": "",
            "description": "",
            "steps": 10,
            "designSteps": `Add/Modify on Pricing screen and Validate- ${uiFormData.PricingScreen}`,
            "expectedOutput": "Given should be validated"
          },
          {
            "testName": "",
            "description": "",
            "steps": 11,
            "designSteps": `Download the RWS and validate ${uiFormData.valRWS}-in rating worksheet`,
            "expectedOutput": "Given should be validated"
          },
          {
            "testName": "",
            "description": "",
            "steps": 12,
            "designSteps": `Validate this form ${uiFormData.FrmNumber} should be present on View Attach Form\n screen`,
            "expectedOutput": "Form should be attached"
          },
          {
            "testName": "",
            "description": "",
            "steps": 13,
            "designSteps": "Issue the policy",
            "expectedOutput": "Policy should be issued successfully"
          },
          {
            "testName": "",
            "description": "",
            "steps": 14,
            "designSteps": `Auto ${uiFormData.subTransactionType1}:\nInitiate a ${uiFormData.subTransactionType1} Transaction with PED as ${uiFormData.PolicyEff}`,
            "expectedOutput": `${uiFormData.subTransactionType1} transaction should initiate successfully`
          },
          {
            "testName": "",
            "description": "",
            "steps": 15,
            "designSteps": `Navigate to Policy Coverage screen and Validate this coverage\n ${uiFormData.CovCd} has added to the policy`,
            "expectedOutput": "Given should be validated"
          },
          {
            "testName": "",
            "description": "",
            "steps": 16,
            "designSteps": "Validate the Vechile Information should populate",
            "expectedOutput": "Vehicle information should populated."
          },
          {
            "testName": "",
            "description": "",
            "steps": 17,
            "designSteps": "Rate the policy",
            "expectedOutput": "Policy should be rated successfully"
          },
          {
            "testName": "",
            "description": "",
            "steps": 18,
            "designSteps": `Download the RWS and validate ${uiFormData.valRWS}-in rating worksheet`,
            "expectedOutput": "Given should be validated"
          },
          {
            "testName": "",
            "description": "",
            "steps": 19,
            "designSteps": `Validate this form-${uiFormData.FrmNumber} should be present on View Attach Form\n screen`,
            "expectedOutput": "Form should be attached"
          },
          {
            "testName": "",
            "description": "",
            "steps": 20,
            "designSteps": "Issue the policy",
            "expectedOutput": "Policy should be issued successfully"
          }
        ],
        styleCellCondition(data, fullData, rowIndex, colIndex, fromHeader) {
          if (fromHeader === true) {
            return "headerStyle";
          } else if (rowIndex === 0) {
            return "firstRowStyle";
          } else {
            return "rowStyle";
          }
        },
        mergeRowDataCondition(_data, _fullData, rowIndex, colIndex) {
          // Merge and center the first 20 rows of the first column (colIndex === 0)
          if (colIndex === 0 && rowIndex === 0) {
            // Merge from row 0 to row 19 in the first column
            return { rowspan: 20, colspan: 1, align: "center", valign: "middle" };
          }
          return false;
        }
      },
    ],
  };
  generateExcel(data);
}