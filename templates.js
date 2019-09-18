
const templates = require('./templateData');

module.exports = {
  text: (text)=>{
    return {
      text: `${text}`
    };
  },
  filterResponse: () => {
    return templates.filterResponse;
  },
  pictureResponse: () => {
    return templates.attachmentResponse;
  },
  confirmPicture: () =>{
    return {
      attachment: {
        type: "template",
        payload: {
          template_type: "buttons",
          text: "Confirm your Picture for the Frame",
          buttons: templates.buttons
        }
      }
    };
  }
}