export function dbConnection() {
    return {
        connect: () => {
            console.log('DB Connection Opened!');
        },
        disconnect: () => {
            console.log('Closing DB Connection!');
        }
    }
}