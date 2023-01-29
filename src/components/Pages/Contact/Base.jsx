import Airtable from "airtable";

//create a new Airtable object in React

//api key
//base id
const base = new Airtable({ apiKey: "" }).base("appgTa3bdAw3Fw2Tx");
// Table id
let table = base.getTable("tblNqEQwS38jdB3Pc");

//loading the data
const getData = async () => {
  let query = await table.selectRecordsAsync({ fields: table.fields });
  console.log("This is xr-h", query.records);
};
getData();

export default base;
