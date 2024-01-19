exports.handler = async function (event, context) {
    const { email } = JSON.parse(event.body);
  
    try {
      const response = await axios.post(
        'https://us21.api.mailchimp.com/3.0/lists/736ae7fda0/members',
        {
          email_address: email,
          status: 'subscribed',
        },
        {
          headers: {
            Authorization: 'Bearer 5dff99a94e7f26d58114d57ec3a5274b-us21',
          },
        }
      );
  
      return {
        statusCode: 200,
        body: JSON.stringify(response.data),
      };
    } catch (error) {
      console.error(error);
  
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' }),
      };
    }
  };