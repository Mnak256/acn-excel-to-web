import Link from "next/link";
import styles from "./page.module.css";
import testDataStyles from "@/app/test-data/page.module.css";
import routes from "@/components/utils/routes";

export default function Home() {
  return (
    <div className={testDataStyles.field}>
      <div>Main content</div>
      <Link href={routes.testData}>Input Form</Link>
    </div>
  );
}
