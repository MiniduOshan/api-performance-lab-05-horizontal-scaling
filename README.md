# API Performance Lab 05: Horizontal Scaling

This project compares a single-process Express API with a clustered Express API under load.

## Project Layout

- [single-core/server.js](single-core/server.js) runs one Express process on port 3000.
- [clustered/server.js](clustered/server.js) starts one primary process and forks workers across available CPU cores on port 3001.
- [k6-test/load-test.js](k6-test/load-test.js) drives the load test against the clustered server.
- [results/](results/) contains saved benchmark output.

## Requirements

- Node.js
- npm
- k6 for running the load test

## Run the servers

Install Express in the server folders you want to run, then start either implementation.

Single core:

```bash
node single-core/server.js
```

Clustered:

```bash
node clustered/server.js
```

## Run the load test

With the clustered server running, execute:

```bash
k6 run k6-test/load-test.js
```

## Notes

- The single-core endpoint responds on http://localhost:3000/.
- The clustered endpoint responds on http://localhost:3001/.
- The load test is configured for 200 virtual users over 10 seconds.
