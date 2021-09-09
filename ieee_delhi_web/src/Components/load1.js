import config1 from "./config1"
export default function load1(callback) {
    window.gapi.client.load("sheets", "v4", () => {
      window.gapi.client.sheets.spreadsheets.values
        .get({
          spreadsheetId: config1.spreadsheetId,
          range: "Sheet1!A2:H"
        })
        .then(
          response => {
            const data = response.result.values;
            
            console.log(data)
            const cars = data.map(car => ({
              SB_Name: car[2],

Report_Description:car[3],
Links:car[4],


              
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