"use client"
import xlsx from "json-as-xlsx"
import styles from "./page.module.css";

function TestGenerate() {
  const downloadFile = () => {
    let data = [
      {
        sheet: "Adults",
        columns: [
          { label: "Test Name", value: "testName" },
          { label: "Description", value: "description" },
          { label: "Steps", value: "steps" },
          { label: "Design Steps", value: "designSteps" },
          { label: "Expected Result", value: "expectedResult" }
        ],
        content: [
          { user: "Andrea", age: 20, more: { phone: "11111111" } },
          { user: "Luis", age: 21, more: { phone: "12345678" } },
        ],
      },
      {
        sheet: "Children",
        columns: [
          { label: "User", value: "user" }, // Top level data
          { label: "Age", value: "age", format: '# "years"' }, // Custom format
          { label: "Phone", value: (row) => row?.more?.phone ?? "" }, // Run functions
        ],
        content: [
          { user: "Manuel", age: 16, more: { phone: "99999999" } },
          { user: "Ana", age: 17, more: { phone: "87654321" } },
        ],
      },
    ]
    let settings = {
      fileName: "Auto E2E Test Cases", // Name of the resulting file
      extraLength: 3, // A bigger number means that the columns will be wider
    }
    xlsx(data, settings)
  }

  return (
    <div id="app">
      <h2>Test Case Generator</h2>
      <button onClick={downloadFile} className={styles.buttonText}>Download</button>
    </div>
  )
}

export default TestGenerate