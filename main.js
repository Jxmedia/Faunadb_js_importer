// FaunaDB Javascript Importer //
// This tool/service should not be used in a production env //
// Follow the steps below to import your data //
//
const FaunadbImporter = () => {
  const faunadb = require("faunadb");
  const q = faunadb.query;
  //
  // Step 01 - Input your FaunaDB Database Secret //
  //
  const client = new faunadb.Client({ secret: process.env.GATSBY_FAUNA_DB });
  //
  // Step 02 - Input your formatted data from Mr Data Converter so that each entry or potential document is an array //
  //
  const dataInputArray = [
    [
      "First Value in First Array",
      "Second Value in First Array",
      "Third Value in First Array",
    ],
    [
      "First Value in Second Array",
      "Second Value in Second Array",
      "Third Value in Second Array",
    ],
  ];
  //
  // For larger data arrays you may want to consider splitting them up //
  //
  /* const dataInputArrayAdditional = [
    [
      "First Value in First Additional Array",
      "Second Value in First Additional Array",
      "Third Value in First Additional Array",
    ],
  ];*/
  //
  // Create Documents in Fauna based on each array in dataInputArray //
  //
  const createDocumentImport = async () => {
    for (var i = 0; i < dataInputArray.length; i++) {
      client.query(
        q.Create(q.Collection("Fauna DB Collection Name"), {
          data: {
            First_key: dataInputArray[i][0],
            Second_key: dataInputArray[i][1],
            Third_key: dataInputArray[i][2],
          },
        })
      );
    }
  };
  //
  // Import Function for dataInputArrayAdditional if needed  //
  //
  /*
  const createDocumentImportAdditional = async () => {
    for (var i = 0; i < dataInputArrayAdditional.length; i++) {
      client.query(
        q.Create(q.Collection("Fauna DB Collection Name"), {
          data: {
            First_key: dataInputArrayAdditional[i][0],
            Second_key: dataInputArrayAdditional[i][1],
            Third_key: dataInputArrayAdditional[i][2],
       ,
          },
        })
      );
    }
  };*/

  return (
    <div>
      <div>
        <img
          src="https://imgix.cosmicjs.com/803ccfa0-5ff4-11eb-ad8f-d1a7eae548e8-Header-Logo-01.svg"
          alt="Logo"
        ></img>
      </div>

      <button onClick={createDocumentImport}>
        Import everything in dataInputArray
      </button>
      <button onClick={createDocumentImportAdditional}>
        Import everything in dataInputArrayAdditional if needed
      </button>
    </div>
  );
};
export default FaunadbImporter;
