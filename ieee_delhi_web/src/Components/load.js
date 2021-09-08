import config from "./config"
export default function load(callback) {
    window.gapi.client.load("sheets", "v4", () => {
      window.gapi.client.sheets.spreadsheets.values
        .get({
          spreadsheetId: config.spreadsheetId,
          range: "Sheet1!A2:K"
        })
        .then(
          response => {
            const data = response.result.values;
            
            const cars = data.map(car => ({
              Event_Name: car[2],

Event_Description:car[3],
Date_of_event:car[4],

Event_Poster:car[5],
Student_Branch:car[9],
Social_Link:car[10]

              
            })) || [];
            callback({
              cars
            });

          },
          response => {
            callback(false, response.result.error);
          }
        );
    });
}