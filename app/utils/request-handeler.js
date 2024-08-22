/*********** REQUEST ********************/

export const fromBody = (req) => {
    //console.log("body data req..", req.body)
    return req.body;
};

export const fromData = (req) => {
    //console.log("form data req..", req)
    return req;
};

export const fromUserContext = (req) => {
    return req.userContext;
};

/*********** RESPONSE ********************/

export const Success = (res, message, status = 200) => (data) => {
    //this.logger.log(`a request has been made and processed successfully at: ${new Date()}`, 'info');
    //console.log("login data", data)
    res.status(status).send({
        status: true,
        message: message || 'Success',
        data
    });
};
