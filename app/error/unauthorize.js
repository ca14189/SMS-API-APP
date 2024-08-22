export default class Unauthorized extends Error {
    constructor(message, statusCode) {
        console.log("hello unauthorized..-");
        super(message);
        this.statusCode = statusCode || 401;
        this.message = message || "Unauthorized";
    }
}
