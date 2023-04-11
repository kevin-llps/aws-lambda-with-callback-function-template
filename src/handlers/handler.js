export const hello = (event, context, callback) => {
  console.log("event = ", event);
  console.log("context = ", context);

  context.callbackWaitsForEmptyEventLoop = false;

  console.log("Hello World !");

  return callback(null, event);
};
