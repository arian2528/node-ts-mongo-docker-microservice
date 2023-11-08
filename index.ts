import createServer from "./src/server/server";

async function startServer() {
    const app = await createServer();

    const port: number = parseInt(<string>process.env.PORT, 10) || 5000;
    
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

startServer();
