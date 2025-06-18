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
          { text: "Steps", label: "steps", style: "headerStyle" },
          { text: "Design Steps", label: "designSteps", size: 100, style: "headerStyle" },
          { text: "Expected Output", label: "expectedOutput", size: 100, style: "headerStyle" }
        ],
        data: [
          {
            width: 20,
            height: 100,
            style: "firstRowStyle",
            "testName": `AUTO-${uiFormData.StoryNumber}_EMPLOYEE_SELECT_NB_RenewalTC01`,
            "description": `LOB: ${uiFormData.LoBus} \n SELECT Market and EMPLOYEE Login.\n \nNew business:\n PED as 6/1/2025 and RED 6/15/2025\nDescription:\n Validate Before Rating the policy - <valBeforeRate>\n Validate After Rating the policy -\n <User EnterValidation>\n`,
            "steps": 1,
            "designSteps": `Preconditions:\n Login As: EMPLOYEE\n Market: SELECT\nLOB: Auto\nPolicy type: Auto\nPolicy Effective Date: ${uiFormData.PolicyEff}\nRate Entry Date: ${uiFormData.RateEff}\n Governing state: ${uiFormData.State1}\n Industry Segment: ${uiFormData.segmentType}`,
            "expectedOutput": "",
          },
          {
            "testName": "",
            "description": "",
            "steps": 2,
            "designSteps": "Auto New Business:\nInitiate a Auto Policy with PED as 6/1/2025",
            "expectedOutput": "Policy should be initiate successfully"
          },
          {
            "testName": "",
            "description": "",
            "steps": 3,
            "designSteps": "Select Apartment and Direct Bill on policy Info screen",
            "expectedOutput": "System should perform given action"
          },
          {
            "testName": "",
            "description": "",
            "steps": 4,
            "designSteps": "Add/Remove Policy Coverage <PolicyCov> and Validate the Coverage\n Limit Co Limit",
            "expectedOutput": "Given should be validated"
          },
          {
            "testName": "",
            "description": "",
            "steps": 5,
            "designSteps": "If Vehicle Type is HTRK, then Enter valid class code 33599 and valid\n VIN 1HTSHPCR8RH537334 on Vechile Information",
            "expectedOutput": "Vehicle information should populated"
          },
          {
            "testName": "",
            "description": "",
            "steps": 6,
            "designSteps": "Add Remove State Coverage <stateCov> and Validate the Coverage \nLimit CovLimit",
            "expectedOutput": "Given should be validated"
          },
          {
            "testName": "",
            "description": "",
            "steps": 7,
            "designSteps": "Validate <valBeforeRate> before rating the policy",
            "expectedOutput": "Given should be validated"
          },
          {
            "testName": "",
            "description": "",
            "steps": 8,
            "designSteps": "Rate the policy",
            "expectedOutput": "Policy Sshould be rated successfully"
          },
          {
            "testName": "",
            "description": "",
            "steps": 9,
            "designSteps": "Validate this-<UserEnetrvalidation> on Quote Summary screen",
            "expectedOutput": "Given should be validated"
          },
          {
            "testName": "",
            "description": "",
            "steps": 10,
            "designSteps": "Add/Modify on Pricing screen and Validate- <AddDeleteOnPricing>",
            "expectedOutput": "Given should be validated"
          },
          {
            "testName": "",
            "description": "",
            "steps": 11,
            "designSteps": "Download the RWS and validate <valRWS>-in rating worksheet",
            "expectedOutput": "Given should be validated"
          },
          {
            "testName": "",
            "description": "",
            "steps": 12,
            "designSteps": "Validate this form FrmNbr should be present on View Attach Form\n screen",
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
            "designSteps": "Auto Renewal:\nInitiate a Renewal Transaction with PED as 6/1/2025",
            "expectedOutput": "sub Trasaction Type1 transaction should initiate successfully"
          },
          {
            "testName": "",
            "description": "",
            "steps": 15,
            "designSteps": "Navigate to Policy Coverage screen and Validate this coverage\n <PolicyCov> has added to the policy",
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
            "designSteps": "Download the RWS and validate <valRWS>-in rating worksheet",
            "expectedOutput": "Given should be validated"
          },
          {
            "testName": "",
            "description": "",
            "steps": 19,
            "designSteps": "Validate this form-FrmNbr should be present on View Attach Form\n screen",
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