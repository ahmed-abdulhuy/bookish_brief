// copied from the package repo: 
// https://github.com/phiresky/sql.js-httpvfs/blob/master/example/src/index.ts
import { createDbWorker } from "sql.js-httpvfs";
// const httpvfs = require("sql.js-httpvfs");
// const createDbWorker = httpvfs.createDbWorker; 


const workerUrl = new URL(
    "sql.js-httpvfs/dist/sqlite.worker.js",
    import.meta.url
  );
  const wasmUrl = new URL("sql.js-httpvfs/dist/sql-wasm.wasm", import.meta.url);
  
  async function load() {
    const worker = await createDbWorker(
      [
        {
          from: "inline",
          config: {
            serverMode: "full",
            url: "/example.sqlite3",
            requestChunkSize: 4096,
          },
        },
      ],
      workerUrl.toString(),
      wasmUrl.toString()
    );
  
    const result = await worker.db.query(`select * from mytable`);
  
    document.body.textContent = JSON.stringify(result);
  }
  
  load();
  