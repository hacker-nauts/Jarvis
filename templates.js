module.exports = {
  textResponse: text => {
    return {
      text: `${text}`
    };
  },
  filterResponse: () => {
    return {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: "Awesome, try your filter!",
          buttons: [
            {
              type: "web_url",
              url: "https://www.facebook.com/fbcameraeffects/tryit/377229799841547/",
              title: "Try Now",
              webview_height_ratio: "full"
            }
          ]
        }
      }
    };
  },
  pictureResponse: () => {
    return {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: "Would you like a frame for your event?",
          buttons: [
            {
              type: "postback",
              title: "Yes",
              payload: "yes"
            },
            {
              type: "postback",
              title: "No",
              payload: "no"
            }
          ]
        }
      }
    };
  },
  confirmResponse: () => {
    return {
      attachment: {
        type: "template",
        payload: {
          template_type: "buttons",
          text: "Confirm your Picture for the Frame",
          buttons: [
            {
              type: "postback",
              title: "Yes!",
              payload: "yes"
            },
            {
              type: "postback",
              title: "No",
              payload: "no"
            }
          ]
        }
      }
    };
  }
};
