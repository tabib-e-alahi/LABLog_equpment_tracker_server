import express from "express";
import cors from "cors";
import routes from "./routes";
import { toNodeHandler } from "better-auth/node";

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: "*",
    }),
);

app.use("/api/auth/*splat", toNodeHandler(auth))

app.use("/api/v1", routes);

export default app;
