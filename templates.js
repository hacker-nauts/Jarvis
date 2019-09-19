module.exports = {
  textResponse: text => {
    return {
      text: `${text}`
    };
  },
  filterResponse: (id) => {
    return {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: "Awesome, try your filter!",
          buttons: [
            {
              type: "web_url",
              url: `https://www.facebook.com/fbcameraeffects/tryit/${id}/`,
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
              title: "Yes, love to ♥",
              payload: "yesFrame"
            },
            {
              type: "postback",
              title: "No, I'm uncool!",
              payload: "noFrame"
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
          template_type: "button",
          text: "Confirm your Picture for the Frame",
          buttons: [
            {
              type: "postback",
              title: "Confirm",
              payload: "confirmPicture"
            },
            {
              type: "postback",
              title: "No",
              payload: "denyPicture"
            }
          ]
        }
      }
    };
  },
  startResponse: () => {
    return {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: "Would you like a caption for the Frame",
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
  }
};
