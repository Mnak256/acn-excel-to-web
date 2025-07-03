export const initialFormData = {
  StoryNumber: "AUTO-7715",
  LoBus: "AUTO",
  Usertype1: "EMPLOYEE",
  Usertype2: "AGENT",
  Usertype3: "MGA",
  State1: "IA",
  State2: "KY",
  Market1: "NATIONAL ACCOUNTS",
  Market2: "MIDDLE MARKET_CAG 43",
  Market3: "AGRIBUSINESS",
  PolicyEff: "2025-06-18",
  PriorEff: "2025-06-17",
  DiffEff: "2025-06-16",
  RateEff: "2025-06-15",
  segmentType: "Business",
  BillingType1: "Direct Bill",
  BillingType2: "Trav Pay",
  BeforeRateValidation: "<valBeforeRate>",
  CovCd: "<PolicyCov>",
  CoverageLimit: "<covLimit>",
  VehicleType: "Commercial Trailer",
  ClassCode: "69691",
  VINNum: "1W1UABF23K1A12345",
  stateCov: "<stateCov>",
  PricingScreen: "<PricingScreen>",
  AfterRateValidation: "<AfterRateValidation>",
  valRWS: "<valRWS>",
  FrmNumber: "<FrmNumber>",
  subTransactionType1: "Change",
  subTransactionType2: "Renewal",
  subTransactionType3: "Rewrite New",
  street1: "121 church street",
  street2: "4th estate mountain hill ",
  City1: "montgomery",
  City2: "Anchorage",
  Zip1: "50001",
  Zip2: "50002",
};

export const getOnChangeFunction = (stateValue, stateSetter, name) => {
  return (event) => {
    const stateValueCopy = structuredClone(stateValue);
    const newValue = event.target.value;
    stateValueCopy[`${name}`] = newValue;
    stateSetter(stateValueCopy);
  };
};
