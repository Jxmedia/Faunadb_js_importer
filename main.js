// FaunaDB Javascript Importer //
// Follow the steps below to import your data //

const FaunadbImporter = () => {
  const faunadb = require("faunadb");
  const q = faunadb.query;

  const client = new faunadb.Client({ secret: process.env.GATSBY_FAUNA_DB });

  const COLLECTION_NAME = process.env.GATSBY_FAUNA_COLLECTION;

  const dataInputArray = [
    [
      "1381",
      "ZUNIGA MIGUEL",
      "1503 DEREK DR",
      "OLIVEHURST",
      "CA",
      "95961",
      "YUBA",
      "cynthia_zuniga@ymail.com",
    ],
  ];

  // Create Documents in Fauna based on each item in Data Input Array //

  const createUserImport = async () => {
    for (var i = 0; i < dataInputArray2.length; i++) {
      client.query(
        q.Create(q.Collection("customers"), {
          data: {
            fullName: dataInputArray2[i][1],
            referralCode: dataInputArray2[i][0],
            address: dataInputArray2[i][2],
            city: dataInputArray2[i][3],
            zip: dataInputArray2[i][5],
            email: dataInputArray2[i][7],
          },
        })
      );
    }
  };

  const createUserImport2 = async () => {
    for (var i = 0; i < dataInputArray3.length; i++) {
      client.query(
        q.Create(q.Collection("customers"), {
          data: {
            fullName: dataInputArray3[i][1],
            referralCode: dataInputArray3[i][0],
            address: dataInputArray3[i][2],
            city: dataInputArray3[i][3],
            zip: dataInputArray3[i][5],
            email: dataInputArray3[i][7],
          },
        })
      );
    }
  };

  return (
    <main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20">
      <div class="text-center">
        <div className="mx-auto flex w-11/12">
          <img
            class=" w-full "
            src="https://imgix.cosmicjs.com/803ccfa0-5ff4-11eb-ad8f-d1a7eae548e8-Header-Logo-01.svg"
            alt="Logo"
          ></img>
        </div>
        <h2 class="text-2xl md:text-4xl tracking-tight md:leading-12 font-extrabold text-blue sm:text-4xl sm:leading-none">
          Refer a friend test page
        </h2>
        <button class="block" onClick={createUser}>
          Create user here
        </button>
        <button class="block" onClick={getAllUsers}>
          Get all users
        </button>
        <button class="block" onClick={getReferralCodes}>
          Get all codes
        </button>

        <button class="block" onClick={searchByEmail}>
          Search for code via email
        </button>
        <button class="block" onClick={searchByPostCard}>
          Search for code via Ref Code
        </button>
        <button class="block" onClick={createUserImport}>
          Try to import everything first half
        </button>
        <button class="block" onClick={createUserImport2}>
          Try to import everything second half
        </button>
        <button class="block" onClick={() => setDataState({ name: "blah" })}>
          Set name to blah3
        </button>
      </div>
    </main>
  );
};
export default FaunadbImporter;

/*      {createUser()}*/
