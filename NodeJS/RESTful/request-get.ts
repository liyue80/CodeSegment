import * as request from 'request';

function getEnclosures(): Promise<any> {
  return new Promise<string>((resolve, reject) => {
    request(
      "http://192.168.250.119:27000/v1/enclosures",
      function(error:any, response:any, data:string){
        if (error!=null){
          reject("");
        } else {
          resolve(data);
        }
      }
    );
  });
}

getEnclosures().then((data:string) => {
  console.log(data);
});
