# Faunadb_js_importer

A step by step Javascript data importer for Fauna DB, use this service inside or outside your application to import data.

# Before use

### Installation

#### FaunaDB

`npm install --save faunadb`

# Using this importer

1. Set up your database, collection and keys [FaunaDB](https://fauna.com/)

2. Convert your data into an array [Mr. Data Converter](https://shancarter.github.io/mr-data-converter/)

3. Input data in the appropriate spots (commented and split up array if too large)

4. Utilize the buttons in the return to execute the import functions after following the steps and reading the comments

- ` <button onClick={createDocumentImport}> Import everything in dataInputArray </button>`

# Final Notes

1. This importer should only be used in development envs as the fauna secret is not hidden as it should in production

- ` const client = new faunadb.Client({ secret: "Your Secret Here" });`

2. Split up your arrays if over 1000 entries
