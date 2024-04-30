import express from "express";
import hallRouter from "./Routers/hallBooking.Router.js";

const app = express();
const PORT = 7777;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200)
    .send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>hallbooking</title>
    </head>
    <body style="background-color:#265073; color:white">

    <div style="text-align: center; color:white; background-color:#265073; border-radius: 20px;  padding: 10px;"><h1> NodeJS Hall Booking</h1></div>
    <div>
    <ul>
    <li>
    <h3><code style="background-color:#9AD0C2">GET:</code> Use the endpoint <code style="background-color:#9AD0C2">/hallapi/roominfo</code> to get the All Room Details</h3>
    </li>

    <li>
    <h3><code style="background-color:#9AD0C2">POST:</code> Change the endpoint<code style="background-color:#9AD0C2">/hallapi/createroom</code> to Create a New Room</h3>
    </li>

    <li>
    <h3><code style="background-color:#9AD0C2">POST:</code> Change the endpoint<code style="background-color:#9AD0C2">/hallapi/bookroom</code> to Book a New Room</h3>
    </li>

    <li>
    <h3><code style="background-color:#9AD0C2">GET:</code> Change the endpoint<code style="background-color:#9AD0C2">/hallapi/bookedroomdata</code> to retrieve all the Booked Room Data</h3>
    </li>

    <li>
    <h3><code style="background-color:#9AD0C2">GET:</code> Change the endpoint<code style="background-color:#9AD0C2">/hallapi/customersbookeddata</code> to retrieve all the Customers Booked Room Data</h3>
    </li>

    <li>
    <h3><code style="background-color:#9AD0C2">GET:</code> Change the endpoint<code style="background-color:#9AD0C2">/hallapi/customerbookingcount</code> to retrieve Booking Counts and Room Data for Booked Customers</h3>
    </li>

    </ul> 
    </div>
    
    </body>
    </html>

    `);
});
app.use("/hallapi", hallRouter);

app.listen(PORT, () => {
  console.log(`App Listening in ${PORT}`);
});
