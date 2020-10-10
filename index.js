//The npm request module is deprecated. We'll use it for now to save time, but we should migrate to a different module later
//const request = require("request");
const http = require("http");


const url = require('url');

require('dotenv').config(".");
const port = process.env.PORT;

const getAuthCodeUrl = new URL('https://zoom.us/oauth/authorize/');
getAuthCodeUrl.searchParams.append('response_type', 'code');
getAuthCodeUrl.searchParams.append('redirect_uri', `https://localhost:${port}`);
getAuthCodeUrl.searchParams.append('client_id', process.env.ZOOMCLIENTID);
const regAnyStr = RegExp(".+");

function routing (req, res)  {
   res.writeHead(200, {'Content-Type': 'text/html'});
    if (req.url === "/") {
      
        res.end(`<a href =${getAuthCodeUrl}>Authorize</a>`,routing);
     
      //  res.end(`<a href="http://localhost:${port}/a">test</a>`);
    } else if (regAnyStr.test(req.url)) {
         res.end("ur in");
    } else {
        res.end();
    }
}

const server = http.createServer(routing);

server.listen(port,()=>console.log("server running"));

// var options = {
//     method: 'POST',
//     url: 'https://zoom.us/oauth/token',
//     qs: {
//         grant_type: 'authorization_code',
//         //The code below is a sample authorization code. Replace it with your actual authorization code while making requests.
//         code: 'eyJhbGciOiJIUzUxMiIsInYiOiIyLjAiLCJraWQiOiJmOTU3Y2RhMi1mN2Y4LTQyNmUtYmMxZC01ZTExMmVlMzMwMWUifQ.eyJ2ZXIiOjcsImF1aWQiOiI5NDExNTdjOWU2M2UxNDA5NDQ0ZDc3ZWZlNjQ2MzIyNSIsImNvZGUiOiJ2elpRZHJCb0N4X3h0T3RaRDdOUmgyX293U1ZFVUNzQWciLCJpc3MiOiJ6bTpjaWQ6bnA3T3VSSGdRc2l5ZXEyejB1bmpFdyIsImdubyI6MCwidHlwZSI6MCwidGlkIjowLCJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiJ4dE90WkQ3TlJoMl9vd1NWRVVDc0FnIiwibmJmIjoxNjAyMzQ4NjE1LCJleHAiOjE2MDIzNTIyMTUsImlhdCI6MTYwMjM0ODYxNSwiYWlkIjoiUFVuRFRjd1FRbE9WM1ktZXl6cFdtZyIsImp0aSI6ImU3ODk0MGRkLTFlZTYtNGRiNi1hNmU5LTA2Yzg5NGRkNGU1ZCJ9.Jd4Gpe4x7n1yR5pu5CLM88Tfuer4Nhr6MIcifKFFNtR0p2TcSjTJut5fIga_OKgPN8jKNQJtQ5fbGINm9ndnlQ',
//         //The uri below is a sample redirect_uri. Replace it with your actual redirect_uri while making requests.
//         redirect_uri: 'https://marketplace.zoom.us/docs/oauth/callback/success'
//     },
//     headers: {
//         /**The credential below is a sample base64 encoded credential. Replace it with "Authorization: 'Basic ' + Buffer.from(your_app_client_id + ':' + your_app_client_secret).toString('base64')"
//          **/
//         Authorization: 'Basic '+
//             Buffer.from(process.env.ZOOMCLIENTID + ':' + process.env.ZOOMCLIENTSECRET).toString('base64')
//     }
// };

// request(options, function (error, response, body) {
//     if (error) throw new Error(error);


//     console.log(body);
// });