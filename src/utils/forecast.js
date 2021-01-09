const request = require('postman-request');
const forecast = (longitute,latitude,callback) =>{
    //const url = 'http://api.weatherstack.com/current?access_key=24f9ff38e134706ad4199c34009479e6&query=37.8267,-122.4233&unit=f';
    const url = 'http://api.weatherstack.com/current?access_key=24f9ff38e134706ad4199c34009479e6&query='+ longitute + ',' + latitude + '&units=f'
request({url:url,json:true},(error,{body}) => {
 if(error)
 {
    callback('unablet o connect to weather app!',undefined)
 }else if(body.error){
     callback('check your query string',undefined)

 }else{
     callback(undefined,
     body.current.weather_descriptions[0]+ '!.It is currently ' +body.current.temperature + ' degress out.'
     )
 }
})
}

module.exports = forecast
    
